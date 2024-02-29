import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthModal = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        coursesEnrolled: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
        <div className={`fixed z-10 inset-0 overflow-y-auto `}>
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
                                    {isLoginForm ? "Login" : "Signup"}
                                </h3>
                                {isLoginForm ? (
                                    <LoginForm
                                        formData={formData}
                                        handleInputChange={handleInputChange}
                                        handleSubmit={handleSubmit}
                                        switchForm={switchForm}

                                    />
                                ) : (
                                    <SignupForm
                                        formData={formData}
                                        handleInputChange={handleInputChange}
                                        handleSubmit={handleSubmit}
                                        switchForm={switchForm}

                                    />
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AuthModal;
