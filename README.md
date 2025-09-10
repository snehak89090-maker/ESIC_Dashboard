# ESIC Pune Healthcare Dashboard

A comprehensive digital command center for monitoring and managing healthcare services across 21 dispensaries and 1 hospital under ESIC Pune.

## Features

### 🏥 **Strategic Command Center**
- **Dual Dropdown System**: Facility selection + Time period analysis (Daily/Weekly/Monthly/Quarterly)
- **Real-time Metrics**: Interactive dashboard with live data updates
- **Interactive Visualizations**: Charts and graphs with hover tooltips
- **Professional Healthcare Theme**: Government-compliant design with blue/green color scheme

### 📊 **Enhanced Functionality**
- **Facility-Specific Analysis**: Individual performance monitoring for all 22 facilities
- **Multi-Period Comparison**: Daily, weekly, monthly, and quarterly data views
- **Service Modules**: Registration, Clinical Records, Pharmacy, Referrals, Certificates, Claims
- **Performance Monitoring**: KPI tracking and target achievement analysis
- **Alert Management**: Critical notifications and resource shortage warnings

### 🎯 **Key Metrics Tracked**
- **Patient Footfall**: 29,399+ monthly patients across network
- **Prescriptions**: 17,749+ monthly prescriptions processed
- **Referrals**: 3,128+ monthly referrals managed
- **Certificates**: 2,300+ certificates issued monthly
- **New Registrations**: 5,420+ new patient registrations
- **Claims Processing**: Comprehensive reimbursement tracking

## Quick Start

### 1. **Download Files**
Download these three files to your local machine:
- `index.html`
- `style.css`
- `app.js`

### 2. **Local Setup**
```bash
# Create project directory
mkdir esic-pune-dashboard
cd esic-pune-dashboard

# Place the downloaded files in this directory
# Open index.html in any modern web browser
```

### 3. **GitHub Pages Hosting**

#### Option A: Direct Upload
1. Create a new repository on GitHub
2. Upload the three files to your repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" → main branch
5. Your dashboard will be live at: `https://yourusername.github.io/repository-name`

#### Option B: Git Commands
```bash
git init
git add .
git commit -m "Initial ESIC Pune Dashboard"
git branch -M main
git remote add origin https://github.com/yourusername/esic-pune-dashboard.git
git push -u origin main

# Enable GitHub Pages in repository settings
```

## File Structure

```
esic-pune-dashboard/
├── index.html          # Main HTML structure
├── style.css           # Complete CSS styling
├── app.js              # JavaScript functionality
└── README.md           # This documentation
```

## Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Features Overview

### **Navigation Tabs**
1. **Overview** - Strategic command center with dual dropdowns
2. **Analysis** - Comparative facility performance
3. **Facility Directory** - Complete facility database
4. **Performance Monitor** - Real-time KPI tracking  
5. **Alerts & Notifications** - Critical system alerts

### **Interactive Elements**
- **Facility Dropdown**: Select from 22 facilities or view network totals
- **Time Period Dropdown**: Switch between Daily/Weekly/Monthly/Quarterly views
- **Hover Tooltips**: Detailed information on all metrics
- **Click Actions**: Drill-down functionality throughout
- **Theme Toggle**: Dark/Light mode support
- **Export Functions**: Data export capabilities

### **Responsive Design**
- **Desktop Optimized**: Full feature set on desktop/laptop
- **Tablet Friendly**: Touch-optimized interface
- **Mobile Responsive**: Core functionality on mobile devices

## Data Sources

The dashboard uses real healthcare data from:
- **21 ESIC Dispensaries** across Pune region
- **1 Dhanwantari Hospital** with 10 specialized departments
- **5-Month Performance History** (April-August 2025)
- **Comprehensive Service Metrics** across all healthcare modules

## Network Performance (August 2025)

### **Top Performing Facilities**
1. **Chinchwad**: 4,177 monthly patients
2. **Sanaswadi**: 2,790 monthly patients  
3. **Chakan**: 2,439 monthly patients
4. **Talegaon**: 2,376 monthly patients
5. **Khed Shivapur**: 1,949 monthly patients

### **Hospital Departments**
- **General Medicine**: 3,686 patients (Leading department)
- **Orthopaedics**: 1,922 patients, 939 procedures
- **Ayurveda**: 628 patients served
- **ENT**: 378 patients with specialized care
- **Ophthalmology**: 433 patients treated

## Customization

### **Adding New Facilities**
1. Update the `dashboardData.facilities` object in `app.js`
2. Add facility to `facility_names` array
3. Include data for all time periods (daily, weekly, monthly, quarterly)

### **Modifying Time Periods**
1. Update `time_periods` array in `app.js`
2. Ensure all facilities have data for new periods
3. Update chart configurations as needed

### **Styling Changes**
1. Modify CSS variables in `:root` section of `style.css`
2. Healthcare color scheme: `--primary-blue`, `--secondary-green`, `--accent-cyan`
3. Responsive breakpoints available in media queries

## Performance Optimizations

- **Lazy Loading**: Charts initialize only when needed
- **Efficient Animations**: CSS transitions with hardware acceleration
- **Optimized Data**: Minimal data structure for fast loading
- **Caching**: LocalStorage for theme preferences
- **Error Handling**: Comprehensive error management

## Security Considerations

- **Client-Side Only**: No server dependencies
- **No External APIs**: Self-contained application
- **Static Assets**: Safe for GitHub Pages deployment
- **No Data Collection**: Privacy-focused design

## Support & Maintenance

### **Browser Console Debugging**
```javascript
// Check dashboard state
console.log(currentState);

// Check facility data
console.log(dashboardData.facilities);

// Monitor performance
console.log(performance.timing);
```

### **Common Issues**
- **Charts not loading**: Ensure Chart.js CDN is accessible
- **Data not updating**: Check browser console for JavaScript errors
- **Mobile display issues**: Verify viewport meta tag in HTML

## License

Copyright © DigiFacility Team – DPH_CoE

This dashboard is designed for ESIC Pune healthcare network monitoring and management.

## Version History

- **v1.0** - Initial release with basic functionality
- **v2.0** - Enhanced with dual dropdown system and real-time updates
- **v2.1** - Added mobile responsiveness and performance optimizations

---

**Ready to deploy!** All files are production-ready and optimized for GitHub Pages hosting.