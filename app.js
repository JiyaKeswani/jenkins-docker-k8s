const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Healthcare Dashboard</title>
    <style>
      body {
        font-family: 'Segoe UI', sans-serif;
        margin: 0;
        background: linear-gradient(to right, #e0f7fa, #e3f2fd);
      }
      .navbar {
        background: #1976d2;
        color: white;
        padding: 15px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
      }
      .container {
        padding: 30px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .card {
        background: white;
        width: 300px;
        padding: 20px;
        margin: 15px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: 0.3s;
      }
      .card:hover {
        transform: scale(1.05);
      }
      .title {
        font-size: 20px;
        margin-bottom: 10px;
        color: #1976d2;
      }
      .status {
        font-weight: bold;
        color: green;
      }
      .footer {
        text-align: center;
        padding: 15px;
        background: #1976d2;
        color: white;
        position: fixed;
        bottom: 0;
        width: 100%;
      }
    </style>
  </head>

  <body>

    <div class="navbar">
      🏥 Secure Healthcare System (DevSecOps)
    </div>

    <div class="container">

      <div class="card">
        <div class="title">Patient Info</div>
        <p>Name: John Doe</p>
        <p>Condition: Confidential</p>
        <p class="status">✔ Protected Data</p>
      </div>

      <div class="card">
        <div class="title">System Status</div>
        <p>Deployment: Blue Version</p>
        <p>Security: Enabled</p>
        <p class="status">✔ All Systems Secure</p>
      </div>

      <div class="card">
        <div class="title">DevSecOps Pipeline</div>
        <p>CI/CD: Jenkins</p>
        <p>Containers: Docker</p>
        <p>K8s: Active</p>
      </div>

    </div>

    <div class="footer">
      © 2026 Healthcare DevSecOps Project
    </div>

  </body>
  </html>
  `);
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
