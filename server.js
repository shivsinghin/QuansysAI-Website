import { createServer } from 'https';
import { readFileSync } from 'fs';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const httpApp = express();

// SSL options
const options = {
  key: readFileSync('/etc/letsencrypt/live/dashboard.quansys.ai/privkey.pem'),
  cert: readFileSync('/etc/letsencrypt/live/dashboard.quansys.ai/fullchain.pem'),
};

// Redirect HTTP to HTTPS
httpApp.get('*', (req, res) => {
  res.redirect(`https://${req.headers.host}${req.url}`);
});

// Create HTTP server for redirection
http.createServer(httpApp).listen(80, () => {
  console.log('> HTTP redirect server running on port 80');
});

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Create HTTPS server
createServer(options, app).listen(443, () => {
  console.log(`> Server running on https://dashboard.quansys.ai`);
});