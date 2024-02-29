import React, { useState } from "react";
import { NotificationManager } from 'react-notifications';
import { signup } from "../../logic/api";
import { useHistory } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import { login } from "../../logic/api";

const SignupForm = ({ formData, handleInputChange, handleSubmit, handleCourseSelect, switchForm, onClose }) => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const formatSelectedCourses = () => {
        return formData.coursesEnrolled.join(", ");
    };

    const submitForm = async () => {
        setLoading(true); // Set loading state to true when form is submitted
        try {
            // Make signup request using the imported signup function
            const response = await signup(formData);

            NotificationManager.success('Signup Successful', 'Success');

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(response.data));

            // Set loggedIn variable in localStorage
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('userType', response.data.user.userType);

            // Redirect to dashboard
            history.push('/dashboard');

            onClose();
        } catch (error) {
            console.error("Error signing up:", error);

            // Show error notification
            NotificationManager.error('Signup Failed', 'Error');
        } finally {
            setLoading(false); // Reset loading state regardless of success or failure
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        submitForm();
    };

    return (
        <form className="mt-2 w-full" onSubmit={(e) => handleFormSubmit(e)}>

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

            <div className={`mt-4 ${loading ? 'hidden' : 'block'}`}>
                <div className="flex w-full gap-2">
                    <div className="mt-4 w-full">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4 w-full">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <div className="mt-1">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Signup
                </button>
            </div>

            <p className="mt-4 cursor-pointer text-sm text-gray-500" onClick={switchForm} >
                Already have an account?{" "}Login
            </p>
        </form>
    );
};

export default SignupForm;
