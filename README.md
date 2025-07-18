# Loan Checker Frontend

This is the frontend for the Loan Checker application. It allows users to submit loan applications and view the results of the analysis.

## Running Locally

### Prerequisites

- Node.js 18+
- Loan Checker Backend running (see backend instructions)

### Installation

1. Clone the repository
2. Navigate to the frontend directory:

```bash
cd frontend
```

3. Install dependencies (if needed):

```bash
npm install
```

4. Start the frontend server:

```bash
npm start
```

The frontend should now be running at http://localhost:3000

## Deployment on Netlify

1. Fork this repository to your own GitHub account
2. Log in to Netlify and click "New site from Git"
3. Choose your repository and set the following:
   - Base directory: `frontend`
   - Build command: `npm run build` (if needed)
   - Publish directory: `frontend`
   - Environment variables:
     - `BACKEND_URL`: URL of your backend (e.g., https://loan-checker-backend.onrender.com)

## Configuration

The frontend connects to the backend using the URLs configured in `app.js`. If you need to change these URLs, update the `BACKEND_URLS` object in that file.

## Usage

Once deployed, users can:

1. Submit a loan application with custom data
2. View the results of the loan analysis
3. See if the application was approved or denied

## Troubleshooting

If you see a "Failed to connect to backend" error, check:
1. If your backend is running
2. If the CORS settings allow requests from your frontend
3. If the backend URL is correctly configured in `app.js`