const express = require("express");
const listEndpoints = require("express-list-endpoints");

const router = express.Router();

router.get('/', async (req, res) => {

  const endpoints = listEndpoints(req.app);   // req.app gives access to main app

  // Optional: Beautify the output
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>API Endpoints</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
        th { background-color: #f4f4f4; }
        .method { font-weight: bold; padding: 4px 10px; border-radius: 4px; }
      </style>
    </head>
    <body>
      <h1>Available API Endpoints</h1>
      <table>
        <tr>
          <th>Method</th>
          <th>Path</th>
          <th>Middleware</th>
        </tr>
        ${endpoints.map(endpoint => `
          <tr>
            <td><span class="method" style="background:${getColor(endpoint.methods[0])}">${endpoint.methods.join(', ')}</span></td>
            <td><code>${endpoint.path}</code></td>
            <td>${endpoint.middlewares.length ? 'Yes' : '—'}</td>
          </tr>
        `).join('')}
      </table>
    </body>
    </html>
  `;

  res.send(html);
});

function getColor(method) {
  const colors = { GET: '#4ade80', POST: '#60a5fa', PUT: '#fbbf24', DELETE: '#f87171' };
  return colors[method] || '#9ca3af';
}

// export default router;
module.exports = router;