// models/Student.js

import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, default: "student" },
    balance: { type: Number, default: 0 },
    coursesEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }], // Assuming Course is another model
    createdAt: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
