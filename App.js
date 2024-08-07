import React, { useState, useEffect } from 'react';

function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Jonli Soat</h1>
            <p>{time}</p>
        </div>
    );
}

export default App;
