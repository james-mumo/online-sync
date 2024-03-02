import { Fragment, useState, useEffect } from 'react';
import { Search } from '@mui/icons-material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DateRangeIcon from '@mui/icons-material/DateRange';
import jemo from "../../../images/jemo.png"

const getFormattedDate = (date) => {
    const day = date.getDate();
    const monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const suffixes = ['th', 'st', 'nd', 'rd'];
    let suffix;
    if (day >= 11 && day <= 13) {
        suffix = 'th';
    } else {
        suffix = suffixes[day % 10] || 'th';
    }

    return (
        <Fragment>
            <span className='font-semibold'>{day}</span>
            <sup className=''>{suffix}</sup>
            {' '}
            <span className='font-semibold'>{monthNames[monthIndex]}</span>
            {' '}
            <span className='font-semibold'>{year}</span>
        </Fragment>
    );
};

const MyHeader = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    const formattedDate = getFormattedDate(currentTime);
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

    return (
        <div className="flex items-center justify-between py-4 px-6 bg-white text-gray-800">
            <div className="flex items-center flex-1 pr-8">
                <h1 className="text-5xl font-bold mr-4">Dashboard</h1>
                <KeyboardArrowLeftIcon className="text-3xl mr-2" />
                <KeyboardArrowRightIcon className="text-3xl mr-2" />
                <Search className="text-xl mr-2 ml-14" />
                <input type="text" placeholder="Find something..." className="bg-gray-100 text-gray-500 flex-1 px-2 py-1 rounded-sm focus:outline-none" />
            </div>
            <div className="flex items-center w-fit borde">
                <DateRangeIcon className="text-3xl mr-2 font-thin" />
                <p className="mr-4">{formattedDate}</p>
                <p className="mr-4 font-semibold ml-6">{formattedTime}</p>
                <img src={jemo} alt="Profile" className="w-12 h-12 rounded-full" />
            </div>
        </div>
    );
};

export default MyHeader;
