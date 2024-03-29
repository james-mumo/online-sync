import React, { useEffect, useState } from 'react';
import { getRecords } from '../../../logic/api';
import MyHeader from './MyHeader';
import { DonutChartPeriod, DonutChartStatus, GroupedColumnChart, MixedChart, PieChartType, RadialChartAllTypes, RadialChartCompleted, RadialChartPending } from './Charts';
import { Watch } from 'react-loader-spinner';
import ModalWithSound from './ModalWithSound';

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
    const [showModal, setShowModal] = useState(false);

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

    // Function to handle modal open
    const handleModalOpen = () => {
        setShowModal(true);
    };

    // Function to handle modal close
    const handleModalClose = () => {
        setShowModal(false);
    };

    const Prof = () => {
        return (<div className="bg-teal-200 p-4 rounded-lg shadow-lg col-span-2">
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

        </div>)
    }

    return (
        <div className="flex flex-col w-full">
            <MyHeader />
            <div className="px-4 py-4 border">
                <div className="flex flex-col gap-3">
{/* 
                    <div className="flex gap-5">
                        <div className="flex flex-col">
                            <RadialChartPending records={records} />
                            <span className='border -mt-7 text-cyan-600 text-center font-semibold' onClick={handleModalOpen}>Pending</span>
                        </div>

                        <div className="flex flex-col">
                            <RadialChartCompleted records={records} />
                            <span className='border -mt-7 text-cyan-600 text-center font-semibold' onClick={handleModalOpen}>Completed</span>
                        </div>
                        <div className="flex flex-row">
                            <Watch
                                visible={true}
                                height="80"
                                width="80"
                                radius="48"
                                color="#4fa94d"
                                ariaLabel="watch-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                            <GridCell title="Overdue Assignments" content={overdueAssignments.length} bgClass="teal-300" />
                        </div>

                    </div> */}


                    <div className="flex gap-5">
                        <PieChartType records={records} />
                        <MixedChart records={records} />
                        <RadialChartAllTypes records={records} />
                    </div>
                    <div className="flex gap-5">
                        <GroupedColumnChart records={records} />
                        <DonutChartPeriod records={records} />
                        <DonutChartStatus records={records} />
                    </div>
                </div>
            </div>
            {showModal && <ModalWithSound isOpen={showModal} onClose={handleModalClose} />}
        </div>
    );
}

export default Dashboard;
