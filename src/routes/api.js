import { Router } from 'express';
// import usersController from '../controllers/UsersController.js';

const router = Router();

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'is alive', uptime: process.uptime() });
});

// router.post('/users', usersController.store);

export default router;