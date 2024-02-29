// routes/tutorRoutes.js
import express from 'express';
import * as tutorController from '../controllers/tutorController.js';

const router = express.Router();

router.post('/', tutorController.createTutor);
router.get('/', tutorController.getTutors);
router.get('/:id', tutorController.getTutorById);
router.put('/:id', tutorController.updateTutor);
router.delete('/:id', tutorController.deleteTutor);

export default router;
