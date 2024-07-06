"use client";
import React, { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const ButtonThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const theme = localStorage.getItem("theme");
            theme === "dark" ? setDarkMode(true) : setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem("theme", darkMode ? "dark" : "light");
            document.documentElement.classList.toggle("dark", darkMode);
        }
    }, [darkMode]);

    return (
        <div className=''>
            <button type="button" onClick={() => setDarkMode(!darkMode)}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" data-hs-theme-click-value="dark">
                <span>{darkMode ? <BedtimeIcon /> : <LightModeIcon />}</span>
            </button>
        </div>
    );
}

export default ButtonThemeToggle;
