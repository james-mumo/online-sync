// routes/userRoutes.js

import express from 'express';
import { login, signup } from '../controllers/studentController.js';

const router = express.Router();

// Route to register a new user
router.post('/register', signup);
router.post('/login', login)

export default router;
