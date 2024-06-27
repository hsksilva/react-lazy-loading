import React, { useState, useEffect } from 'react';

const Component1 = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulate a time-consuming task with a delay
        const timer = setTimeout(() => {
            const fetchedData = 'Data loaded successfully!';
            setData(fetchedData);
            setLoading(false);
        }, 5000); // 5 seconds delay to simulate the task

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            <h1>Delayed Load Component</h1>
            {loading ? (
                <p>Loading, please wait...</p>
            ) : (
                <p>{data}</p>
            )}
        </div>
    );
};


export default Component1;