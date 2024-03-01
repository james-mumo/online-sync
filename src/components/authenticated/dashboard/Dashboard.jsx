import React, { useEffect, useState } from 'react';
import { getRecords } from '../../../logic/api';

// Shared component for grid cells
function GridCell({ title, content, bgClass }) {
    return (
        <div className={`bg-${bgClass} p-4 rounded-lg shadow-lg`}>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-800">{content}</p>
        </div>
    );
}

function Dashboard() {
    const [userData, setUserData] = useState(null);

    // State to store fetched records
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Retrieve user data from local storage
        const userDataFromLocalStorage = localStorage.getItem('user');
        // console.log(userDataFromLocalStorage)
        // Parse the user data if it exists
        if (userDataFromLocalStorage) {
            setUserData(JSON.parse(userDataFromLocalStorage));
        }

        // Fetch records when the component mounts
        const fetchRecords = async () => {
            try {
                const response = await getRecords();
                // Set the fetched records
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

    // Filter records based on status
    const getRecordsByStatus = (status) => records.filter(record => record.status === status);

    // Filter records based on assignment type, name, and course name
    const getRecordsByTypeAndName = (type, name, courseName) => records.filter(record =>
        record.assignmentType === type || record.name === name || record.courseName === courseName);

    // Get total number of assignments
    const totalAssignments = records.length;

    // Function to filter overdue assignments
    const getOverdueAssignments = () => {
        const currentDate = new Date();
        return records.filter(record => {
            const dueDate = new Date(record.dateTimeDue);
            return dueDate < currentDate;
        });
    };

    // Get overdue assignments
    const overdueAssignments = getOverdueAssignments();

    return (
        <div className="container mx-auto px-4 py-4 ">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* Grid cell 1 */}
                <div className="bg-teal-200 p-4 rounded-lg shadow-lg col-span-2">
                    <span className="text-lg font-semibold mb-1">User Information</span>
                    {userData && (
                        <div className="bg-teal-500 p-4 rounded-lg shadow-lg col-span-2">
                            <p className="text-gray-800">
                                <span className="font-bold">Username:</span> <span className="text-gray-200 font-semibold text-xl">{userData.username}</span> <br />
                                <span className="font-bold">First Name:</span> <span className="text-gray-200 font-semibold text-xl">{userData.firstName}</span> <br />
                                <span className="font-bold">Last Name:</span> <span className="text-gray-200 font-semibold text-xl">{userData.lastName}</span> <br />
                                <span className="font-bold">Password:</span> <span className="text-gray-200 font-semibold text-xl">{userData.password}</span> <br />
                            </p>
                        </div>
                    )}

                </div>

                {/* Total number of assignments */}
                <GridCell title="Total Assignments" content={totalAssignments} bgClass="teal-300" />

                {/* Assignments based on status */}
                <GridCell title="Assignments Pending" content={getRecordsByStatus('Pending').length} bgClass="teal-400" />
                <GridCell title="Assignments Completed" content={getRecordsByStatus('Completed').length} bgClass="teal-500" />

                {/* Assignments based on assignment type, name, and course name */}
                <GridCell title="Lab Assignments" content={getRecordsByTypeAndName('Lab Assignment', 'Lab', 'Lab').length} bgClass="teal-600" />
                <GridCell title="Network Assignments" content={getRecordsByTypeAndName('General Assignment', 'Name 2', 'Course 2').length} bgClass="teal-700" />
                <GridCell title="Zoom Meetings" content={getRecordsByTypeAndName('Zoom Meetings', 'Name 3', 'Course 3').length} bgClass="teal-800" />
                <GridCell title="Quiz" content={getRecordsByTypeAndName('Quiz', 'Name 3', 'Course 3').length} bgClass="teal-800" />

                {/* Overdue assignments */}
                <GridCell title="Overdue Assignments" content={overdueAssignments.length} bgClass="teal-300" />
            </div>
        </div>
    );
}

export default Dashboard;
