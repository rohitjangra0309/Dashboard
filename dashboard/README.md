# Dashboard Project

A comprehensive React-based dashboard application for tracking and analyzing SKU performance, content scores, and category metrics with interactive charts and data visualization.

## 🚀 Features

### 📊 Interactive Charts
- **Brand Content Score** tracking with trend indicators
- **Assessment** metrics visualization  
- Real-time data updates with responsive area charts
- Positive/negative trend indicators with color coding
- Info tooltips for better understanding

### 🎯 BGR Component (Brand Growth Report)
- **Category Management**: Navigate between different product categories
- **Search Functionality**: Find categories quickly with integrated search
- **Score Cards**: Display Content Score and Assortment Score
- **Trend Analysis**: Visual indicators showing performance improvements/declines
- **Interactive Selection**: Click categories to view detailed data

### 📋 SKU Table
- **Comprehensive SKU Management**: View all products with detailed metrics
- **Multi-tab Interface**: Switch between "Official Store" and "Summaries" views
- **Advanced Search**: Filter SKUs by name
- **Performance Metrics**: Track content scores, title coverage, images, bullet points, descriptions
- **A+ Content Tracking**: Monitor enhanced content adoption
- **Export Functionality**: Download data for external analysis
- **Chart Modals**: Individual SKU performance trend visualization

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly across all device sizes
- **Interactive Tooltips**: Contextual help and detailed information
- **Color-coded Status**: Green for positive trends, red for negative trends
- **Card-based Layout**: Clean, organized information presentation
- **Hover Effects**: Enhanced user interaction feedback

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern UI library with latest features
- **Vite 7.0.0** - Fast build tool and development server
- **Recharts 3.0.2** - Powerful charting library for data visualization

### Styling & UI
- **CSS Modules** - Scoped styling for components
- **Flexbox & Grid** - Modern layout techniques
- **Responsive Design** - Mobile-first approach

### Development Tools
- **ESLint 9.29.0** - Code linting and quality assurance
- **Vite Dev Server** - Hot module replacement for rapid development

### Deployment
- **Netlify** - Production hosting and deployment
- **SPA Routing** - Single Page Application with proper redirects

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed on your system
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks
- `npm start` - Alias for `npm run dev`

## 🏗️ Project Structure

```
dashboard/
├── public/
│   ├── _redirects          # Netlify SPA routing configuration
│   └── vite.svg           # Vite favicon
├── src/
│   ├── Components/
│   │   ├── BGRComponent/   # Brand Growth Report
│   │   │   ├── BGRComponent.jsx
│   │   │   ├── BGRComponent.css
│   │   │   └── BGRComponentContainer.jsx
│   │   ├── Charts/         # Interactive charts
│   │   │   ├── Charts.jsx
│   │   │   └── ChartsContainer.jsx
│   │   ├── Dashboard/      # Main dashboard layout
│   │   │   ├── Dashboard.jsx
│   │   │   └── Dashboard.css
│   │   └── SKUTable/       # SKU management table
│   │       ├── SKUTable.jsx
│   │       ├── SKUTable.css
│   │       ├── SKUTableContainer.jsx
│   │       ├── ChartModal.jsx
│   │       ├── ChartModal.css
│   │       ├── Tooltip.jsx
│   │       └── Tooltip.css
│   ├── context/
│   │   └── DashboardContext.jsx # Global state management
│   ├── data/
│   │   └── dashboardData.json  # Mock data source
│   ├── assets/
│   │   └── infoIcon.svg        # UI icons
│   ├── App.jsx             # Root component
│   ├── App.css            # Global styles
│   ├── index.css          # CSS reset and base styles
│   └── main.jsx           # Application entry point
├── netlify.toml           # Netlify deployment configuration
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🎨 Components Overview

### Dashboard (Main Container)
- **Location**: `src/Components/Dashboard/`
- **Purpose**: Root layout component that orchestrates all other components
- **Features**: Responsive grid layout, context provider integration

### Charts Component
- **Location**: `src/Components/Charts/`
- **Purpose**: Data visualization with interactive area charts
- **Features**: 
  - Brand Content Score trending
  - Assessment metrics tracking
  - Trend indicators (▲ green for positive, ▼ red for negative)
  - Category-specific data display
  - Info tooltips with detailed explanations

### BGR Component (Brand Growth Report)
- **Location**: `src/Components/BGRComponent/`
- **Purpose**: Category management and overview
- **Features**:
  - Hamburger menu navigation
  - Content Score and Assortment Score cards
  - Interactive category selection
  - Search functionality
  - Trend indicators with color coding
  - Responsive card layout

### SKU Table
- **Location**: `src/Components/SKUTable/`
- **Purpose**: Detailed SKU performance management
- **Features**:
  - Multi-tab interface (Official Store / Summaries)
  - Advanced search and filtering
  - Performance metrics tracking
  - Export functionality
  - Individual SKU chart modals
  - Tooltip system for metric explanations
  - Responsive table design

### Modal Components
- **ChartModal**: Individual SKU performance visualization
- **Tooltip**: Contextual help and information display

## 📊 Data Structure

The application uses a centralized data structure defined in `src/data/dashboardData.json`:

```json
{
  "categories": [
    {
      "id": "category01",
      "name": "Category 01",
      "status": "success",
      "chartData": {
        "brandContent": [...],
        "assessment": [...]
      },
      "skuData": [...]
    }
  ],
  "globalScores": {
    "contentScore": "78",
    "assortmentScore": "85"
  }
}
```

### Key Data Points
- **Categories**: Product categories with individual performance data
- **Chart Data**: Time-series data for trend analysis
- **SKU Data**: Individual product performance metrics
- **Global Scores**: Overall performance indicators

## 🎯 Key Features Explained

### Trend Indicators
- **Green Upward Triangles (▲)**: Positive performance trends
- **Red Downward Triangles (▼)**: Negative performance trends
- **Dynamic Calculation**: Based on period-over-period comparison
- **Percentage Display**: Shows exact improvement/decline percentages

### Interactive Elements
- **Category Selection**: Click any category card to view specific data
- **Search Functionality**: Real-time filtering across components
- **Chart Interactions**: Hover for detailed data points
- **Modal Windows**: Deep-dive into individual SKU performance

### Responsive Design
- **Mobile-first**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for medium screens
- **Desktop Enhancement**: Full-featured experience on large screens

## 🚀 Deployment

### Netlify Deployment
The project is configured for seamless Netlify deployment:

1. **Build Configuration**: Automatic builds from `dist` folder
2. **SPA Routing**: Proper redirects for single-page application
3. **Environment**: Node.js 18 runtime environment

### Manual Deployment
```bash
# Build for production
npm run build

# Deploy dist folder to your hosting service
```


### State Management
- **React Context**: Global state management for dashboard data
- **Local State**: Component-specific state for UI interactions
- **Prop Drilling**: Minimal prop passing with context usage

