import React from 'react';
import { online } from "../../../dummydata";

function Courses() {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-7 gap-8 p-4'>
                {online.map((val, index) => (
                    <div className='border' key={index}>
                        <div className='img'>
                            <img src={val.cover} alt='Course Cover' />
                        </div>
                        <h1 className="text-teal-800 text-xl font-bold mb-2">{val.courseName}</h1>
                        <span>{val.course}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
