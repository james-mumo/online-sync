import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        // Retrieve user data from local storage
        const userDataFromLocalStorage = localStorage.getItem('user');
        console.log(userDataFromLocalStorage)
        // Parse the user data if it exists
        if (userDataFromLocalStorage) {
            setUserData(JSON.parse(userDataFromLocalStorage));
            console.log(userData)
        }
    }, []);
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

                {/* Grid cell 2 */}
                <GridCell title="Item 2" content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." bgClass="teal-300" />

                {/* Grid cell 3 */}
                <GridCell title="Item 3" content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." bgClass="teal-400" />

                {/* Grid cell 4 */}
                <GridCell title="Item 4" content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." bgClass="teal-500" />

                {/* Grid cell 5 */}
                <GridCell title="Item 5" content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." bgClass="teal-600" />

                {/* Grid cell 6 */}
                <GridCell title="Item 6" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." bgClass="teal-700" />

                {/* Grid cell 7 */}
                <GridCell title="Item 7" content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." bgClass="teal-800" />

                {/* Grid cell 8 */}
                <GridCell title="Item 8" content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." bgClass="teal-900" />

                {/* Grid cell 8 */}
                <GridCell title="Item 8" content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." bgClass="teal-900" />
            </div>
        </div>
    );
}

export default Dashboard;
