import React, { useState, useEffect } from 'react';
import FullFeaturedCrudGrid from './Table';
import { getRecords } from '../../../logic/api';

function Classes() {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await getRecords();
                setRecords(response.data);
                console.log(response.data)
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
                <FullFeaturedCrudGrid records={records} />
            )}
        </div>
    );
}

export default Classes;
