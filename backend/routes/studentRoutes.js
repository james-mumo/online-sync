import express from 'express';
import * as studentController from '../controllers/studentController.js';

const router = express.Router();

// Signup route
router.post('/register', studentController.signup);

// Login route
router.post('/login', studentController.login);

// Select course route
router.post('/select-course', studentController.selectCourse);

// Make payment route
router.post('/make-payment', studentController.makePayment);

// Delete course route
router.delete('/delete-course/:courseId', studentController.deleteCourse);

// Update course route
router.put('/update-course/:courseId', studentController.updateCourse);

// Delete account route
router.delete('/delete-account', studentController.deleteAccount);

export default router;
