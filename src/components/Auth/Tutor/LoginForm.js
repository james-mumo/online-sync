import React from "react";

const LoginForm = ({ formData, handleInputChange, handleSubmit, switchForm }) => {
    return (
        <form className="mt-2 w-full" onSubmit={handleSubmit}>
            <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <div className="mt-1">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
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
            <div className="mt-4">
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Login
                </button>
            </div>
            <p className="mt-4 cursor-pointer text-sm text-gray-500" onClick={switchForm} >
                Don't have an account?{" "}Signup
            </p>
        </form>
    );
};

export default LoginForm;
