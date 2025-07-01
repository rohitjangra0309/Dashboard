# Dashboard Project

A React-based dashboard application for tracking SKU performance, content scores, and category metrics with interactive charts and data visualization.

## Features

- **Interactive Charts** - Brand Content Score and Assessment tracking with trend indicators
- **Category Management** - Browse different product categories with search functionality  
- **SKU Table** - Comprehensive product management with detailed metrics
- **Trend Analysis** - Visual indicators (green ▲ for positive, red ▼ for negative trends)
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## Tech Stack

- **React 19.1.0** - Frontend framework
- **Vite 7.0.0** - Build tool and dev server
- **Recharts 3.0.2** - Data visualization
- **CSS3** - Styling with Flexbox/Grid

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Usage

1. **Navigate Categories** - Click category cards to view specific data
2. **Search** - Use search bars to filter SKUs and categories
3. **View Charts** - Click chart icons (📊) on individual SKUs for detailed trends
4. **Export Data** - Use export button (⬇️) to download data

## Project Structure

```
src/
├── Components/
│   ├── Dashboard/        # Main layout
│   ├── Charts/          # Interactive charts
│   ├── BGRComponent/    # Category management  
│   └── SKUTable/        # Product table
├── context/             # Global state
├── data/               # Mock data
└── assets/             # Icons and images
```

## Key Components

- **Dashboard** - Main container with responsive layout
- **Charts** - Area charts with hover tooltips and trend indicators
- **BGR Component** - Category cards with scores and search
- **SKU Table** - Sortable table with performance metrics and modals

## Deployment

Configured for Netlify deployment with SPA routing support.

```bash
npm run build  # Creates dist/ folder ready for deployment
```

---

