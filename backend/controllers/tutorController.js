// controllers/tutorController.js
import Tutor from '../models/Tutor.js';

// Controller methods
export const createTutor = async (req, res) => {
    try {
        const tutor = new Tutor(req.body);
        await tutor.save();
        res.status(201).json(tutor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getTutors = async (req, res) => {
    try {
        const tutors = await Tutor.find();
        res.status(200).json(tutors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getTutorById = async (req, res) => {
    try {
        const tutor = await Tutor.findById(req.params.id);
        if (!tutor) {
            return res.status(404).json({ error: 'Tutor not found' });
        }
        res.status(200).json(tutor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateTutor = async (req, res) => {
    try {
        const tutor = await Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tutor) {
            return res.status(404).json({ error: 'Tutor not found' });
        }
        res.status(200).json(tutor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteTutor = async (req, res) => {
    try {
        const tutor = await Tutor.findByIdAndDelete(req.params.id);
        if (!tutor) {
            return res.status(404).json({ error: 'Tutor not found' });
        }
        res.status(200).json({ message: 'Tutor deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
