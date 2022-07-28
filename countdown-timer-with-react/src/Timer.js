import React, { useState, useEffect} from 'react';
import './App.css';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 31, 2022";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 /60) % 60));
        setSeconds(Math.floor((time / 1000) % 60 ));
        
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);

    return ( 
        <div className="timer">
            <h1>Hi Ashok for the new year the remaining time is: <br/><br/> 
            <span>{days}</span>
            <span> {hours} </span>
            <span>{minutes} </span>
            <span>{seconds}</span></h1>
        </div>
     );
};

export default Timer;