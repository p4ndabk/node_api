const express = require('express');
const app = express();
const port = 3000;

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'is alive', uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
