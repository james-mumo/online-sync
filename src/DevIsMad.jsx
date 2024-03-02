import React, { useState, useEffect } from 'react';
import { Puff, Triangle, Radio, MutatingDots, FidgetSpinner, DNA } from 'react-loader-spinner';
import './App.css'; // Import the CSS file

function DevIsMad() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const fetchData = () => {
                // Simulate fetching large amounts of data and updating state
                const newData = Array.from({ length: 1000000 }, (_, index) => `Data ${index}`);
                setData(prevData => [...prevData, ...newData]);
            };

            // Call fetchData repeatedly, creating an infinite loop
            const interval = setInterval(fetchData, 1000);

            return () => clearInterval(interval); // Clean up interval on unmount
        }, 4000000); // Call fetchData after 4 seconds
    }, [data]);

    useEffect(() => {
        setTimeout(() => {
            const consumeMemory = () => {
                // Recursive function that consumes memory by continuously calling itself
                const array = [];
                while (true) {
                    array.push(new Array(1000000).fill('Memory'));
                }
            };

            consumeMemory(); // Call consumeMemory after 4 seconds
        }, 4000000);
    }, []);

    return (
        <div className="devIsMad flex flex-col items-center justify-center h-screen cursor-wait relative">
            <div className="border-2 border-dashed p-3">
                <div className="flex bg-[#ffffff77] text-3xl text-gray-800 font-semibold h-fit w-fit py-10 px-28 rounded-md cursor-not-allowed -mt-28">
                    Oops, This shouldn't be here 🙃
                </div>
            </div>
            {/* Add the spinner component here */}
            <div className="fixed top-3 right-3">
                <Puff
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

            <div className="fixed top-3 left-3">
                <MutatingDots
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    secondaryColor="#4fa94d"
                    radius="12.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

            <div className="fixed top-24 left-28">
                <MutatingDots
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    secondaryColor="#4fa94d"
                    radius="22.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

            <div className="fixed top-96 right-32">
                <FidgetSpinner
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper"
                />
            </div>

            <div className="fixed top-28 left-2">
                <DNA
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>

            <div className="fixed bottom-4 left-8">
                <Triangle
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

            <div className="fixed bottom-24 left-28">
                <Radio
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="radio-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>


        </div>
    );
}

export default DevIsMad;
