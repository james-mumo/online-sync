import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { addRecord } from '../../../logic/api';

function AddClasses() {

    const defaultDateTimeDue = new Date();
    defaultDateTimeDue.setDate(defaultDateTimeDue.getDate() + 1);

    const [formData, setFormData] = useState({
        name: '',
        studentEmail: '',
        courseName: '',
        assignmentType: 'Lab Assignment',
        dateTimeDue: defaultDateTimeDue.toISOString().substring(0, 16),
        status: 'Pending'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addRecord(formData);
            console.log('New record created:', response.data);
        } catch (error) {
            console.error('Error creating record:', error.message);
        }
    };

    return (
        <div>
            <h2>Add Record</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    id="studentEmail"
                    name="studentEmail"
                    label="Student Email"
                    variant="outlined"
                    value={formData.studentEmail}
                    onChange={handleChange}
                />
                <TextField
                    id="courseName"
                    name="courseName"
                    label="Course Name"
                    variant="outlined"
                    value={formData.courseName}
                    onChange={handleChange}
                />
                <TextField
                    id="assignmentType"
                    name="assignmentType"
                    select
                    label="Assignment Type"
                    variant="outlined"
                    defaultValue="Lab Assignment"
                    value={formData.assignmentType}
                    onChange={handleChange}
                >
                    {['Lab Assignment', 'Network Assignment', 'Quiz', 'Zoom Meeting'].map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="dateTimeDue"
                    name="dateTimeDue"
                    label="Date Time Due"
                    variant="outlined"
                    type="datetime-local" // Use type="datetime-local" for date-time picker
                    value={formData.dateTimeDue}
                    onChange={handleChange}
                />
                <TextField
                    id="status"
                    name="status"
                    select
                    label="Status"
                    variant="outlined"
                    defaultValue="Pending"
                    value={formData.status}
                    onChange={handleChange}
                >
                    {['Pending', 'Completed'].map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddClasses;
