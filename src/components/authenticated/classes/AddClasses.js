import React, { useState, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { addRecord } from '../../../logic/api';
import students from './studentsData'; // Import the students object
import { NotificationManager } from 'react-notifications';
import { Puff } from 'react-loader-spinner';

function AddClasses({ closeModal }) {
    const defaultDateTimeDue = new Date();
    defaultDateTimeDue.setDate(defaultDateTimeDue.getDate() + 1);

    const history = useHistory();


    const [formData, setFormData] = useState({
        name: "", // Set the default name to the first student name
        studentEmail: "", // Set the default email to the first email of the first student
        courseName: '',
        assignmentType: 'Lab Assignment',
        assignmentName: '', // New field for Quiz Name
        score: 0,
        dateTimeDue: defaultDateTimeDue.toISOString().substring(0, 16),
        status: 'Pending'
    });

    const [loading, setLoading] = useState(false); // Loading state

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
        setLoading(true); // Set loading state to true

        try {
            const response = await addRecord(formData);
            console.log('New record created:', response.data);
            NotificationManager.success('Record Added Successfully', 'Success');
            closeModal(); // Close the modal after successful submission
            window.location.reload(); // Refresh the page


        } catch (error) {
            console.error('Error creating record:', error);
            NotificationManager.error('Failed to Add Record', 'Error');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="absolute border bg-[#ffffffa1] z-10 w-full top-0 h-screen flex justify-center items-center">

            <div className="w-fit border bg-white rounded-md relative p-3">
                <div className="flex justify-between w-full items-center align-middle min-w-[200px]">
                    <h2 className='ml-3 font-semibold'>Add Record</h2>
                    <span className="close cursor-pointer text-red-700 text-2xl" onClick={closeModal}>&times;</span> {/* Close button */}
                </div>
                {loading && (
                    <div className="flex justify-center">
                        <Puff
                            visible={true}
                            height={80}
                            width={80}
                            color="#4fa94d"
                            ariaLabel="puff-loading"
                        />
                    </div>
                )}
                {!loading &&

                    <form onSubmit={handleSubmit} className='flex border-[0.5] rounded-md flex-col gap-5 w-ful border-gray-400 shadow-lg bg-white p-3'>


                        <div className="flex flex-1 justify-evenly gap-3">
                            <TextField
                                id="name"
                                name="name"
                                required
                                select // Change input to select
                                label="Name"
                                variant="outlined"
                                className='flex-1'
                                value={formData.name}
                                sx={{ width: 150 }} // Add width of 150px
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
                                required
                                select // Change input to select
                                label="Student Email"
                                variant="outlined"
                                className='flex-1'
                                value={formData.studentEmail}
                                onChange={handleChange}
                                sx={{ width: 200 }} // Add width of 150px
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
                                required
                                variant="outlined"
                                value={formData.courseName}
                                className='flex-1'
                                onChange={handleChange}
                            />
                        </div>  <div className="flex gap-4">
                            <TextField
                                id="assignmentType"
                                name="assignmentType"
                                select
                                className='flex-1'
                                required
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
                                className='flex-1'
                                label="Assignment Name"
                                required
                                variant="outlined"
                                value={formData.assignmentName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex gap-4">

                            <TextField
                                id="dateTimeDue"
                                name="dateTimeDue"
                                label="Date Time Due"
                                required
                                variant="outlined"
                                type="datetime-local"
                                className='flex-1'
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
                                required
                                defaultValue="Pending"
                                className='flex-1'
                                value={formData.status}
                                onChange={handleChange}
                            >
                                {['Pending', 'Completed'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <button type="submit" className=' bg-teal-600 hover:bg-teal-700 text-white'>Submit</button>






                    </form>
                }
            </div>
        </div>
    );
}

export default AddClasses;
