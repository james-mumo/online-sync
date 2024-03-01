import React, { useState, useEffect } from 'react';
import { getRecords } from '../../../logic/api';
import FullFeaturedCrudGrid from './Table';

function Classes() {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await getRecords();
                // Add unique id to each record
                const recordsWithId = response.data.map((record) => ({
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
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : records.length === 0 ? (
                <p>No records found.</p>
            ) : (
                <div>
                    <FullFeaturedCrudGrid records={records} />
                </div>
            )}
        </div>
    );
}

export default Classes;
