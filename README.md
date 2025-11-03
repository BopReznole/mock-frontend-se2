# render-frontend

React frontend that fetches data from a backend API.

Environment variable `REACT_APP_BACKEND_URL` is used to configure the backend endpoint. In Create React App, all environment variables must be prefixed with `REACT_APP_` to be accessible in the browser.

## Local dev
```bash
npm install
npm start
# open http://localhost:3000
```

The app will use `REACT_APP_BACKEND_URL` from your `.env` file (defaults to `http://localhost:3001`).

## Build for production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder, ready to deploy to Netlify or other static hosting platforms.

## Test
```bash
npm test
```

## Deploy to Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `build`
3. **Environment variables**: Set `REACT_APP_BACKEND_URL` to your production backend URL (e.g., `https://mock-backend-se2.onrender.com`)

The environment variable will be injected at build time and baked into the static files.

