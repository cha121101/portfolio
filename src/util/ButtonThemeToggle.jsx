"use client"
import React, { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const ButtonThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    // Initial load to check the localStorage and set theme accordingly
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            const theme = localStorage.getItem("theme");
            theme === "dark" ? setDarkMode(true) : setDarkMode(false);
        }
    }, []);

    // Effect to update the document class and localStorage based on darkMode state
    useEffect(() => {
        if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
            if (darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem("theme", "light");
            }
        }
    }, [darkMode]);

    return (
        <div>
            <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                data-hs-theme-click-value="dark"
            >
                <span>{darkMode ? <BedtimeIcon /> : <LightModeIcon />}</span>
            </button>
        </div>
    );
}

export default ButtonThemeToggle;
