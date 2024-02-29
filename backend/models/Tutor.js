// models/Tutor.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const tutorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    qualification: {
        type: String,
        required: true
    },
    coursesOffered: [String],
    sessionsBooked: [{
        studentName: String,
        date: Date,
        duration: Number
    }],
    userType: { type: String, default: "tutor" },
    createdAt: {
        type: Date,
        default: Date.now
    },
    availability: {
        type: String,
        enum: ['available', 'unavailable'],
        default: 'available'
    }
});

const Tutor = model('Tutor', tutorSchema);

export default Tutor;
