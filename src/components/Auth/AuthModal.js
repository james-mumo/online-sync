import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthModal = ({ isOpen, onClose }) => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        coursesEnrolled: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCourseSelect = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);

        // Check if the selected course is already enrolled
        const newCourses = selectedOptions.filter(course => !formData.coursesEnrolled.includes(course));

        setFormData(prevState => ({
            ...formData,
            coursesEnrolled: [...prevState.coursesEnrolled, ...newCourses]
        }));
    };

    const switchForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can add logic to submit the form data
    };

    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                        <div className="sm:flex sm:items-start  w-full ">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                <h3 className="text-2xl font-semibold opacity-95 leading-6 text-gray-900" id="modal-title">
                                    {isLoginForm ? "Student Login" : "Student Signup"}
                                </h3>
                                {isLoginForm ? (
                                    <LoginForm
                                        formData={formData}
                                        handleInputChange={handleInputChange}
                                        handleSubmit={handleSubmit}
                                        switchForm={switchForm}
                                        onClose={onClose}
                                    />
                                ) : (
                                    <SignupForm
                                        formData={formData}
                                        handleInputChange={handleInputChange}
                                        handleSubmit={handleSubmit}
                                        handleCourseSelect={handleCourseSelect}
                                        switchForm={switchForm}
                                         onClose={onClose}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white sm:flex sm:flex-row-reverse top-1 right-4 fixed">
                        <button
                            onClick={onClose}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
