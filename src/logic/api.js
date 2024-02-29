import axios from 'axios';

const api = axios.create({
    baseURL: 'https://easy-class.onrender.com/api',
    // baseURL: 'http://localhost:4000/api', 
});

// Define functions for making different types of requests
const signup = (formData) => api.post('/student/register', formData);

// Define login function
const login = (formData) => api.post('/student/login', formData);

// Export the functions
export { signup, login };
