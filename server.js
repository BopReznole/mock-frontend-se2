import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001';

// serve index.html with BACKEND_URL injected
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  const inject = `<script>window.BACKEND_URL = "${backendUrl}";</script>`;
  html = html.replace('</head>', inject + '\n</head>');
  res.type('html').send(html);
});

// serve the rest static
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Frontend listening on ${port}`);
  console.log(`Using backend URL: ${backendUrl}`);
});
