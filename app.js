// Application data (from provided JSON)
const applicationData = {
  "loanApplications": [
    {
      "id": "LA001",
      "applicantName": "John Smith",
      "loanAmount": 250000,
      "loanType": "Mortgage",
      "applicationDate": "2025-01-15",
      "creditScore": 750,
      "status": "pending",
      "priority": "high",
      "riskLevel": "low",
      "income": 85000,
      "debtToIncomeRatio": 0.28,
      "employmentStatus": "Full-time",
      "loanPurpose": "Home Purchase",
      "loanTerm": 30,
      "propertyValue": 300000,
      "downPayment": 60000,
      "documents": {
        "payStubs": "verified",
        "bankStatements": "pending",
        "taxReturns": "verified",
        "identityVerification": "verified"
      },
      "agentAssessments": {
        "loanOfficer": {
          "completeness": "complete",
          "recommendation": "proceed",
          "notes": "All required documents submitted"
        },
        "creditAnalyst": {
          "creditworthiness": "high",
          "recommendation": "approve",
          "notes": "Strong credit history and stable income"
        },
        "riskManager": {
          "decision": "approve",
          "conditions": "Standard terms apply",
          "notes": "Low risk profile"
        }
      }
    },
    {
      "id": "LA002",
      "applicantName": "Maria Garcia",
      "loanAmount": 45000,
      "loanType": "Auto Loan",
      "applicationDate": "2025-01-14",
      "creditScore": 680,
      "status": "in_review",
      "priority": "medium",
      "riskLevel": "medium",
      "income": 55000,
      "debtToIncomeRatio": 0.35,
      "employmentStatus": "Full-time",
      "loanPurpose": "Vehicle Purchase",
      "loanTerm": 5,
      "vehicleValue": 50000,
      "downPayment": 10000,
      "documents": {
        "payStubs": "verified",
        "bankStatements": "verified",
        "taxReturns": "pending",
        "identityVerification": "verified"
      },
      "agentAssessments": {
        "loanOfficer": {
          "completeness": "incomplete",
          "recommendation": "pending",
          "notes": "Missing recent tax returns"
        },
        "creditAnalyst": {
          "creditworthiness": "medium",
          "recommendation": "conditional",
          "notes": "Acceptable credit with some past issues"
        },
        "riskManager": {
          "decision": "pending",
          "conditions": "Awaiting documentation",
          "notes": "Review pending complete documentation"
        }
      }
    },
    {
      "id": "LA003",
      "applicantName": "Robert Johnson",
      "loanAmount": 125000,
      "loanType": "Business Loan",
      "applicationDate": "2025-01-13",
      "creditScore": 720,
      "status": "approved",
      "priority": "high",
      "riskLevel": "medium",
      "income": 95000,
      "debtToIncomeRatio": 0.32,
      "employmentStatus": "Self-employed",
      "loanPurpose": "Business Expansion",
      "loanTerm": 7,
      "businessValue": 200000,
      "downPayment": 25000,
      "documents": {
        "payStubs": "n/a",
        "bankStatements": "verified",
        "taxReturns": "verified",
        "identityVerification": "verified"
      },
      "agentAssessments": {
        "loanOfficer": {
          "completeness": "complete",
          "recommendation": "proceed",
          "notes": "Business financials look strong"
        },
        "creditAnalyst": {
          "creditworthiness": "high",
          "recommendation": "approve",
          "notes": "Strong business credit and cash flow"
        },
        "riskManager": {
          "decision": "approve",
          "conditions": "Standard business terms",
          "notes": "Approved with monitoring requirements"
        }
      }
    },
    {
      "id": "LA004",
      "applicantName": "Lisa Chen",
      "loanAmount": 15000,
      "loanType": "Personal Loan",
      "applicationDate": "2025-01-12",
      "creditScore": 640,
      "status": "denied",
      "priority": "low",
      "riskLevel": "high",
      "income": 42000,
      "debtToIncomeRatio": 0.48,
      "employmentStatus": "Part-time",
      "loanPurpose": "Debt Consolidation",
      "loanTerm": 3,
      "documents": {
        "payStubs": "verified",
        "bankStatements": "verified",
        "taxReturns": "verified",
        "identityVerification": "verified"
      },
      "agentAssessments": {
        "loanOfficer": {
          "completeness": "complete",
          "recommendation": "proceed",
          "notes": "All documentation complete"
        },
        "creditAnalyst": {
          "creditworthiness": "low",
          "recommendation": "deny",
          "notes": "High debt-to-income ratio and credit issues"
        },
        "riskManager": {
          "decision": "deny",
          "conditions": "Risk too high",
          "notes": "Exceeds risk tolerance parameters"
        }
      }
    },
    {
      "id": "LA005",
      "applicantName": "Michael Brown",
      "loanAmount": 75000,
      "loanType": "Home Equity",
      "applicationDate": "2025-01-11",
      "creditScore": 780,
      "status": "pending",
      "priority": "medium",
      "riskLevel": "low",
      "income": 78000,
      "debtToIncomeRatio": 0.25,
      "employmentStatus": "Full-time",
      "loanPurpose": "Home Improvement",
      "loanTerm": 10,
      "propertyValue": 350000,
      "documents": {
        "payStubs": "verified",
        "bankStatements": "verified",
        "taxReturns": "verified",
        "identityVerification": "verified"
      },
      "agentAssessments": {
        "loanOfficer": {
          "completeness": "complete",
          "recommendation": "proceed",
          "notes": "Excellent credit profile"
        },
        "creditAnalyst": {
          "creditworthiness": "high",
          "recommendation": "approve",
          "notes": "Outstanding credit history"
        },
        "riskManager": {
          "decision": "pending",
          "conditions": "Final review",
          "notes": "Awaiting final approval"
        }
      }
    }
  ],
  "analyticsData": {
    "kpis": {
      "totalApplications": 127,
      "approvalRate": 68,
      "averageProcessingTime": 3.2,
      "portfolioHealth": 92
    },
    "trends": {
      "monthlyApplications": [45, 52, 48, 61, 58, 67, 72, 68, 74, 79, 83, 89],
      "approvalRates": [65, 68, 62, 71, 69, 73, 75, 72, 68, 70, 74, 68],
      "riskDistribution": {
        "low": 45,
        "medium": 35,
        "high": 20
      }
    }
  },
  "userProfile": {
    "name": "Sarah Mitchell",
    "role": "Senior Loan Officer",
    "permissions": ["view_applications", "approve_loans", "generate_reports"],
    "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    "branch": "Downtown Branch",
    "employeeId": "EMP001"
  },
  "systemSettings": {
    "theme": "light",
    "notifications": true,
    "autoRefresh": 30,
    "timezone": "EST"
  }
};

// Global state
let currentView = 'dashboard';
let filteredApplications = [...applicationData.loanApplications];
let sortConfig = { key: null, direction: 'asc' };
let selectedMFA = null;
let charts = {};

// DOM elements
const loginPage = document.getElementById('loginPage');
const dashboard = document.getElementById('dashboard');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const themeToggle = document.getElementById('themeToggle');
const loginForm = document.getElementById('loginForm');
const applicationModal = document.getElementById('applicationModal');
const toastContainer = document.getElementById('toastContainer');

// Initialize application
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    setupEventListeners();
    setupTheme();
    showLoginPage();
}

function setupEventListeners() {
    // Login form
    loginForm.addEventListener('submit', handleLogin);
    
    // MFA buttons
    document.querySelectorAll('.mfa-btn').forEach(btn => {
        btn.addEventListener('click', handleMFASelection);
    });
    
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
    
    // Sidebar toggle
    sidebarToggle.addEventListener('click', toggleSidebar);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Logout
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    // Modal close
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    
    // Filter inputs
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('statusFilter').addEventListener('change', handleFilterChange);
    document.getElementById('priorityFilter').addEventListener('change', handleFilterChange);
    document.getElementById('loanTypeFilter').addEventListener('change', handleFilterChange);
    
    // Select all checkbox
    document.getElementById('selectAll').addEventListener('change', handleSelectAll);
    
    // Table sorting
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', handleSort);
    });
    
    // Modal backdrop click
    applicationModal.addEventListener('click', function(e) {
        if (e.target === applicationModal) {
            closeModal();
        }
    });
    
    // Add refresh data button event listener
    document.addEventListener('click', function(e) {
        if (e.target.textContent === 'Refresh Data') {
            handleRefreshData();
        }
    });

    // Add event listeners for pipeline buttons
    const runPipelineBtn = document.getElementById('runPipelineBtn');
    if (runPipelineBtn) {
        runPipelineBtn.addEventListener('click', runPipeline);
    }
    
    const runPipelineFullBtn = document.getElementById('runPipelineFullBtn');
    if (runPipelineFullBtn) {
        runPipelineFullBtn.addEventListener('click', runPipelineWithCustomData);
    }
}

function setupTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeToggle(savedTheme);
}

function showLoginPage() {
    loginPage.classList.remove('hidden');
    dashboard.classList.add('hidden');
}

function showDashboard() {
    loginPage.classList.add('hidden');
    dashboard.classList.remove('hidden');
    loadDashboardData();
    loadUserProfile();
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!selectedMFA) {
        showToast('Please select an MFA method', 'error');
        return;
    }
    
    // Simulate login validation
    if (username && password) {
        showToast('Login successful!', 'success');
        setTimeout(() => {
            showDashboard();
        }, 1000);
    } else {
        showToast('Please fill in all fields', 'error');
    }
}

function handleMFASelection(e) {
    // Remove previous selection
    document.querySelectorAll('.mfa-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    e.target.classList.add('selected');
    selectedMFA = e.target.dataset.mfa;
    
    showToast(`${e.target.textContent} selected`, 'info');
}

function handleNavigation(e) {
    const view = e.currentTarget.dataset.view;
    showView(view);
}

function showView(viewName) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-view="${viewName}"]`).classList.add('active');
    
    // Update views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(`${viewName}View`).classList.add('active');
    
    currentView = viewName;
    
    // Load view-specific data
    switch(viewName) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'applications':
            loadApplicationsData();
            break;
        case 'analytics':
            loadAnalyticsData();
            break;
        case 'settings':
            loadSettingsData();
            break;
    }
}

function loadDashboardData() {
    // Load recent applications
    const recentApplications = applicationData.loanApplications.slice(0, 5);
    const tableBody = document.getElementById('recentApplicationsTable');
    
    tableBody.innerHTML = recentApplications.map(app => `
        <tr>
            <td>${app.id}</td>
            <td>${app.applicantName}</td>
            <td>${app.loanType}</td>
            <td>$${app.loanAmount.toLocaleString()}</td>
            <td><span class="status-badge ${app.status}">${app.status.replace('_', ' ')}</span></td>
            <td><span class="priority-badge ${app.priority}">${app.priority}</span></td>
            <td>
                <button class="btn btn--outline btn--sm" onclick="viewApplication('${app.id}')">View</button>
            </td>
        </tr>
    `).join('');

    // Fetch the latest pipeline result
    fetchLatestPipelineResult();
}

function loadApplicationsData() {
    renderApplicationsTable();
}

function renderApplicationsTable() {
    const tableBody = document.getElementById('applicationsTable');
    
    tableBody.innerHTML = filteredApplications.map(app => `
        <tr>
            <td><input type="checkbox" data-id="${app.id}"></td>
            <td>${app.id}</td>
            <td>${app.applicantName}</td>
            <td>${app.loanType}</td>
            <td>$${app.loanAmount.toLocaleString()}</td>
            <td>${app.creditScore}</td>
            <td><span class="status-badge ${app.status}">${app.status.replace('_', ' ')}</span></td>
            <td><span class="priority-badge ${app.priority}">${app.priority}</span></td>
            <td>${formatDate(app.applicationDate)}</td>
            <td>
                <button class="btn btn--outline btn--sm" onclick="viewApplication('${app.id}')">View</button>
                <button class="btn btn--primary btn--sm" onclick="processApplication('${app.id}')">Process</button>
            </td>
        </tr>
    `).join('');
}

function loadAnalyticsData() {
    // Create charts
    createMonthlyApplicationsChart();
    createApprovalRatesChart();
    createRiskDistributionChart();
}

function loadSettingsData() {
    // Update settings form with current values
    const themeSelect = document.querySelector('#settingsView select');
    const autoRefreshInput = document.querySelector('#settingsView input[type="number"]');
    const notificationCheckbox = document.querySelector('#settingsView input[type="checkbox"]');
    
    if (themeSelect) {
        themeSelect.value = localStorage.getItem('theme') || 'light';
        themeSelect.addEventListener('change', function() {
            const newTheme = this.value;
            if (newTheme !== 'auto') {
                document.documentElement.setAttribute('data-color-scheme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeToggle(newTheme);
                showToast(`Theme changed to ${newTheme}`, 'success');
                
                // Recreate charts with new theme
                if (currentView === 'analytics') {
                    setTimeout(() => {
                        loadAnalyticsData();
                    }, 100);
                }
            }
        });
    }
    
    // Save settings button
    const saveButton = document.querySelector('#settingsView .btn--primary');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            showToast('Settings saved successfully!', 'success');
        });
    }
}

function createMonthlyApplicationsChart() {
    const ctx = document.getElementById('monthlyApplicationsChart').getContext('2d');
    
    if (charts.monthlyApplications) {
        charts.monthlyApplications.destroy();
    }
    
    charts.monthlyApplications = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Applications',
                data: applicationData.analyticsData.trends.monthlyApplications,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createApprovalRatesChart() {
    const ctx = document.getElementById('approvalRatesChart').getContext('2d');
    
    if (charts.approvalRates) {
        charts.approvalRates.destroy();
    }
    
    charts.approvalRates = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Approval Rate (%)',
                data: applicationData.analyticsData.trends.approvalRates,
                backgroundColor: '#1FB8CD',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createRiskDistributionChart() {
    const ctx = document.getElementById('riskDistributionChart').getContext('2d');
    
    if (charts.riskDistribution) {
        charts.riskDistribution.destroy();
    }
    
    const riskData = applicationData.analyticsData.trends.riskDistribution;
    
    charts.riskDistribution = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Low Risk', 'Medium Risk', 'High Risk'],
            datasets: [{
                data: [riskData.low, riskData.medium, riskData.high],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function handleRefreshData() {
    showToast('Data refreshed successfully!', 'success');
    
    // Simulate data refresh
    if (currentView === 'dashboard') {
        loadDashboardData();
    } else if (currentView === 'applications') {
        loadApplicationsData();
    } else if (currentView === 'analytics') {
        loadAnalyticsData();
    }
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    applyFilters();
}

function handleFilterChange() {
    applyFilters();
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const priorityFilter = document.getElementById('priorityFilter').value;
    const loanTypeFilter = document.getElementById('loanTypeFilter').value;
    
    filteredApplications = applicationData.loanApplications.filter(app => {
        const matchesSearch = !searchTerm || 
            app.applicantName.toLowerCase().includes(searchTerm) ||
            app.id.toLowerCase().includes(searchTerm) ||
            app.loanType.toLowerCase().includes(searchTerm);
        
        const matchesStatus = !statusFilter || app.status === statusFilter;
        const matchesPriority = !priorityFilter || app.priority === priorityFilter;
        const matchesLoanType = !loanTypeFilter || app.loanType === loanTypeFilter;
        
        return matchesSearch && matchesStatus && matchesPriority && matchesLoanType;
    });
    
    renderApplicationsTable();
}

function handleSort(e) {
    const key = e.target.dataset.sort;
    if (!key) return;
    
    // Update sort configuration
    if (sortConfig.key === key) {
        sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortConfig.key = key;
        sortConfig.direction = 'asc';
    }
    
    // Update table headers
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('asc', 'desc');
    });
    e.target.classList.add(sortConfig.direction);
    
    // Sort applications
    filteredApplications.sort((a, b) => {
        let aVal = a[key];
        let bVal = b[key];
        
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });
    
    renderApplicationsTable();
}

function handleSelectAll(e) {
    const checkboxes = document.querySelectorAll('#applicationsTable input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = e.target.checked;
    });
}

function viewApplication(id) {
    const application = applicationData.loanApplications.find(app => app.id === id);
    if (!application) return;
    
    renderApplicationModal(application);
    applicationModal.classList.add('active');
}

function renderApplicationModal(app) {
    const modalBody = document.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="application-detail">
            <div class="applicant-section">
                <div class="applicant-profile">
                    <div class="user-avatar-container">
                        <div class="user-avatar-circle" style="width: 48px; height: 48px; font-size: var(--font-size-md);">
                            ${app.applicantName.split(' ').map(name => name.charAt(0)).join('')}
                        </div>
                    </div>
                    <div class="applicant-info">
                        <h3>${app.applicantName}</h3>
                        <p>${app.employmentStatus} • ${app.loanType}</p>
                        <p>Application ID: ${app.id}</p>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Loan Details</h4>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-label">Loan Amount</span>
                            <span class="detail-value">$${app.loanAmount.toLocaleString()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Loan Purpose</span>
                            <span class="detail-value">${app.loanPurpose}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Loan Term</span>
                            <span class="detail-value">${app.loanTerm} years</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Down Payment</span>
                            <span class="detail-value">$${app.downPayment?.toLocaleString() || 'N/A'}</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Financial Information</h4>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-label">Annual Income</span>
                            <span class="detail-value">$${app.income.toLocaleString()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Debt-to-Income Ratio</span>
                            <span class="detail-value">${(app.debtToIncomeRatio * 100).toFixed(1)}%</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Employment Status</span>
                            <span class="detail-value">${app.employmentStatus}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Risk Level</span>
                            <span class="detail-value priority-badge ${app.riskLevel}">${app.riskLevel}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="assessment-section">
                <div class="detail-section">
                    <h4>Credit Score</h4>
                    <div class="text-center">
                        <div class="credit-score-gauge">
                            <svg width="120" height="120" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" class="gauge-bg"></circle>
                                <circle cx="60" cy="60" r="50" class="gauge-fill" 
                                        style="stroke-dasharray: ${(app.creditScore / 850) * 314}, 314; stroke-dashoffset: 78.5; transform: rotate(-90deg); transform-origin: 60px 60px;"></circle>
                            </svg>
                            <div class="gauge-text">
                                <span class="gauge-score">${app.creditScore}</span>
                                <span class="gauge-label">Credit Score</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Document Status</h4>
                    <div class="document-checklist">
                        ${Object.entries(app.documents).map(([doc, status]) => `
                            <div class="document-item">
                                <span class="document-name">${doc.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                                <span class="document-status ${status}">${status}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Agent Assessments</h4>
                    <div class="agent-assessments">
                        <div class="agent-panel">
                            <h5>Loan Officer</h5>
                            <div class="agent-recommendation">
                                <span class="status-badge ${app.agentAssessments.loanOfficer.recommendation}">${app.agentAssessments.loanOfficer.recommendation}</span>
                                <span>${app.agentAssessments.loanOfficer.completeness}</span>
                            </div>
                            <div class="agent-notes">${app.agentAssessments.loanOfficer.notes}</div>
                        </div>
                        
                        <div class="agent-panel">
                            <h5>Credit Analyst</h5>
                            <div class="agent-recommendation">
                                <span class="status-badge ${app.agentAssessments.creditAnalyst.recommendation}">${app.agentAssessments.creditAnalyst.recommendation}</span>
                                <span>${app.agentAssessments.creditAnalyst.creditworthiness} creditworthiness</span>
                            </div>
                            <div class="agent-notes">${app.agentAssessments.creditAnalyst.notes}</div>
                        </div>
                        
                        <div class="agent-panel">
                            <h5>Risk Manager</h5>
                            <div class="agent-recommendation">
                                <span class="status-badge ${app.agentAssessments.riskManager.decision}">${app.agentAssessments.riskManager.decision}</span>
                                <span>${app.agentAssessments.riskManager.conditions}</span>
                            </div>
                            <div class="agent-notes">${app.agentAssessments.riskManager.notes}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="decision-controls">
            <button class="btn btn--primary" onclick="approveApplication('${app.id}')">Approve</button>
            <button class="btn btn--outline" onclick="requestMoreInfo('${app.id}')">Request More Info</button>
            <button class="btn btn--outline" onclick="denyApplication('${app.id}')">Deny</button>
        </div>
    `;
}

function closeModal() {
    applicationModal.classList.remove('active');
}

function approveApplication(id) {
    showToast(`Application ${id} approved successfully!`, 'success');
    updateApplicationStatus(id, 'approved');
    closeModal();
}

function denyApplication(id) {
    showToast(`Application ${id} denied.`, 'error');
    updateApplicationStatus(id, 'denied');
    closeModal();
}

function requestMoreInfo(id) {
    showToast(`More information requested for application ${id}.`, 'warning');
    updateApplicationStatus(id, 'pending');
    closeModal();
}

function processApplication(id) {
    showToast(`Processing application ${id}...`, 'info');
    updateApplicationStatus(id, 'in_review');
}

function updateApplicationStatus(id, newStatus) {
    const app = applicationData.loanApplications.find(app => app.id === id);
    if (app) {
        app.status = newStatus;
        if (currentView === 'applications') {
            applyFilters();
        } else if (currentView === 'dashboard') {
            loadDashboardData();
        }
    }
}

function toggleSidebar() {
    sidebar.classList.toggle('open');
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
    
    // Update settings dropdown if visible
    const settingsThemeSelect = document.querySelector('#settingsView select');
    if (settingsThemeSelect) {
        settingsThemeSelect.value = newTheme;
    }
    
    // Recreate charts with new theme
    if (currentView === 'analytics') {
        setTimeout(() => {
            loadAnalyticsData();
        }, 100);
    }
}

function updateThemeToggle(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function handleLogout() {
    showToast('Logged out successfully!', 'success');
    setTimeout(() => {
        showLoginPage();
        // Reset form
        loginForm.reset();
        selectedMFA = null;
        document.querySelectorAll('.mfa-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
    }, 1000);
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// Auto-refresh functionality
setInterval(() => {
    if (currentView === 'dashboard') {
        // Simulate real-time updates
        const randomApp = applicationData.loanApplications[Math.floor(Math.random() * applicationData.loanApplications.length)];
        if (Math.random() < 0.1) { // 10% chance of update
            console.log('Auto-refreshing data...');
            loadDashboardData();
        }
    }
}, 30000); // 30 seconds

// Handle responsive design
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
    }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !sidebarToggle.contains(e.target) && 
        sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                showView('dashboard');
                break;
            case '2':
                e.preventDefault();
                showView('applications');
                break;
            case '3':
                e.preventDefault();
                showView('analytics');
                break;
            case '/':
                e.preventDefault();
                document.getElementById('searchInput').focus();
                break;
        }
    }
    
    if (e.key === 'Escape') {
        closeModal();
        sidebar.classList.remove('open');
    }
});

// Initialize tooltips and other interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for interactive elements
    document.querySelectorAll('.kpi-card, .card, .btn').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add these functions for pipeline functionality
function fetchLatestPipelineResult() {
    const pipelineResultContainer = document.getElementById('pipelineResultContainer');
    if (pipelineResultContainer) {
        pipelineResultContainer.innerHTML = '<div class="loading-message">Loading latest result...</div>';
        
        fetch('https://loanpilot-backend.onrender.com/api/loan-result')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No pipeline results available');
                }
                return response.json();
            })
            .then(data => {
                displayPipelineResult(data, pipelineResultContainer);
                
                // Update dashboard with the latest result
                updateDashboardWithLatestResult(data);
                
                // Check if there's a verification URL and show popup
                if (data.fields && data.fields.verification_url) {
                    showVerificationPopup(data.fields.verification_url);
                }
            })
            .catch(error => {
                pipelineResultContainer.innerHTML = `<div class="error-message">${error.message}</div>`;
            });
    }
}

function runPipeline() {
    const pipelineResultContainer = document.getElementById('pipelineResultContainer');
    if (pipelineResultContainer) {
        pipelineResultContainer.innerHTML = '<div class="loading-message">Processing loan application...</div>';
        
        fetch('https://loanpilot-backend.onrender.com/api/process-loan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})  // Empty body will use default loan data
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    displayPipelineResult(data.result, pipelineResultContainer);
                    
                    // Add the processed loan to the applications table
                    addProcessedLoanToApplications(data.result);
                    
                    // Update dashboard with the latest result
                    updateDashboardWithLatestResult(data.result);
                    
                    // Check if there's a verification URL and show popup
                    if (data.result.fields && data.result.fields.verification_url) {
                        showVerificationPopup(data.result.fields.verification_url);
                    }
                    
                    showToast('Pipeline executed successfully', 'success');
                } else {
                    throw new Error(data.error || 'Failed to process loan');
                }
            })
            .catch(error => {
                pipelineResultContainer.innerHTML = `<div class="error-message">${error.message}</div>`;
                showToast('Pipeline execution failed', 'error');
            });
    }
}

function runPipelineWithCustomData() {
    const fullPipelineResultContainer = document.getElementById('fullPipelineResultContainer');
    if (fullPipelineResultContainer) {
        fullPipelineResultContainer.innerHTML = '<div class="loading-message">Processing loan application...</div>';
        
        // Get form data
        const loanData = {
            name: document.getElementById('name').value,
            age: parseInt(document.getElementById('age').value),
            income: parseInt(document.getElementById('income').value),
            loan_amount: parseInt(document.getElementById('loan_amount').value),
            credit_score: parseInt(document.getElementById('credit_score').value),
            existing_liabilities: parseInt(document.getElementById('existing_liabilities').value),
            purpose: document.getElementById('purpose').value,
            verification_url: "https://verify.didit.me/session/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NTI4NzAzMzUsImV4cCI6MTc1MzQ3NTEzNSwic2Vzc2lvbl9pZCI6IjAxZTYzMzZjLWNmOTgtNDJjNC1iNWQzLTA4NmQ2MDQxOWJlMiJ9.LLO5ONCt0vUplRBd_YgfU4C2RMF6QpHSukhqpmXdYe0"
        };
        
        fetch('https://loanpilot-backend.onrender.com/api/process-loan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loanData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    displayPipelineResult(data.result, fullPipelineResultContainer);
                    
                    // Add the processed loan to the applications table
                    addProcessedLoanToApplications(data.result, loanData);
                    
                    // Update dashboard with the latest result
                    updateDashboardWithLatestResult(data.result);
                    
                    // Show verification popup
                    showVerificationPopup(loanData.verification_url);
                    
                    showToast('Pipeline executed successfully', 'success');
                } else {
                    throw new Error(data.error || 'Failed to process loan');
                }
            })
            .catch(error => {
                fullPipelineResultContainer.innerHTML = `<div class="error-message">${error.message}</div>`;
                showToast('Pipeline execution failed', 'error');
            });
    }
}

function addProcessedLoanToApplications(result, loanData = null) {
    // Extract decision from the result
    let decision = "pending";
    let name = loanData ? loanData.name : "Default Applicant";
    let loanAmount = loanData ? loanData.loan_amount : 450000;
    let loanPurpose = loanData ? loanData.purpose : "Home Renovation";
    let creditScore = loanData ? loanData.credit_score : 720;
    
    // Try to extract the decision from the result
    if (result.decision) {
        decision = result.decision.toLowerCase();
    } else if (result.final_decision) {
        decision = result.final_decision.toLowerCase();
    } else if (typeof result === 'object' && result.reasoning) {
        // Try to extract from reasoning text
        const reasoningText = result.reasoning.toLowerCase();
        if (reasoningText.includes('approved')) {
            decision = 'approved';
        } else if (reasoningText.includes('denied')) {
            decision = 'denied';
        } else if (reasoningText.includes('review')) {
            decision = 'in_review';
        }
    }
    
    // Map decision to status
    let status;
    let priority;
    let riskLevel;
    
    switch (decision) {
        case 'approved':
            status = 'approved';
            priority = Math.random() > 0.5 ? 'medium' : 'low';
            riskLevel = 'low';
            break;
        case 'denied':
            status = 'denied';
            priority = 'low';
            riskLevel = 'high';
            break;
        case 'in_review':
            status = 'in_review';
            priority = 'high';
            riskLevel = 'medium';
            break;
        default:
            status = 'pending';
            priority = 'medium';
            riskLevel = 'medium';
    }
    
    // Create a new application entry
    const newApplication = {
        id: `LA${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
        applicantName: name,
        loanAmount: loanAmount,
        loanType: loanPurpose.includes('Home') ? 'Home Equity' : 'Personal Loan',
        applicationDate: new Date().toISOString().split('T')[0],
        creditScore: creditScore,
        status: status,
        priority: priority,
        riskLevel: riskLevel,
        income: loanData ? loanData.income : 450000,
        debtToIncomeRatio: ((loanData ? loanData.existing_liabilities : 15000) / (loanData ? loanData.income : 450000)).toFixed(2),
        employmentStatus: 'Full-time',
        loanPurpose: loanPurpose,
        loanTerm: 15,
        documents: {
            payStubs: 'verified',
            bankStatements: 'verified',
            taxReturns: 'verified',
            identityVerification: 'verified'
        },
        agentAssessments: {
            loanOfficer: {
                completeness: 'complete',
                recommendation: decision === 'approved' ? 'proceed' : 'review',
                notes: result.reasoning ? result.reasoning.substring(0, 100) + '...' : 'Processed by AI'
            },
            creditAnalyst: {
                creditworthiness: decision === 'approved' ? 'high' : (decision === 'denied' ? 'low' : 'medium'),
                recommendation: decision,
                notes: result.reasoning ? result.reasoning.substring(0, 100) + '...' : 'Processed by AI'
            },
            riskManager: {
                decision: decision,
                conditions: decision === 'approved' ? 'Standard terms apply' : (decision === 'denied' ? 'Risk too high' : 'Needs review'),
                notes: result.reasoning ? result.reasoning.substring(0, 100) + '...' : 'Processed by AI'
            }
        }
    };
    
    // Add to the beginning of the applications array
    applicationData.loanApplications.unshift(newApplication);
    
    // Update filtered applications
    filteredApplications = [...applicationData.loanApplications];
    
    // Re-render the applications table
    renderApplicationsTable();
    
    // Update the dashboard if we're on it
    if (currentView === 'dashboard') {
        loadDashboardData();
    }
}

function displayPipelineResult(result, container) {
    // Extract applicant name and loan details
    const applicantName = result.name || "Applicant";
    
    // Parse decision from result
    let decision = "Pending";
    let decisionClass = "pending";
    
    if (result.decision) {
        decision = result.decision;
        decisionClass = decision.toLowerCase().includes('approve') ? 'approved' : 
                       (decision.toLowerCase().includes('deny') || decision.toLowerCase().includes('denied')) ? 'denied' : 'pending';
    } else if (result.final_decision) {
        decision = result.final_decision;
        decisionClass = decision.toLowerCase().includes('approve') ? 'approved' : 
                       (decision.toLowerCase().includes('deny') || decision.toLowerCase().includes('denied')) ? 'denied' : 'pending';
    } else if (typeof result === 'object' && result.reasoning) {
        // Try to extract from reasoning text
        const reasoningText = result.reasoning.toLowerCase();
        if (reasoningText.includes('approved')) {
            decision = 'Approved';
            decisionClass = 'approved';
        } else if (reasoningText.includes('denied')) {
            decision = 'Denied';
            decisionClass = 'denied';
        }
    }
    
    // Extract loan details from reasoning if available
    let creditScore = 720;
    let loanAmount = 450000;
    let income = 450000;
    let purpose = "Home Renovation";
    let debtToIncomeRatio = 1.03;
    
    if (result.reasoning) {
        const reasoningText = result.reasoning;
        
        // Try to extract credit score
        const creditScoreMatch = reasoningText.match(/Credit score of (\d+)/);
        if (creditScoreMatch && creditScoreMatch[1]) {
            creditScore = parseInt(creditScoreMatch[1]);
        }
        
        // Try to extract loan amount
        const loanAmountMatch = reasoningText.match(/Loan amount requested: \$?([\d,]+\.?\d*)/);
        if (loanAmountMatch && loanAmountMatch[1]) {
            loanAmount = parseFloat(loanAmountMatch[1].replace(/,/g, ''));
        }
        
        // Try to extract income
        const incomeMatch = reasoningText.match(/Annual income: \$?([\d,]+\.?\d*)/);
        if (incomeMatch && incomeMatch[1]) {
            income = parseFloat(incomeMatch[1].replace(/,/g, ''));
        }
        
        // Try to extract purpose
        const purposeMatch = reasoningText.match(/\$[\d,]+\.?\d* for ([^\.]+)/);
        if (purposeMatch && purposeMatch[1]) {
            purpose = purposeMatch[1].trim();
        }
        
        // Try to extract debt-to-income ratio
        const dtiMatch = reasoningText.match(/debt-to-income ratio: ([\d\.]+)/i);
        if (dtiMatch && dtiMatch[1]) {
            debtToIncomeRatio = parseFloat(dtiMatch[1]);
        }
    }
    
    // Create a professional UI similar to the application details view
    let html = `
        <div class="application-result">
            <div class="result-header">
                <div class="applicant-info">
                    <div class="user-avatar-container">
                        <div class="user-avatar-circle" style="width: 48px; height: 48px; font-size: var(--font-size-md);">
                            ${applicantName.split(' ').map(name => name.charAt(0)).join('')}
                        </div>
                    </div>
                    <div class="applicant-details">
                        <h3>${applicantName}</h3>
                        <div class="applicant-meta">
                            <span>Full-time</span> • <span>${purpose}</span>
                        </div>
                    </div>
                </div>
                
                <div class="credit-score-container">
                    <h4>Credit Score</h4>
                    <div class="credit-score-circle">
                        <div class="score">${creditScore}</div>
                        <div class="score-label">Credit<br>Score</div>
                    </div>
                </div>
            </div>
            
            <div class="result-body">
                <div class="result-section">
                    <h4>Loan Details</h4>
                    <div class="result-grid">
                        <div class="result-item">
                            <div class="item-label">Loan Amount</div>
                            <div class="item-value">$${loanAmount.toLocaleString()}</div>
                        </div>
                        <div class="result-item">
                            <div class="item-label">Loan Purpose</div>
                            <div class="item-value">${purpose}</div>
                        </div>
                    </div>
                </div>
                
                <div class="result-section">
                    <h4>Financial Information</h4>
                    <div class="result-grid">
                        <div class="result-item">
                            <div class="item-label">Annual Income</div>
                            <div class="item-value">$${income.toLocaleString()}</div>
                        </div>
                        <div class="result-item">
                            <div class="item-label">Debt-to-Income Ratio</div>
                            <div class="item-value">${(debtToIncomeRatio * 100).toFixed(1)}%</div>
                        </div>
                    </div>
                </div>
                
                <div class="result-section">
                    <h4>Decision</h4>
                    <div class="decision-container ${decisionClass}-container">
                        <div class="decision-badge ${decisionClass}">${decision}</div>
                    </div>
                </div>
                
                <div class="result-section">
                    <h4>Assessment Details</h4>
                    <div class="assessment-container">
                        <pre class="assessment-text">${result.reasoning || 'No detailed assessment available.'}</pre>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// New function to update dashboard KPIs based on latest result
// Function to load user profile data
function loadUserProfile() {
    const userProfile = applicationData.userProfile;
    
    // Get user initials for the avatar
    const nameParts = userProfile.name.split(' ');
    const initials = nameParts.length > 1 
        ? `${nameParts[0].charAt(0)}${nameParts[nameParts.length - 1].charAt(0)}`
        : nameParts[0].substring(0, 2);
    
    // Update the avatar with user initials
    const avatarCircle = document.querySelector('.user-avatar-circle');
    if (avatarCircle) {
        avatarCircle.textContent = initials;
    }
    
    // Update user info
    const userName = document.querySelector('.user-name');
    const userRole = document.querySelector('.user-role');
    
    if (userName) {
        userName.textContent = userProfile.name;
    }
    
    if (userRole) {
        userRole.textContent = userProfile.role;
    }
}

function updateDashboardWithLatestResult(result) {
    // Update KPI cards with real data
    const kpiCards = document.querySelectorAll('.kpi-card');
    
    // Get the current values from the KPI cards
    let totalApplications = kpiCards[0]?.querySelector('.kpi-value')?.textContent || 127;
    let approvalRate = kpiCards[1]?.querySelector('.kpi-value')?.textContent || 68;
    
    // Increment total applications
    if (kpiCards[0]?.querySelector('.kpi-value')) {
        totalApplications = parseInt(totalApplications) + 1;
        kpiCards[0].querySelector('.kpi-value').textContent = totalApplications;
    }
    
    // Update approval rate based on the decision
    let decision = "pending";
    if (result.decision) {
        decision = result.decision.toLowerCase();
    } else if (result.final_decision) {
        decision = result.final_decision.toLowerCase();
    } else if (typeof result === 'object' && result.reasoning) {
        const reasoningText = result.reasoning.toLowerCase();
        if (reasoningText.includes('approved')) {
            decision = 'approved';
        } else if (reasoningText.includes('denied')) {
            decision = 'denied';
        }
    }
    
    // Update approval rate if we got a decision
    if (kpiCards[1]?.querySelector('.kpi-value')) {
        approvalRate = parseInt(approvalRate);
        if (decision === 'approved') {
            approvalRate = Math.min(100, approvalRate + 1);
            kpiCards[1].querySelector('.kpi-value').textContent = approvalRate + '%';
            kpiCards[1].querySelector('.kpi-change').textContent = '+1.0%';
            kpiCards[1].querySelector('.kpi-change').className = 'kpi-change positive';
        } else if (decision === 'denied') {
            approvalRate = Math.max(0, approvalRate - 1);
            kpiCards[1].querySelector('.kpi-value').textContent = approvalRate + '%';
            kpiCards[1].querySelector('.kpi-change').textContent = '-1.0%';
            kpiCards[1].querySelector('.kpi-change').className = 'kpi-change negative';
        }
    }
    
    // Update portfolio health based on decision (only if the 4th card exists)
    if (kpiCards[3]?.querySelector('.kpi-value')) {
        let portfolioHealth = parseInt(kpiCards[3].querySelector('.kpi-value').textContent) || 92;
        if (decision === 'approved') {
            portfolioHealth = Math.min(100, portfolioHealth + 0.5);
            kpiCards[3].querySelector('.kpi-value').textContent = portfolioHealth + '%';
            kpiCards[3].querySelector('.kpi-change').textContent = '+0.5%';
            kpiCards[3].querySelector('.kpi-change').className = 'kpi-change positive';
        } else if (decision === 'denied') {
            kpiCards[3].querySelector('.kpi-change').textContent = '0.0%';
            kpiCards[3].querySelector('.kpi-change').className = 'kpi-change neutral';
        }
    }
    
    // Update analytics data object
    applicationData.analyticsData.kpis.totalApplications = totalApplications;
    applicationData.analyticsData.kpis.approvalRate = approvalRate;
    // Only update portfolioHealth if the 4th card exists
    if (kpiCards[3]?.querySelector('.kpi-value')) {
        applicationData.analyticsData.kpis.portfolioHealth = parseInt(kpiCards[3].querySelector('.kpi-value').textContent);
    }
    
    // If we're on the analytics view, refresh charts
    if (currentView === 'analytics') {
        loadAnalyticsData();
    }
}

// Add a new function to show verification popup
function showVerificationPopup(verificationUrl) {
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container verification-modal';
    modalContainer.id = 'verificationModal';
    
    // Create modal content
    modalContainer.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Identity Verification Required</h2>
                <span class="close-btn" onclick="closeVerificationModal()">&times;</span>
            </div>
            <div class="modal-body">
                <p>Please complete your identity verification to proceed with your loan application.</p>
                <p>Click the button below to verify your identity:</p>
                <div class="verification-actions">
                    <a href="${verificationUrl}" target="_blank" class="btn btn-primary">Verify Identity</a>
                    <button class="btn btn-secondary" onclick="closeVerificationModal()">Verify Later</button>
                </div>
            </div>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(modalContainer);
    
    // Add some styles if needed
    const style = document.createElement('style');
    style.textContent = `
        .verification-modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.85);
        }
        .verification-modal .modal-content {
            position: relative;
            max-width: 500px;
            width: 90%;
            margin: 0 auto;
            background-color: #000;
            color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            animation: modalFadeIn 0.3s ease-out;
            border: 1px solid #333;
        }
        .verification-modal .modal-header {
            border-bottom: 1px solid #333;
            padding: 15px 20px;
        }
        .verification-modal .modal-body {
            padding: 20px;
        }
        .verification-modal h2 {
            margin: 0;
            color: #fff;
        }
        .verification-modal .close-btn {
            position: absolute;
            right: 15px;
            top: 10px;
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }
        .verification-modal .close-btn:hover {
            color: #fff;
        }
        @keyframes modalFadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .verification-actions {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .verification-modal .btn-primary {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            text-decoration: none;
            font-weight: bold;
        }
        .verification-modal .btn-secondary {
            background-color: #555;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
        }
        .verification-modal .btn-primary:hover {
            background-color: #45a049;
        }
        .verification-modal .btn-secondary:hover {
            background-color: #666;
        }
    `;
    document.head.appendChild(style);
}

// Add function to close verification modal
function closeVerificationModal() {
    const modal = document.getElementById('verificationModal');
    if (modal) {
        modal.remove();
    }
}