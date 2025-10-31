# render-frontend

Minimal frontend served by Express. It fetches the backend.

Env var BACKEND_URL is injected into the HTML at runtime.

## Local dev
```bash
npm install
BACKEND_URL=http://localhost:3001 npm start
# open http://localhost:3000
```

## Test
```bash
npm test
```
