const fs = require('fs');
const path = require('path');
const axios = require('axios');
const url = require('url');

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

// Get the base URL from environment variables or use localhost as fallback
const BASE_API_URL = process.env.BACKEND_URL || 'http://127.0.0.1';
const LOAN_PARSER_PORT = process.env.LOAN_PARSER_PORT || '8002';
const CREDIT_ANALYZER_PORT = process.env.CREDIT_ANALYZER_PORT || '8003';
const RISK_ASSESSOR_PORT = process.env.RISK_ASSESSOR_PORT || '8004';
const PIPELINE_PORT = process.env.PIPELINE_PORT || '8005';

// MCP server URLs
const LOAN_PARSER_URL = `${BASE_API_URL}:${LOAN_PARSER_PORT}/process`;
const CREDIT_ANALYZER_URL = `${BASE_API_URL}:${CREDIT_ANALYZER_PORT}/process`;
const RISK_ASSESSOR_URL = `${BASE_API_URL}:${RISK_ASSESSOR_PORT}/process`;
const PIPELINE_API_URL = `${BASE_API_URL}:${PIPELINE_PORT}/api`;

// Log the URLs for debugging
console.log('Using backend URLs:');
console.log(`- Loan Parser: ${LOAN_PARSER_URL}`);
console.log(`- Credit Analyzer: ${CREDIT_ANALYZER_URL}`);
console.log(`- Risk Assessor: ${RISK_ASSESSOR_URL}`);
console.log(`- Pipeline API: ${PIPELINE_API_URL}`);

module.exports = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle API endpoint for getting the latest loan result
  if (pathname === '/api/get-loan-result' && req.method === 'GET') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    axios.get(`${PIPELINE_API_URL}/loan-result`)
      .then(response => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response.data));
      })
      .catch(error => {
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
        const loanData = JSON.parse(body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        axios.post(`${PIPELINE_API_URL}/process-loan`, loanData)
          .then(response => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response.data));
          })
          .catch(error => {
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
        const loanData = JSON.parse(body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        try {
          const parserResponse = await axios.post(LOAN_PARSER_URL, loanData);
          const parserResult = parserResponse.data;
          const creditResponse = await axios.post(CREDIT_ANALYZER_URL, parserResult);
          const creditResult = creditResponse.data;
          const riskResponse = await axios.post(RISK_ASSESSOR_URL, creditResult);
          const finalResult = riskResponse.data;
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
  let filePath = path.join(__dirname, '..', parsedUrl.pathname);
  if (filePath === path.join(__dirname, '..', '/')) {
    filePath = path.join(__dirname, '..', 'index.html');
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Page not found
        fs.readFile(path.join(__dirname, '..', 'index.html'), (err, content) => {
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
}; 