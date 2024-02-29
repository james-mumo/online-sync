import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaymentsIcon from '@mui/icons-material/Payments';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { useHistory, Link } from "react-router-dom";

const LoggedInHeader = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Clear specific items from localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userType');

        // Redirect to home page
        // window.location.href = '/';
        // window.location.reload();
        history.push("/")
    };

    return (
        <div className="bg-teal-800 text-white py-4 flex justify-between items-center px-2">
            <div className='w-fit px-2'>
                <Link to="/dashboard" className="hover:text-white font-semibold text-3xl sm:hover:text-[#1eb2a6]">Online Sync</Link>
            </div>
            <nav className='flex-1 flex items-end flex-row justify-end'>
                <ul className="flex space-x-4">

                    <div className='flex justify-center gap-2 items-center'>
                        <li>
                            <a href="/dashboard" className="hover:text-teal-300 cursor-pointer bg-teal-950 hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center">
                                <SchoolIcon className="mr-2" />
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <Link to="/classes" className="hover:text-teal-300 cursor-pointer bg-teal-950 hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center">
                                <CollectionsBookmarkIcon className="mr-2" />
                                Classes
                            </Link>
                        </li>
                        <li>
                            <Link to="/courses" className="hover:text-teal-300 cursor-pointer bg-teal-950 hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center">
                                <LibraryBooksIcon className="mr-2" />
                                Courses
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-300 cursor-pointer bg-teal-950 hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center">
                                <PaymentsIcon className="mr-2" />
                                Add Classes
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-300 cursor-pointer bg-teal-950 hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center">
                                <GroupAddIcon className="mr-2" />
                                Add Classes
                            </a>
                        </li>
                        <li>
                            <a onClick={handleLogout} className="hover:text-teal-300 cursor-point bg-teal-950 hover:bg-teal-900 transition duration-300 p-3 rounded-md flex items-center">
                                <ExitToAppIcon className="mr-2" />
                                Log Out
                            </a>
                        </li>
                    </div>

                </ul>
            </nav>
        </div>
    );
};

export default LoggedInHeader;
