const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>CI/CD DevOps App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        color: white;
      }

      header {
        display: flex;
        justify-content: space-between;
        padding: 20px 40px;
        background: rgba(0,0,0,0.3);
      }

      header h1 {
        margin: 0;
      }

      nav a {
        margin-left: 20px;
        color: white;
        text-decoration: none;
        font-weight: bold;
      }

      .hero {
        text-align: center;
        padding: 100px 20px;
      }

      .hero h2 {
        font-size: 3rem;
      }

      .hero p {
        font-size: 1.2rem;
        opacity: 0.9;
      }

      .btn {
        margin-top: 20px;
        padding: 12px 25px;
        background: #00ffcc;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
      }

      .features {
        display: flex;
        justify-content: center;
        gap: 30px;
        padding: 50px;
        flex-wrap: wrap;
      }

      .card {
        background: rgba(255,255,255,0.1);
        padding: 25px;
        border-radius: 15px;
        width: 250px;
        text-align: center;
        backdrop-filter: blur(10px);
      }

      footer {
        text-align: center;
        padding: 20px;
        background: rgba(0,0,0,0.3);
        margin-top: 50px;
      }
    </style>
  </head>

  <body>

    <header>
      <h1>🚀 DevOps App</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pipeline</a>
      </nav>
    </header>

    <section class="hero">
      <h2>CI/CD Pipeline Deployment</h2>
      <p>Powered by Jenkins • Docker • Kubernetes</p>
      <button class="btn" onclick="alert('Pipeline Triggered 🚀')">
        Run Pipeline
      </button>
    </section>

    <section class="features">
      <div class="card">
        <h3>⚙️ Jenkins</h3>
        <p>Automates build and deployment pipeline</p>
      </div>

      <div class="card">
        <h3>🐳 Docker</h3>
        <p>Containerized application deployment</p>
      </div>

      <div class="card">
        <h3>☸️ Kubernetes</h3>
        <p>Scalable orchestration and management</p>
      </div>
    </section>

    <footer>
      <p>© 2026 DevOps Project | Built by Jiya 🚀</p>
    </footer>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
