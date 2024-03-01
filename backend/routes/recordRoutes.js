import express from 'express';
import { getAllRecords, createRecord, deleteAllRecords } from '../controllers/recordController.js';

const router = express.Router();

// Route to get all records
router.get('/', getAllRecords);

// Route to create a new record
router.post('/', createRecord);

// Route to delete all records
router.delete('/', deleteAllRecords);

// Other routes for updating and deleting records would be similar

export default router;
