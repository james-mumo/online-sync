import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import tutorRoutes from './routes/tutorRoutes.js';
import studentRoutes from "./routes/studentRoutes.js"

const app = express();
const port = 4000;

const uri = `mongodb+srv://98kithome:98kithome@cluster0.ijx96ju.mongodb.net/easy-class`

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

// Middleware to allow CORS
app.use(cors());

app.use(express.json());

// Import and use the router
app.use('/api/student', studentRoutes);

// Defining additional routes
app.get("/", (req, res) => {
    const uri = "http://localhost"
    res.json({
        userLogin: `${uri}:${"/"}`,
        student: "http://localhost:3000/api/student"
    });
});

