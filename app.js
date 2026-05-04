const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>DevOps Pipeline</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card {
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 40px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      }
      .badge {
        font-size: 1rem;
        margin: 5px;
      }
    </style>
  </head>

  <body>
    <div class="card">
      <h1>🚀 CI/CD Pipeline Successful</h1>
      <p class="lead">Jenkins • Docker • Kubernetes</p>

      <div class="mt-4">
        <span class="badge bg-success">Build ✔</span>
        <span class="badge bg-primary">Deploy ✔</span>
        <span class="badge bg-warning text-dark">Live ✔</span>
      </div>

      <hr>

      <h4>👩‍💻 Jiya Keswani</h4>
      <p>B.Tech CSE (Cloud Computing)</p>

      <p class="mt-3">This application is deployed using a fully automated DevOps pipeline.</p>
    </div>
  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
