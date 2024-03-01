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
    // Parse the dateTimeDue value into hours
    // const dateTimeDueHours = new Date(req.body.dateTimeDue).getTime(); // Get the timestamp in milliseconds
    // const currentTime = Date.now(); // Get the current timestamp in milliseconds
    // const timeDifferenceInHours = (dateTimeDueHours - currentTime) / (1000 * 60 * 60); // Convert milliseconds to hours

    // console.log(timeDifferenceInHours); // Log the time difference in hours

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
