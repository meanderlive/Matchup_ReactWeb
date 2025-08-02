import React, { useEffect, useState } from 'react';

function TimeAgo({ createdAt }) {
    const [timeAgo, setTimeAgo] = useState("");

    useEffect(() => {
        const calculateTimeAgo = () => {
            const difference = new Date() - new Date(createdAt);
            const seconds = Math.floor(difference / 1000);
            const minute = 60;
            const hour = minute * 60;
            const day = hour * 24;
            const month = day * 30; // Approximation, not precise

            if (seconds < minute) {
                return `${seconds} seconds ago`;
            } else if (seconds < hour) {
                return `${Math.floor(seconds / minute)} minutes ago`;
            } else if (seconds < day) {
                return `${Math.floor(seconds / hour)} hours ago`;
            } else if (seconds < month) {
                return `${Math.floor(seconds / day)} days ago`;
            } else {
                return `${Math.floor(seconds / month)} months ago`;
            }
        };

        // Calculate time ago when component mounts or createdAt changes
        setTimeAgo(calculateTimeAgo());

        // Update time ago every minute
        const interval = setInterval(() => {
            setTimeAgo(calculateTimeAgo());
        }, 60000);

        // Cleanup function to clear interval
        return () => clearInterval(interval);
    }, [createdAt]);

    return <span>{timeAgo}</span>;
}
export default TimeAgo

// Usage example:
// <TimeAgo createdAt="2024-04-03T07:59:22.930Z" />
