// controllers/userController.js

import User from '../models/User.js';

// Controller to handle user registration
export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ message: "Failed to register user", error: error.message });
    }
};

// Other controller functions can be added here for login, update, delete, etc.
