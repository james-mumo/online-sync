import React, { useState, useEffect } from 'react';
import { getRecords } from '../../../logic/api';
import FullFeaturedCrudGrid from './Table';
import MyHeader from './MyHeader';

function Classes({ openAddModal }) {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for modal visibility

    // Function to calculate due time and update records
    const calculateDueTime = (records) => {
        const currentTime = new Date();
        return records.map((record) => {
            const futureTime = new Date(record.dateTimeDue);
            const timeDifferenceMs = futureTime.getTime() - currentTime.getTime();
            const hoursDue = Math.floor(timeDifferenceMs / (1000 * 60 * 60)); // Calculate hours due
            const formattedFutureTime = futureTime.toLocaleString(); // Format future time
            return {
                ...record,
                hoursDue,
                dateTimeDue: formattedFutureTime,
            };
        });
    };

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await getRecords();
                // Calculate hoursDue and update dateTimeDue for each record
                const updatedRecords = calculateDueTime(response.data);
                // Add unique id to each record
                const recordsWithId = updatedRecords.map((record) => ({
                    ...record,
                    id: record._id, // Use MongoDB _id as id
                }));
                setRecords(recordsWithId);
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
        <div className="flex flex-col w-full">
            <MyHeader openAddModal={openAddModal} />
            <div className="px-4 py-4 border">

                {loading ? (
                    <p>Loading...</p>
                ) : records.length === 0 ? (
                    <p>No records found.</p>
                ) : (
                    <div className='border border-emerald-300'>
                        <FullFeaturedCrudGrid records={records} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Classes;
