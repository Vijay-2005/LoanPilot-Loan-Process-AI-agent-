const http = require('http');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const url = require('url');

const PORT = 3001;
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

// MCP server URLs
const LOAN_PARSER_URL = 'http://127.0.0.1:8002/process';
const CREDIT_ANALYZER_URL = 'http://127.0.0.1:8003/process';
const RISK_ASSESSOR_URL = 'http://127.0.0.1:8004/process';
const PIPELINE_API_URL = 'http://127.0.0.1:8005/api';

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle API endpoint for getting the latest loan result
  if (pathname === '/api/get-loan-result' && req.method === 'GET') {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    axios.get(`${PIPELINE_API_URL}/loan-result`)
      .then(response => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response.data));
      })
      .catch(error => {
        console.error('Error fetching loan result:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
          success: false, 
          error: 'Error fetching loan result',
          details: error.message
        }));
      });
    return;
  }

  // Handle API endpoint for processing a new loan through the Python API
  if (pathname === '/api/run-pipeline' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        // Parse the loan application data
        const loanData = JSON.parse(body);
        
        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        
        // Send the loan data to the Python API
        axios.post(`${PIPELINE_API_URL}/process-loan`, loanData)
          .then(response => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response.data));
          })
          .catch(error => {
            console.error('Error processing loan via Python API:', error.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
              success: false, 
              error: 'Error processing loan via Python API',
              details: error.message
            }));
          });
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid JSON data' }));
      }
    });
    return;
  }

  // Handle API endpoint for loan processing
  if (pathname === '/api/process-loan' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', async () => {
      try {
        // Parse the loan application data
        const loanData = JSON.parse(body);
        
        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        
        // Process the loan application through our pipeline
        try {
          // Step 1: Call the Loan Parser
          const parserResponse = await axios.post(LOAN_PARSER_URL, loanData);
          const parserResult = parserResponse.data;
          
          // Step 2: Call the Credit Analyzer
          const creditResponse = await axios.post(CREDIT_ANALYZER_URL, parserResult);
          const creditResult = creditResponse.data;
          
          // Step 3: Call the Risk Assessor
          const riskResponse = await axios.post(RISK_ASSESSOR_URL, creditResult);
          const finalResult = riskResponse.data;
          
          // Return the final result
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: true,
            result: finalResult
          }));
        } catch (error) {
          console.error('Error processing loan:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ 
            success: false, 
            error: 'Error processing loan application',
            details: error.message
          }));
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid JSON data' }));
      }
    });
    return;
  }
  
  // Handle OPTIONS requests for CORS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle static files
  let filePath = '.' + parsedUrl.pathname;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Page not found
        fs.readFile('./index.html', (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end('Error loading index.html');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Success - return the file
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Loan processing API available at http://localhost:${PORT}/api/process-loan`);
  console.log(`Pipeline API available at http://localhost:${PORT}/api/run-pipeline`);
  console.log(`Loan result API available at http://localhost:${PORT}/api/get-loan-result`);
}); 