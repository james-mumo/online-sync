import Record from '../models/Record.js';

// Controller function to get all records
export const getAllRecords = async (req, res) => {
    try {
        const records = await Record.find();
        res.json(records)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Controller function to create a new record
export const createRecord = async (req, res) => {

    const record = new Record({
        name: req.body.name,
        studentEmail: req.body.studentEmail,
        courseName: req.body.courseName,
        assignmentType: req.body.assignmentType,
        dateTimeDue: req.body.dateTimeDue,
        // dateTimeDue: dateTimeDueHours, // Set the dateTimeDue to hours
        status: req.body.status
    });

    try {
        const newRecord = await record.save();
        res.status(201).send(newRecord);
    } catch (err) {
        res.status(400).json(err);
    }
};


// Controller function to delete all records
export const deleteAllRecords = async (req, res) => {
    try {
        await Record.deleteMany(); // This will delete all records
        res.json({ message: "All records deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to delete a record by ID
export const deleteRecordById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedRecord = await Record.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ message: "Record not found" });
        }
        res.json({ message: "Record deleted successfully", deletedRecord });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to update a record by ID
export const updateRecordById = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    try {
        const updatedRecord = await Record.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ message: "Record not found" });
        }
        res.json({ message: "Record updated successfully", updatedRecord });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

