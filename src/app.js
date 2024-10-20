import express from 'express';
import apiRoutes from './routes/api.js';
const app = express();
const port = 3000;

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
