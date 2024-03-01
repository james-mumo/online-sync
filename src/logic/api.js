import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://online-sync.onrender.com/api',
    baseURL: 'http://localhost:4000/api',
});

const signup = (formData) => api.post('/student/register', formData);
const login = (formData) => api.post('/student/login', formData);
const addRecord = (itemData) => api.post("/records", itemData);
const getRecords = () => api.get("/records");



export { signup, login, addRecord, getRecords };
