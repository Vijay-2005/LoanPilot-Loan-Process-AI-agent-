// Backend status checker utility
class BackendStatusChecker {
    constructor(baseUrl = 'https://loanpilot-backend.onrender.com') {
        this.baseUrl = baseUrl;
        this.status = 'unknown';
        this.lastCheck = null;
    }

    async checkStatus() {
        try {
            const response = await fetch(`${this.baseUrl}/health`);
            if (response.ok) {
                this.status = 'healthy';
                this.lastCheck = new Date();
                return { status: 'healthy', message: 'Backend is running' };
            } else {
                this.status = 'error';
                this.lastCheck = new Date();
                return { status: 'error', message: `Backend returned ${response.status}` };
            }
        } catch (error) {
            this.status = 'unreachable';
            this.lastCheck = new Date();
            return { status: 'unreachable', message: error.message };
        }
    }

    async testEndpoints() {
        const results = {};
        
        // Test health endpoint
        try {
            const healthResponse = await fetch(`${this.baseUrl}/health`);
            results.health = {
                status: healthResponse.ok ? 'ok' : 'error',
                code: healthResponse.status
            };
        } catch (error) {
            results.health = { status: 'error', message: error.message };
        }

        // Test root endpoint
        try {
            const rootResponse = await fetch(`${this.baseUrl}/`);
            results.root = {
                status: rootResponse.ok ? 'ok' : 'error',
                code: rootResponse.status
            };
        } catch (error) {
            results.root = { status: 'error', message: error.message };
        }

        // Test API endpoint
        try {
            const apiResponse = await fetch(`${this.baseUrl}/api/loan-result`);
            results.api = {
                status: apiResponse.ok ? 'ok' : 'error',
                code: apiResponse.status
            };
        } catch (error) {
            results.api = { status: 'error', message: error.message };
        }

        return results;
    }

    getStatus() {
        return {
            status: this.status,
            lastCheck: this.lastCheck,
            baseUrl: this.baseUrl
        };
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BackendStatusChecker;
} else {
    window.BackendStatusChecker = BackendStatusChecker;
} 