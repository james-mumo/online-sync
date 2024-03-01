// models/Record.js
import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
    name: String,
    studentEmail: String,
    courseName: String,
    assignmentType: String,
    dateTimeDue: Date,
    status: String
});

const Record = mongoose.model('Record', recordSchema);

export default Record;
