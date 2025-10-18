import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="absolute top-5 right-5 text-right hidden md:block">
            <div className="text-xl font-semibold text-white">{time.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-200">{time.toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            })}</div>
        </div>
    )
}

export const Header: React.FC = () => {
    return (
        <header className="text-center mb-7 p-5 bg-gradient-to-br from-gray-800 to-blue-700 text-white rounded-xl shadow-2xl relative glassmorphism">
            <h1 className="text-4xl font-bold mb-2">Energy Management System - Model 3</h1>
            <p className="text-lg text-gray-300">AI-Based Energy Management with LSTM Forecasting and Fuzzy Logic Optimization</p>
            <Clock />
        </header>
    );
};