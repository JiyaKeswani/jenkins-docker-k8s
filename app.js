const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CI/CD App</title>
      <style>
        body {
          margin: 0;
          font-family: Arial;
          background: linear-gradient(to right, #667eea, #764ba2);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .card {
          background: rgba(0,0,0,0.5);
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.2rem;
          opacity: 0.8;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 CI/CD Pipeline Success</h1>
        <p>Deployed using Jenkins + Kubernetes</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
