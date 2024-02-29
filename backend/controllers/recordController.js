import Record from '../models/Record.js';

// Controller function to get all records
export const getAllRecords = async (req, res) => {
    try {
        const records = await Record.find();
        res.json(records);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to create a new record
export const createRecord = async (req, res) => {
    const record = new Record({
        name: req.body.name,
        studentEmail: req.body.studentEmail,
        assignmentType: req.body.assignmentType,
        dateTimeDue: req.body.dateTimeDue,
        status: req.body.status
    });

    try {
        const newRecord = await record.save();
        res.status(201).send(newRecord);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Other controller functions for updating and deleting records would be similar
