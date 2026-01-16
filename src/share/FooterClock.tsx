import React from 'react'
import { useEffect, useState } from "react";

export const FooterClock: React.FC = () => {
    return <>
        <div className="mt-8 text-center text-sm text-gray-600">
            Last sync: <Clock />
        </div>
    </>
}

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // cleanup ป้องกัน memory leak
        return () => clearInterval(interval);
    }, []);

    return <>
        {time.toLocaleTimeString()}
    </>
};