# Netlify Deployment Guide

## Overview
This project has been converted from a Node.js Express server to a **Create React App** to enable static deployment on Netlify.

## Key Changes Made

### 1. **Framework**: Migrated to React
- Converted plain HTML/JS to React components
- Added `react`, `react-dom`, and `react-scripts` dependencies
- Created `src/App.js` with the same UI functionality

### 2. **Environment Variables**: Changed prefix
- **Old**: `BACKEND_URL` (for Node.js runtime)
- **New**: `REACT_APP_BACKEND_URL` (for React build-time injection)
- Updated `.env` and `.env.sample` files

### 3. **Build Process**: Static compilation
- **Old**: `node server.js` (runtime injection)
- **New**: `npm run build` (build-time compilation)
- Generates static files in `build/` folder

## Netlify Configuration

### Settings:
```
Build command:      npm run build
Publish directory:  build
```

### Environment Variables:
Add in Netlify Dashboard → Site Settings → Environment Variables:

```
Key:   REACT_APP_BACKEND_URL
Value: https://mock-backend-se2.onrender.com
```

**Important**: The environment variable must have the `REACT_APP_` prefix to be accessible in React.

## How It Works

1. **Build Time**: Netlify runs `npm run build`
   - Reads `REACT_APP_BACKEND_URL` from environment variables
   - Compiles React app and injects the value into the JavaScript bundle
   - Creates static HTML/CSS/JS files in `build/` folder

2. **Deploy**: Netlify serves the static files from `build/`
   - No Node.js server running
   - Backend URL is baked into the JavaScript
   - Fast CDN delivery

## Local Development

```bash
# Install dependencies
npm install

# Start development server (uses .env file)
npm start

# Build for production
npm run build

# Run Cypress tests
npm test
```

## File Structure

```
├── public/
│   ├── index.html          # React app entry point
│   └── favicon.ico
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Styles
│   ├── index.js            # React entry
│   └── ...
├── cypress/
│   └── e2e/
│       └── frontend.cy.js  # E2E tests
├── .env                    # Local environment variables
├── .env.sample             # Environment variable template
├── package.json            # React dependencies and scripts
└── README.md               # Project documentation
```

## Old Files (Archived)

- `server.js.old` - Original Express server (kept for reference)

## Why This Approach?

This is the **standard pattern** for modern frontend deployment:
- ✅ Static files = faster, cheaper, more scalable
- ✅ CDN distribution for better performance
- ✅ No server maintenance required
- ✅ Industry-standard React workflow
- ✅ Ideal for teaching CI/CD with Netlify
