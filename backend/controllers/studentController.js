import Student from '../models/Student.js';

// Signup controller
export const signup = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password } = req.body;
        const existingUser = await Student.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }
        const newUser = new Student({ firstName, lastName, username, email, password });
        await newUser.save();
        // Return the newly created user object in response
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Failed to register user", error: error.message });
    }
};

// Login controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Student.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        // Return the logged-in user object in response
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: "Failed to login", error: error.message });
    }
};



// Select course controller
export const selectCourse = async (req, res) => {
    try {
        const { courseId } = req.body;
        const user = req.user; // Assuming user is authenticated and available in req
        user.coursesEnrolled.push(courseId);
        await user.save();
        res.status(200).json({ message: "Course selected successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to select course", error: error.message });
    }
};


// Make payment controller
export const makePayment = async (req, res) => {
    // Logic for making payment
};

// Delete course controller
export const deleteCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const user = req.user; // Assuming user is authenticated and available in req
        const index = user.coursesEnrolled.indexOf(courseId);
        if (index !== -1) {
            user.coursesEnrolled.splice(index, 1);
            await user.save();
            res.status(200).json({ message: "Course deleted successfully" });
        } else {
            res.status(404).json({ message: "Course not found in enrolled courses" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to delete course", error: error.message });
    }
};


// Update course controller
export const updateCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const user = req.user; // Assuming user is authenticated and available in req
        const index = user.coursesEnrolled.indexOf(courseId);
        if (index !== -1) {
            // You can implement update logic here, such as updating course details
            res.status(200).json({ message: "Course updated successfully" });
        } else {
            res.status(404).json({ message: "Course not found in enrolled courses" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to update course", error: error.message });
    }
};


// Delete account controller
export const deleteAccount = async (req, res) => {
    try {
        const user = req.user; // Assuming user is authenticated and available in req
        await Student.findByIdAndDelete(user._id);
        res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete account", error: error.message });
    }
};
