import React, { useState, useEffect } from 'react';
import { getRecords } from '../../../logic/api';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FullFeaturedCrudGrid from './Table';

function Classes() {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await getRecords();
                setRecords(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching records:', error.message);
            }
        };

        fetchRecords();

        // Cleanup function
        return () => {
            // Any cleanup code can go here if needed
        };
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : records.length === 0 ? (
                <p>No records found.</p>
            ) : (
                <div>
                    <FullFeaturedCrudGrid />
                    {records.map((record, index) => (
                        <div key={index} className="record-container">
                            <TextField
                                id={`name-${index}`}
                                name={`name-${index}`}
                                label="Name"
                                variant="outlined"
                                value={record.name || ''}
                                disabled
                            />
                            <TextField
                                id={`studentEmail-${index}`}
                                name={`studentEmail-${index}`}
                                label="Student Email"
                                variant="outlined"
                                value={record.studentEmail || ''}
                                disabled
                            />
                            <TextField
                                id={`courseName-${index}`}
                                name={`courseName-${index}`}
                                label="Course Name"
                                variant="outlined"
                                value={record.courseName || ''}
                                disabled
                            />
                            <TextField
                                id={`assignmentType-${index}`}
                                name={`assignmentType-${index}`}
                                select
                                label="Assignment Type"
                                variant="outlined"
                                value={record.assignmentType || ''}
                                disabled
                            >
                                {['Lab Assignment', 'Network Assignment', 'Quiz', 'Zoom Meeting'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id={`dateTimeDue-${index}`}
                                name={`dateTimeDue-${index}`}
                                label="Date Time Due"
                                variant="outlined"
                                type="datetime-local"
                                value={record.dateTimeDue || ''}
                                disabled
                            />
                            <TextField
                                id={`status-${index}`}
                                name={`status-${index}`}
                                select
                                label="Status"
                                variant="outlined"
                                value={record.status || ''}
                                disabled
                            >
                                {['Pending', 'Completed'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Classes;
