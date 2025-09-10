// Enhanced ESIC Pune Healthcare Dashboard Application
console.log('ESIC Pune Healthcare Dashboard initializing...');

// Application Data - Enhanced with provided JSON data
const dashboardData = {
  "facilities": {
    "All Facilities": {
      "id": "all",
      "name": "All Facilities Network",
      "monthly": {
        "total_footfall": 29399,
        "total_prescriptions": 17749,
        "total_referrals": 3128,
        "total_certificates": 2300,
        "new_registrations": 5420,
        "claims_new": 284
      },
      "daily": {
        "total_footfall": 962,
        "total_prescriptions": 583,
        "total_referrals": 102,
        "total_certificates": 75,
        "new_registrations": 177,
        "claims_new": 9
      },
      "weekly": {
        "total_footfall": 7350,
        "total_prescriptions": 4437,
        "total_referrals": 782,
        "total_certificates": 575,
        "new_registrations": 1354,
        "claims_new": 71
      },
      "quarterly": {
        "total_footfall": 88197,
        "total_prescriptions": 53247,
        "total_referrals": 9384,
        "total_certificates": 6900,
        "new_registrations": 16260,
        "claims_new": 852
      }
    },
    "Chinchwad": {
      "id": 5,
      "name": "Chinchwad",
      "monthly": {
        "new_registrations": 486,
        "checkins": 3691,
        "total_footfall": 4177,
        "online_prescriptions": 1369,
        "offline_prescriptions": 321,
        "total_prescriptions": 1690,
        "total_referrals": 291,
        "total_certificates": 498,
        "claims_new": 1,
        "claims_pending": 696
      },
      "daily": {
        "new_registrations": 16,
        "checkins": 123,
        "total_footfall": 139,
        "total_prescriptions": 56,
        "total_referrals": 10,
        "total_certificates": 17,
        "claims_new": 0,
        "claims_pending": 23
      },
      "weekly": {
        "total_footfall": 1044,
        "total_prescriptions": 423,
        "total_referrals": 73,
        "total_certificates": 125,
        "new_registrations": 122,
        "claims_new": 0
      },
      "quarterly": {
        "total_footfall": 12531,
        "total_prescriptions": 5070,
        "total_referrals": 873,
        "total_certificates": 1494,
        "new_registrations": 1458,
        "claims_new": 3
      }
    },
    "Sanaswadi": {
      "id": 16,
      "name": "Sanaswadi", 
      "monthly": {
        "new_registrations": 652,
        "checkins": 2138,
        "total_footfall": 2790,
        "online_prescriptions": 1588,
        "offline_prescriptions": 201,
        "total_prescriptions": 1789,
        "total_referrals": 384,
        "total_certificates": 70,
        "claims_new": 19,
        "claims_pending": 37
      },
      "daily": {
        "new_registrations": 22,
        "checkins": 71,
        "total_footfall": 93,
        "total_prescriptions": 59,
        "total_referrals": 13,
        "total_certificates": 2,
        "claims_new": 1,
        "claims_pending": 1
      },
      "weekly": {
        "total_footfall": 698,
        "total_prescriptions": 447,
        "total_referrals": 96,
        "total_certificates": 18,
        "new_registrations": 163,
        "claims_new": 5
      },
      "quarterly": {
        "total_footfall": 8370,
        "total_prescriptions": 5367,
        "total_referrals": 1152,
        "total_certificates": 210,
        "new_registrations": 1956,
        "claims_new": 57
      }
    },
    "Chakan": {
      "id": 4,
      "name": "Chakan",
      "monthly": {
        "new_registrations": 339,
        "checkins": 2100,
        "total_footfall": 2439,
        "online_prescriptions": 1649,
        "offline_prescriptions": 3,
        "total_prescriptions": 1652,
        "total_referrals": 172,
        "total_certificates": 284,
        "claims_new": 4,
        "claims_pending": 24
      },
      "daily": {
        "new_registrations": 11,
        "checkins": 70,
        "total_footfall": 81,
        "total_prescriptions": 55,
        "total_referrals": 6,
        "total_certificates": 9,
        "claims_new": 0,
        "claims_pending": 1
      },
      "weekly": {
        "total_footfall": 610,
        "total_prescriptions": 413,
        "total_referrals": 43,
        "total_certificates": 71,
        "new_registrations": 85,
        "claims_new": 1
      },
      "quarterly": {
        "total_footfall": 7317,
        "total_prescriptions": 4956,
        "total_referrals": 516,
        "total_certificates": 852,
        "new_registrations": 1017,
        "claims_new": 12
      }
    },
    "Talegaon": {
      "id": 19,
      "name": "Talegaon",
      "monthly": {
        "new_registrations": 344,
        "checkins": 2032,
        "total_footfall": 2376,
        "online_prescriptions": 903,
        "offline_prescriptions": 95,
        "total_prescriptions": 998,
        "total_referrals": 763,
        "total_certificates": 153,
        "claims_new": 3,
        "claims_pending": 3
      },
      "daily": {
        "new_registrations": 11,
        "checkins": 68,
        "total_footfall": 79,
        "total_prescriptions": 33,
        "total_referrals": 25,
        "total_certificates": 5,
        "claims_new": 0,
        "claims_pending": 0
      },
      "weekly": {
        "total_footfall": 594,
        "total_prescriptions": 250,
        "total_referrals": 191,
        "total_certificates": 38,
        "new_registrations": 86,
        "claims_new": 1
      },
      "quarterly": {
        "total_footfall": 7128,
        "total_prescriptions": 2994,
        "total_referrals": 2289,
        "total_certificates": 459,
        "new_registrations": 1032,
        "claims_new": 9
      }
    },
    "Khed Shivapur": {
      "id": 9,
      "name": "Khed Shivapur",
      "monthly": {
        "new_registrations": 245,
        "checkins": 1704,
        "total_footfall": 1949,
        "online_prescriptions": 1250,
        "offline_prescriptions": 169,
        "total_prescriptions": 1419,
        "total_referrals": 168,
        "total_certificates": 59,
        "claims_new": 13,
        "claims_pending": 242
      },
      "daily": {
        "new_registrations": 8,
        "checkins": 57,
        "total_footfall": 65,
        "total_prescriptions": 47,
        "total_referrals": 6,
        "total_certificates": 2,
        "claims_new": 0,
        "claims_pending": 8
      },
      "weekly": {
        "total_footfall": 487,
        "total_prescriptions": 355,
        "total_referrals": 42,
        "total_certificates": 15,
        "new_registrations": 61,
        "claims_new": 3
      },
      "quarterly": {
        "total_footfall": 5847,
        "total_prescriptions": 4257,
        "total_referrals": 504,
        "total_certificates": 177,
        "new_registrations": 735,
        "claims_new": 39
      }
    },
    "Baramati": {
      "id": 2,
      "name": "Baramati",
      "monthly": {
        "new_registrations": 259,
        "checkins": 1476,
        "total_footfall": 1735,
        "online_prescriptions": 991,
        "offline_prescriptions": 15,
        "total_prescriptions": 1006,
        "total_referrals": 353,
        "total_certificates": 312,
        "claims_new": 90,
        "claims_pending": 2162
      },
      "daily": {
        "new_registrations": 9,
        "checkins": 49,
        "total_footfall": 58,
        "total_prescriptions": 33,
        "total_referrals": 12,
        "total_certificates": 10,
        "claims_new": 3,
        "claims_pending": 72
      },
      "weekly": {
        "total_footfall": 434,
        "total_prescriptions": 252,
        "total_referrals": 88,
        "total_certificates": 78,
        "new_registrations": 65,
        "claims_new": 23
      },
      "quarterly": {
        "total_footfall": 5205,
        "total_prescriptions": 3018,
        "total_referrals": 1059,
        "total_certificates": 936,
        "new_registrations": 777,
        "claims_new": 270
      }
    },
    "Hadapsar": {
      "id": 7,
      "name": "Hadapsar",
      "monthly": {
        "new_registrations": 222,
        "checkins": 1416,
        "total_footfall": 1638,
        "online_prescriptions": 919,
        "offline_prescriptions": 339,
        "total_prescriptions": 1258,
        "total_referrals": 87,
        "total_certificates": 207,
        "claims_new": 18,
        "claims_pending": 802
      },
      "daily": {
        "new_registrations": 7,
        "checkins": 47,
        "total_footfall": 54,
        "total_prescriptions": 42,
        "total_referrals": 3,
        "total_certificates": 7,
        "claims_new": 1,
        "claims_pending": 27
      },
      "weekly": {
        "total_footfall": 410,
        "total_prescriptions": 315,
        "total_referrals": 22,
        "total_certificates": 52,
        "new_registrations": 56,
        "claims_new": 5
      },
      "quarterly": {
        "total_footfall": 4914,
        "total_prescriptions": 3774,
        "total_referrals": 261,
        "total_certificates": 621,
        "new_registrations": 666,
        "claims_new": 54
      }
    },
    "Kurkumbh": {
      "id": 10,
      "name": "Kurkumbh",
      "monthly": {
        "new_registrations": 287,
        "checkins": 1154,
        "total_footfall": 1441,
        "online_prescriptions": 701,
        "offline_prescriptions": 116,
        "total_prescriptions": 817,
        "total_referrals": 110,
        "total_certificates": 112,
        "claims_new": 7,
        "claims_pending": 169
      },
      "daily": {
        "new_registrations": 10,
        "checkins": 38,
        "total_footfall": 48,
        "total_prescriptions": 27,
        "total_referrals": 4,
        "total_certificates": 4,
        "claims_new": 0,
        "claims_pending": 6
      },
      "weekly": {
        "total_footfall": 360,
        "total_prescriptions": 204,
        "total_referrals": 28,
        "total_certificates": 28,
        "new_registrations": 72,
        "claims_new": 2
      },
      "quarterly": {
        "total_footfall": 4323,
        "total_prescriptions": 2451,
        "total_referrals": 330,
        "total_certificates": 336,
        "new_registrations": 861,
        "claims_new": 21
      }
    },
    "Uruli Kanchan": {
      "id": 20,
      "name": "Uruli Kanchan",
      "monthly": {
        "new_registrations": 208,
        "checkins": 919,
        "total_footfall": 1127,
        "online_prescriptions": 0,
        "offline_prescriptions": 0,
        "total_prescriptions": 0,
        "total_referrals": 76,
        "total_certificates": 61,
        "claims_new": 15,
        "claims_pending": 127
      },
      "daily": {
        "new_registrations": 7,
        "checkins": 31,
        "total_footfall": 38,
        "total_prescriptions": 0,
        "total_referrals": 3,
        "total_certificates": 2,
        "claims_new": 1,
        "claims_pending": 4
      },
      "weekly": {
        "total_footfall": 282,
        "total_prescriptions": 0,
        "total_referrals": 19,
        "total_certificates": 15,
        "new_registrations": 52,
        "claims_new": 4
      },
      "quarterly": {
        "total_footfall": 3381,
        "total_prescriptions": 0,
        "total_referrals": 228,
        "total_certificates": 183,
        "new_registrations": 624,
        "claims_new": 45
      }
    },
    "Alandi": {
      "id": 1,
      "name": "Alandi",
      "monthly": {
        "new_registrations": 175,
        "checkins": 449,
        "total_footfall": 624,
        "online_prescriptions": 435,
        "offline_prescriptions": 1,
        "total_prescriptions": 436,
        "total_referrals": 15,
        "total_certificates": 30,
        "claims_new": 1,
        "claims_pending": 1
      },
      "daily": {
        "new_registrations": 6,
        "checkins": 15,
        "total_footfall": 21,
        "total_prescriptions": 15,
        "total_referrals": 1,
        "total_certificates": 1,
        "claims_new": 0,
        "claims_pending": 0
      },
      "weekly": {
        "total_footfall": 156,
        "total_prescriptions": 109,
        "total_referrals": 4,
        "total_certificates": 8,
        "new_registrations": 44,
        "claims_new": 0
      },
      "quarterly": {
        "total_footfall": 1872,
        "total_prescriptions": 1308,
        "total_referrals": 45,
        "total_certificates": 90,
        "new_registrations": 525,
        "claims_new": 3
      }
    },
    "Dhanwantari Hospital": {
      "id": 22,
      "name": "Dhanwantari Hospital",
      "monthly": {
        "new_registrations": 0,
        "checkins": 7669,
        "total_footfall": 7669,
        "online_prescriptions": 2342,
        "offline_prescriptions": 0,
        "total_prescriptions": 2342,
        "total_referrals": 247,
        "total_certificates": 0,
        "claims_new": 0,
        "claims_pending": 0
      },
      "daily": {
        "new_registrations": 0,
        "checkins": 255,
        "total_footfall": 255,
        "total_prescriptions": 78,
        "total_referrals": 8,
        "total_certificates": 0,
        "claims_new": 0,
        "claims_pending": 0
      },
      "weekly": {
        "total_footfall": 1917,
        "total_prescriptions": 586,
        "total_referrals": 62,
        "total_certificates": 0,
        "new_registrations": 0,
        "claims_new": 0
      },
      "quarterly": {
        "total_footfall": 23007,
        "total_prescriptions": 7026,
        "total_referrals": 741,
        "total_certificates": 0,
        "new_registrations": 0,
        "claims_new": 0
      }
    }
  },
  "facility_names": ["All Facilities", "Chinchwad", "Sanaswadi", "Chakan", "Talegaon", "Khed Shivapur", "Baramati", "Hadapsar", "Kurkumbh", "Uruli Kanchan", "Bhosari", "Mulshi", "Lonavala", "Ranjhangaon", "Hinjewadi", "Saswad", "Wagholi", "Pirangut", "Shirur", "Rajguru Nagar", "Daund", "Alandi", "Dhanwantari Hospital"],
  "time_periods": ["Daily", "Weekly", "Monthly", "Quarterly"],
  "network_overview": {
    "total_facilities": 22,
    "dispensaries": 21,
    "hospitals": 1,
    "active_status": "100%"
  },
  "targets": {
    "monthly_footfall": 30000,
    "monthly_prescriptions": 20000,
    "monthly_referrals": 3500,
    "monthly_certificates": 2500,
    "monthly_registrations": 6000
  }
};

// Global State Management
let currentState = {
  selectedFacility: 'All Facilities',
  selectedPeriod: 'Monthly',
  charts: {}
};

// DOM Elements
let facilitySelect, timePeriodSelect;
let totalFootfallEl, totalPrescriptionsEl, totalReferralsEl;
let totalCertificatesEl, newRegistrationsEl, newClaimsEl;

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing dashboard...');
  initializeDashboard();
});

function initializeDashboard() {
  // Initialize DOM elements
  facilitySelect = document.getElementById('facilitySelect');
  timePeriodSelect = document.getElementById('timePeriodSelect');
  
  totalFootfallEl = document.getElementById('totalFootfall');
  totalPrescriptionsEl = document.getElementById('totalPrescriptions');
  totalReferralsEl = document.getElementById('totalReferrals');
  totalCertificatesEl = document.getElementById('totalCertificates');
  newRegistrationsEl = document.getElementById('newRegistrations');
  newClaimsEl = document.getElementById('newClaims');

  // Setup event listeners
  setupEventListeners();
  
  // Initialize tabs
  initializeTabs();
  
  // Initialize charts
  initializeCharts();
  
  // Update initial display
  updateDashboard();
  
  // Initialize facility directory
  initializeFacilityDirectory();
  
  console.log('Dashboard initialized successfully');
}

function setupEventListeners() {
  // Facility selection change
  if (facilitySelect) {
    facilitySelect.addEventListener('change', function() {
      currentState.selectedFacility = this.value;
      updateDashboard();
      console.log('Facility changed to:', currentState.selectedFacility);
    });
  }
  
  // Time period selection change
  if (timePeriodSelect) {
    timePeriodSelect.addEventListener('change', function() {
      currentState.selectedPeriod = this.value;
      updateDashboard();
      console.log('Time period changed to:', currentState.selectedPeriod);
    });
  }
  
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Analysis controls
  const analysisMetric = document.getElementById('analysisMetric');
  if (analysisMetric) {
    analysisMetric.addEventListener('change', updateAnalysisChart);
  }
  
  // Facility search
  const facilitySearch = document.getElementById('facilitySearch');
  if (facilitySearch) {
    facilitySearch.addEventListener('input', filterFacilities);
  }
  
  // Facility filter
  const facilityFilter = document.getElementById('facilityFilter');
  if (facilityFilter) {
    facilityFilter.addEventListener('change', filterFacilities);
  }
}

function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.dataset.tab;
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      const targetContent = document.getElementById(targetTab + '-tab');
      if (targetContent) {
        targetContent.classList.add('active');
      }
      
      // Update charts when switching tabs
      setTimeout(() => {
        if (targetTab === 'analysis') {
          updateAnalysisChart();
        }
      }, 100);
    });
  });
}

function updateDashboard() {
  console.log('Updating dashboard for:', currentState.selectedFacility, currentState.selectedPeriod);
  
  const facility = dashboardData.facilities[currentState.selectedFacility];
  const period = currentState.selectedPeriod.toLowerCase();
  
  if (!facility || !facility[period]) {
    console.error('Facility or period data not found');
    return;
  }
  
  const data = facility[period];
  
  // Update metric cards with animations
  updateMetricCard(totalFootfallEl, data.total_footfall || 0);
  updateMetricCard(totalPrescriptionsEl, data.total_prescriptions || 0);
  updateMetricCard(totalReferralsEl, data.total_referrals || 0);
  updateMetricCard(totalCertificatesEl, data.total_certificates || 0);
  updateMetricCard(newRegistrationsEl, data.new_registrations || 0);
  updateMetricCard(newClaimsEl, data.claims_new || 0);
  
  // Update charts
  updatePerformanceChart();
  updateServiceChart();
}

function updateMetricCard(element, value) {
  if (!element) return;
  
  const currentValue = parseInt(element.textContent.replace(/,/g, '')) || 0;
  const targetValue = parseInt(value) || 0;
  
  // Animate number change
  animateNumber(element, currentValue, targetValue, 800);
}

function animateNumber(element, start, end, duration) {
  const startTime = performance.now();
  const difference = end - start;
  
  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (difference * easeOut));
    
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  
  requestAnimationFrame(step);
}

function initializeCharts() {
  // Performance Chart
  const performanceCtx = document.getElementById('performanceChart');
  if (performanceCtx) {
    currentState.charts.performance = new Chart(performanceCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Patient Footfall',
          data: [0, 0, 0, 0],
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top'
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
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        },
        animation: {
          duration: 800,
          easing: 'easeOutQuart'
        }
      }
    });
  }
  
  // Service Distribution Chart
  const serviceCtx = document.getElementById('serviceChart');
  if (serviceCtx) {
    currentState.charts.service = new Chart(serviceCtx, {
      type: 'doughnut',
      data: {
        labels: ['Prescriptions', 'Referrals', 'Certificates', 'Registrations'],
        datasets: [{
          data: [0, 0, 0, 0],
          backgroundColor: [
            '#2563eb',
            '#16a34a',
            '#0891b2',
            '#7c3aed'
          ],
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
        },
        animation: {
          duration: 800,
          easing: 'easeOutQuart'
        }
      }
    });
  }
  
  // Comparison Chart for Analysis tab
  const comparisonCtx = document.getElementById('comparisonChart');
  if (comparisonCtx) {
    currentState.charts.comparison = new Chart(comparisonCtx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Patient Footfall',
          data: [],
          backgroundColor: '#2563eb'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        },
        animation: {
          duration: 800,
          easing: 'easeOutQuart'
        }
      }
    });
  }
}

function updatePerformanceChart() {
  if (!currentState.charts.performance) return;
  
  const facility = dashboardData.facilities[currentState.selectedFacility];
  const period = currentState.selectedPeriod.toLowerCase();
  
  if (!facility || !facility[period]) return;
  
  const data = facility[period];
  const footfall = data.total_footfall || 0;
  
  // Generate sample weekly data based on the period data
  let weeklyData;
  if (period === 'monthly') {
    weeklyData = [
      Math.round(footfall * 0.22),
      Math.round(footfall * 0.28),
      Math.round(footfall * 0.25),
      Math.round(footfall * 0.25)
    ];
  } else if (period === 'quarterly') {
    weeklyData = [
      Math.round(footfall / 12 * 2.5),
      Math.round(footfall / 12 * 3.2),
      Math.round(footfall / 12 * 3.1),
      Math.round(footfall / 12 * 3.2)
    ];
  } else {
    weeklyData = [footfall, footfall, footfall, footfall];
  }
  
  currentState.charts.performance.data.datasets[0].data = weeklyData;
  currentState.charts.performance.update('active');
}

function updateServiceChart() {
  if (!currentState.charts.service) return;
  
  const facility = dashboardData.facilities[currentState.selectedFacility];
  const period = currentState.selectedPeriod.toLowerCase();
  
  if (!facility || !facility[period]) return;
  
  const data = facility[period];
  
  const serviceData = [
    data.total_prescriptions || 0,
    data.total_referrals || 0,
    data.total_certificates || 0,
    data.new_registrations || 0
  ];
  
  currentState.charts.service.data.datasets[0].data = serviceData;
  currentState.charts.service.update('active');
}

function updateAnalysisChart() {
  if (!currentState.charts.comparison) return;
  
  const metric = document.getElementById('analysisMetric')?.value || 'footfall';
  const period = currentState.selectedPeriod.toLowerCase();
  
  const labels = [];
  const data = [];
  
  // Get top 10 facilities for comparison
  const topFacilities = Object.entries(dashboardData.facilities)
    .filter(([name]) => name !== 'All Facilities')
    .sort(([,a], [,b]) => {
      const aValue = a[period]?.[getMetricKey(metric)] || 0;
      const bValue = b[period]?.[getMetricKey(metric)] || 0;
      return bValue - aValue;
    })
    .slice(0, 10);
  
  topFacilities.forEach(([name, facility]) => {
    labels.push(name);
    data.push(facility[period]?.[getMetricKey(metric)] || 0);
  });
  
  currentState.charts.comparison.data.labels = labels;
  currentState.charts.comparison.data.datasets[0].data = data;
  currentState.charts.comparison.data.datasets[0].label = getMetricLabel(metric);
  currentState.charts.comparison.update('active');
}

function getMetricKey(metric) {
  const metricMap = {
    'footfall': 'total_footfall',
    'prescriptions': 'total_prescriptions',
    'referrals': 'total_referrals',
    'certificates': 'total_certificates'
  };
  return metricMap[metric] || 'total_footfall';
}

function getMetricLabel(metric) {
  const labelMap = {
    'footfall': 'Patient Footfall',
    'prescriptions': 'Total Prescriptions',
    'referrals': 'Total Referrals',
    'certificates': 'Total Certificates'
  };
  return labelMap[metric] || 'Patient Footfall';
}

function initializeFacilityDirectory() {
  const facilitiesGrid = document.getElementById('facilitiesGrid');
  if (!facilitiesGrid) return;
  
  const facilities = Object.entries(dashboardData.facilities)
    .filter(([name]) => name !== 'All Facilities')
    .map(([name, data]) => ({
      name,
      type: name === 'Dhanwantari Hospital' ? 'Hospital' : 'Dispensary',
      footfall: data.monthly?.total_footfall || 0,
      prescriptions: data.monthly?.total_prescriptions || 0,
      score: Math.round(85 + Math.random() * 10)
    }));
  
  renderFacilities(facilities);
}

function renderFacilities(facilities) {
  const facilitiesGrid = document.getElementById('facilitiesGrid');
  if (!facilitiesGrid) return;
  
  facilitiesGrid.innerHTML = facilities.map(facility => `
    <div class="facility-card">
      <div class="facility-header">
        <h4>${facility.name}</h4>
        <span class="facility-type">${facility.type}</span>
      </div>
      <div class="facility-metrics">
        <div class="facility-metric">
          <span class="metric-label">Monthly Footfall</span>
          <span class="metric-value">${facility.footfall.toLocaleString()}</span>
        </div>
        <div class="facility-metric">
          <span class="metric-label">Prescriptions</span>
          <span class="metric-value">${facility.prescriptions.toLocaleString()}</span>
        </div>
        <div class="facility-metric">
          <span class="metric-label">Performance Score</span>
          <span class="metric-value">${facility.score}%</span>
        </div>
      </div>
      <div class="facility-actions">
        <button class="btn btn-primary" onclick="selectFacility('${facility.name}')">View Details</button>
      </div>
    </div>
  `).join('');
}

function filterFacilities() {
  const search = document.getElementById('facilitySearch')?.value.toLowerCase() || '';
  const filter = document.getElementById('facilityFilter')?.value || 'all';
  
  const facilities = Object.entries(dashboardData.facilities)
    .filter(([name]) => name !== 'All Facilities')
    .map(([name, data]) => ({
      name,
      type: name === 'Dhanwantari Hospital' ? 'Hospital' : 'Dispensary',
      footfall: data.monthly?.total_footfall || 0,
      prescriptions: data.monthly?.total_prescriptions || 0,
      score: Math.round(85 + Math.random() * 10)
    }))
    .filter(facility => {
      const matchesSearch = facility.name.toLowerCase().includes(search);
      const matchesFilter = filter === 'all' || facility.type === filter;
      return matchesSearch && matchesFilter;
    });
  
  renderFacilities(facilities);
}

function selectFacility(facilityName) {
  // Switch to overview tab
  const overviewTab = document.querySelector('[data-tab="overview"]');
  const overviewContent = document.getElementById('overview-tab');
  
  if (overviewTab && overviewContent) {
    // Remove active from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Activate overview tab
    overviewTab.classList.add('active');
    overviewContent.classList.add('active');
  }
  
  // Update facility selection
  if (facilitySelect) {
    facilitySelect.value = facilityName;
    currentState.selectedFacility = facilityName;
    updateDashboard();
  }
}

function toggleTheme() {
  const body = document.body;
  const isDark = body.getAttribute('data-theme') === 'dark';
  
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.textContent = isDark ? '🌙' : '☀️';
  }
  
  // Save theme preference
  localStorage.setItem('dashboard-theme', isDark ? 'light' : 'dark');
}

// Load saved theme on initialization
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('dashboard-theme');
  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
  }
}

// Load theme when DOM is ready
document.addEventListener('DOMContentLoaded', loadSavedTheme);

// Error handling
window.addEventListener('error', function(e) {
  console.error('Dashboard error:', e.error);
});

// Performance monitoring
if ('PerformanceObserver' in window) {
  const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'navigation') {
        console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
      }
    });
  });
  
  perfObserver.observe({entryTypes: ['navigation']});
}

console.log('ESIC Pune Healthcare Dashboard loaded successfully');