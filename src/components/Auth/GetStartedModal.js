import React, { useState } from 'react';

function GetStartedModal({ closeGetStartedModal }) {
    const [step, setStep] = useState(1);
    const [tutoringFor, setTutoringFor] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');
    const [mainGoal, setMainGoal] = useState('');
    const [startTiming, setStartTiming] = useState('');
    const [tutoringMethod, setTutoringMethod] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [inputEntered, setInputEntered] = useState(false); // State to track if input entered
    const [selectedOption, setSelectedOption] = useState(null);


    const nextStep = () => setStep(step + 1);
    const prevStep = () => {
        setStep(step - 1);
        setSelectedOption(null); // Reset selected option when going back
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    const handleInputChange = (e) => {
        setInputEntered(e.target.value.trim().length > 0); // Update inputEntered based on input value
    };


    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Who will we be tutoring?</h2>
                        <div>
                            <button className={`hover:bg-gray-100 transition duration-300 ${tutoringFor === 'Your Child' ? 'bg-teal-200' : ''}`} onClick={() => { setTutoringFor('Your Child'); nextStep(); }}>Your Child</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${tutoringFor === 'Yourself' ? 'bg-teal-200' : ''}`} onClick={() => { setTutoringFor('Yourself'); nextStep(); }}>Yourself</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${tutoringFor === 'Someone Else' ? 'bg-teal-200' : ''}`} onClick={() => { setTutoringFor('Someone Else'); nextStep(); }}>Someone Else</button>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">What grade level?</h2>
                        <div>
                            <button className={`hover:bg-gray-100 transition duration-300 ${gradeLevel === 'All Levels' ? 'bg-teal-200' : ''}`} onClick={() => { setGradeLevel('All Levels'); nextStep(); }}>All Levels</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${gradeLevel === 'Elementary' ? 'bg-teal-200' : ''}`} onClick={() => { setGradeLevel('Elementary'); nextStep(); }}>Elementary</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${gradeLevel === 'Middle School' ? 'bg-teal-200' : ''}`} onClick={() => { setGradeLevel('Middle School'); nextStep(); }}>Middle School</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${gradeLevel === 'High School' ? 'bg-teal-200' : ''}`} onClick={() => { setGradeLevel('High School'); nextStep(); }}>High School</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${gradeLevel === 'College' ? 'bg-teal-200' : ''}`} onClick={() => { setGradeLevel('College'); nextStep(); }}>College</button>

                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">What is your main goal?</h2>
                        <div className=''>
                            <button className={`hover:bg-gray-100 transition duration-300 ${mainGoal === 'Improve Results' ? 'bg-teal-200' : ''}`} onClick={() => { setMainGoal('Improve Results'); nextStep(); }}>Improve Results</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${mainGoal === 'Prepare for a Test' ? 'bg-teal-200' : ''}`} onClick={() => { setMainGoal('Prepare for a Test'); nextStep(); }}>Prepare for a Test</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${mainGoal === 'Get Ahead' ? 'bg-teal-200' : ''}`} onClick={() => { setMainGoal('Get Ahead'); nextStep(); }}>Get Ahead</button>
                            <button onClick={() => { setMainGoal('Other'); nextStep(); }}>Other</button>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-700">When are you looking to start?</h2>
                        <div>
                            <button className={`hover:bg-gray-100 transition duration-300 ${startTiming === 'Soon' ? 'bg-teal-200' : ''}`} onClick={() => { setStartTiming('Soon'); nextStep(); }}>Soon</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${startTiming === 'In the Next Few Weeks' ? 'bg-teal-200' : ''}`} onClick={() => { setStartTiming('In the Next Few Weeks'); nextStep(); }}>In the Next Few Weeks</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${startTiming === 'Not Sure' ? 'bg-teal-200' : ''}`} onClick={() => { setStartTiming('Not Sure'); nextStep(); }}>Not Sure</button>
                        </div>
                    </>
                );
            case 5:
                return (
                    <>
                        <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-700">How do you want to receive tutoring?</h2>
                        <div>
                            <button className={`hover:bg-gray-100 transition duration-300 ${tutoringMethod === 'Online' ? 'bg-teal-200' : ''}`} onClick={() => { setTutoringMethod('Online'); nextStep(); }}>Online</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${tutoringMethod === 'In Person' ? 'bg-teal-200' : ''}`} onClick={() => { setTutoringMethod('In Person'); nextStep(); }}>In Person</button>
                            <button className={`hover:bg-gray-100 transition duration-300 ${tutoringMethod === 'Open to Either' ? 'bg-teal-200' : ''}`} onClick={() => { setTutoringMethod('Open to Either'); nextStep(); }}>Open to Either</button>
                        </div>
                    </>
                );
            case 6:
                return (
                    <>
                        <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-700">What is your zip code?</h2>
                        <input type="text" value={zipCode} onChange={(e) => { setZipCode(e.target.value); handleInputChange(e); }} />
                    </>
                );
            case 7:
                return (
                    <>
                        <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-700">What is your name?</h2>
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value); handleInputChange(e); }} />
                    </>
                );
            case 8:
                return (
                    <>
                        <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-700">What is your email?</h2>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); handleInputChange(e); }} />
                    </>
                );
            case 9:
                return (
                    <>
                        <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-700">What is your phone number?</h2>
                        <input type="tel" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value); handleInputChange(e); }} />
                    </>
                );
            case 10:
                return (
                    <>
                        {/* Confirmation step */}
                        <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-700">Please review your information</h2>
                        <p><span className='opacity-90 font-semibold text-gray-500 text-sm'>Tutoring For:</span> <span className='text-sm'> {tutoringFor}</span></p>
                        <p><span className='opacity-90 font-semibold text-gray-500 text-sm'>Grade Level: </span> <span className='text-sm'>{gradeLevel}</span></p>
                        <p><span className='opacity-90 font-semibold text-gray-500 text-sm'>Main Goal: </span> <span className='text-sm'>{mainGoal}</span></p>
                        <p><span className='opacity-90 font-semibold text-gray-500 text-sm'>Start Timing:</span> <span className='text-sm'> {startTiming}</span></p>
                        <p><span className='opacity-90 font-semibold text-gray-500 text-sm'>Tutoring Method</span> <span className='text-sm'>{tutoringMethod}</span></p>
                        <p><span className='opacity-90 font-semibold text-gray-500 text-sm'>Zip Code: </span> <span className='text-sm'>{zipCode}</span></p>
                        <p><span className='opacity-90 font-semibold text-gray-500 text-sm'>Name: </span> <span className='text-sm'> {name}</span></p >
                        <p><span className='opacity-90 font-semibold text-gray-500 text-sm'>Email:</span> <span className='text-sm'> {email}</span></p>
                        <p><span className='opacity-90 font-semibold text-gray-500 text-sm'>Phone Number:</span > <span className='text-sm'> {phoneNumber}</span></p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="hidden sm:flex absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 justify-end items-center z-50">

                <div className="bg-[#ffffffc4] p-8 rounded-sm text-center mr-20 relative">

                    <button className="bg-red-500 absolute top-0 right-3 hover:bg-red-600 text-white py-1 px-1" onClick={closeGetStartedModal}>Close</button>

                    <span className='opacity-80'>Answer questions below to get started</span>
                    <hr />
                    <form onSubmit={handleSubmit} className='w-96'>
                        {renderStep()}
                        <div className="mt-4 flex justify-between">
                            {step !== 1 && (
                                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={prevStep}>Back</button>
                            )}
                            {step !== 10 && (

                                <button className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${!inputEntered && step >= 6 && step <= 9 ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit" disabled={!inputEntered && step >= 6 && step <= 9} onClick={nextStep}> Next</button>

                            )}
                            {step === 10 && (
                                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="submit">Submit</button>
                            )}
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}

export default GetStartedModal;
