import React, { useState } from "react";
import { NotificationManager } from 'react-notifications';
import { useHistory } from "react-router-dom";
import { login } from "../../logic/api";
import { Puff } from 'react-loader-spinner';

const LoginForm = ({ formData, handleInputChange, handleSubmit, switchForm }) => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const submitForm = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await login(formData);
            console.log(response.data)
            NotificationManager.success('Login Successful', 'Success');
            localStorage.setItem('user', JSON.stringify(response.data)); // Store user data
            history.push('/dashboard'); // Redirect to dashboard

        } catch (error) {
            console.log("Error logging in:", error);
            NotificationManager.error('Login Failed', 'Error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="mt-2 w-full" onSubmit={submitForm}>
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
            <div className={`mt-4 ${loading ? 'hidden' : 'block'}`}>
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
            <div className={`mt-4 ${loading ? 'hidden' : 'block'}`}>
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
