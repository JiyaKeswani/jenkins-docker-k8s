const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>🏥 Healthcare System</h1>
    <p>Secure Patient Dashboard</p>
  `);
});

app.get('/patient', (req, res) => {
  res.json({
    name: "John Doe",
    diagnosis: "Confidential Data",
    status: "Protected"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
