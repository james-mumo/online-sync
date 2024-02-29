import React from "react";

const SignupForm = ({ formData, handleInputChange, handleSubmit, handleCourseSelect, switchForm }) => {

    const formatSelectedCourses = () => {
        return formData.coursesEnrolled.join(", ");
    };

    return (
        <form className="mt-2 w-full" onSubmit={handleSubmit}>
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
                <label htmlFor="selectedCourses" className="block text-sm font-medium text-gray-700">Selected Courses:</label>
                <div className="mt-1">
                    <input
                        type="text"
                        id="selectedCourses"
                        value={formatSelectedCourses()} // Display selected courses
                        readOnly // Make the input read-only
                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>


            <div className="mt-4">
                <label htmlFor="coursesEnrolled" className="block text-sm font-medium text-gray-700">Courses Enrolled:</label>
                <div className="mt-1">
                    <select
                        multiple
                        name="coursesEnrolled"
                        id="coursesEnrolled"
                        onChange={handleCourseSelect}
                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        {/* Populate options dynamically */}
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                    </select>
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
