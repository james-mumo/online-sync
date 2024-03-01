import React, { useState, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { addRecord } from '../../../logic/api';
import students from './studentsData'; // Import the students object

function AddClasses() {
    const defaultDateTimeDue = new Date();
    defaultDateTimeDue.setDate(defaultDateTimeDue.getDate() + 1);

    const [formData, setFormData] = useState({
        name: '',
        studentEmail: '',
        courseName: '',
        assignmentType: 'Lab Assignment',
        assignmentName: '', // New field for Quiz Name
        dateTimeDue: defaultDateTimeDue.toISOString().substring(0, 16),
        status: 'Pending'
    });

    // Reference to the datetime-local input element
    const dateTimeRef = useRef(null);

    useEffect(() => {
        // Set the minimum date to today whenever formData.dateTimeDue changes
        if (dateTimeRef.current) {
            const today = new Date().toISOString().split('T')[0];
            dateTimeRef.current.min = today;
        }
    }, [formData.dateTimeDue]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Convert dateTimeDue to ISO string format if it's being changed
        let newValue = value;
        if (name === 'dateTimeDue') {
            // Add 'T00:00' to the value to convert it into ISO format
            newValue = `${value}:00`;
        }

        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    // Function to handle changes in the name dropdown
    const handleNameChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            name: value,
            studentEmail: '' // Reset student email when name changes
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addRecord(formData);
            console.log('New record created:', response.data);
        } catch (error) {
            console.error('Error creating record:', error);
        }
    };

    return (
        <div>
            <h2>Add Record</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    select // Change input to select
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleNameChange} // Handle change event for name dropdown
                >
                    {Object.keys(students).map((student) => (
                        <MenuItem key={student} value={student}>
                            {student}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="studentEmail"
                    name="studentEmail"
                    select // Change input to select
                    label="Student Email"
                    variant="outlined"
                    value={formData.studentEmail}
                    onChange={handleChange}
                >
                    {students[formData.name] && students[formData.name].map((email) => (
                        <MenuItem key={email} value={email}>
                            {email}
                        </MenuItem>
                    ))}
                </TextField>
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
                    {['Lab Assignment', 'General Assignment', 'Quiz', 'Zoom Meeting'].map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="assignmentName"
                    name="assignmentName"
                    label="Assignment Name"
                    variant="outlined"
                    value={formData.assignmentName}
                    onChange={handleChange}
                />
                <TextField
                    id="dateTimeDue"
                    name="dateTimeDue"
                    label="Date Time Due"
                    variant="outlined"
                    type="datetime-local"
                    value={formData.dateTimeDue}
                    onChange={handleChange}
                    inputRef={dateTimeRef}
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
