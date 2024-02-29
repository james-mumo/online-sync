import React from 'react';

function Dashboard() {
    return (
        <div className="container mx-auto px-4 py-4 ">
            <h1 className="text-3xl font-bold text-teal-800 mb-4">Dashboard</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* Grid cell 1 */}
                <div className="bg-teal-200 p-4 rounded-lg shadow-lg col-span-2">
                    <h2 className="text-lg font-semibold mb-2">Item 1</h2>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* Grid cell 2 */}
                <div className="bg-teal-300 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Item 2</h2>
                    <p className="text-gray-800">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* Grid cell 3 */}
                <div className="bg-teal-400 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Item 3</h2>
                    <p className="text-gray-800">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                {/* Grid cell 4 */}
                <div className="bg-teal-500 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Item 4</h2>
                    <p className="text-gray-800">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                {/* Grid cell 5 */}
                <div className="bg-teal-600 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Item 5</h2>
                    <p className="text-gray-800">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                {/* Grid cell 6 */}
                <div className="bg-teal-700 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Item 6</h2>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* Grid cell 7 */}
                <div className="bg-teal-800 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Item 7</h2>
                    <p className="text-gray-200">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* Grid cell 8 */}
                <div className="bg-teal-900 p-4 rounded-lg shadow-lg col-span-2">
                    <h2 className="text-lg font-semibold mb-2">Item 8</h2>
                    <p className="text-gray-200">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
