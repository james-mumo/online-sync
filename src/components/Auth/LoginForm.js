import React, { useState } from "react";
import { NotificationManager } from 'react-notifications';
import { useHistory } from "react-router-dom";
import { login } from "../../logic/api";
import { Puff } from 'react-loader-spinner';

const LoginForm = ({ formData, handleInputChange, handleSubmit, switchForm }) => {
    const [loading, setLoading] = useState(false); // State to manage loading spinner
    const history = useHistory();

    const submitForm = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading state to true when form is submitted
        try {
            // Attempt login
            const response = await login(formData);

            // Show success notification
            NotificationManager.success('Login Successful', 'Success');
            console.log(response)
            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(response.data));

            // Set loggedIn variable in localStorage
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('userType', response.data.user.userType);

            // Redirect to dashboard         
            history.push('/dashboard');

            
        } catch (error) {
            console.error("Error logging in:", error);
            // Show error notification
            NotificationManager.error('Login Failed', 'Error');
            // Handle login error (e.g., show error message to the user)
        } finally {
            setLoading(false); // Reset loading state regardless of success or failure
        }
    };

    return (
        <form className="mt-2 w-full" onSubmit={submitForm}>
            {/* Conditionally render puff spinner when loading state is true */}
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

            <div className={`mt-4 ${loading ? 'hidden' : 'block'}`}> {/* Hide form inputs when loading */}
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                <div className="mt-1">
                    <input
                        type="name"
                        name="username"
                        id="name"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
            </div>
            <div className={`mt-4 ${loading ? 'hidden' : 'block'}`}> {/* Hide form inputs when loading */}
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
            <div className={`mt-4 ${loading ? 'hidden' : 'block'}`}> {/* Hide form button when loading */}
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Login
                </button>
            </div>
            <p className={`mt-4 cursor-pointer text-sm text-gray-500 ${loading ? 'hidden' : 'block'}`} onClick={switchForm}>
                Don't have an account?{" "}Signup
            </p>
        </form>
    );
};

export default LoginForm;
