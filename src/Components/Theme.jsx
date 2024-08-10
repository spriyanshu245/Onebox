import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const Theme = () => {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="mr-10">
            <label htmlFor="toggle" className="cursor-pointer">
                <input type="checkbox" id="toggle" className="sr-only" onChange={() => setDarkMode(!darkMode)} />
                {darkMode ? (
                    <div className="bg-black w-14 h-6 flex items-center rounded-full "> <FaMoon /></div>
                ) : (
                    <div className="bg-gray-600 w-14 h-6 flex items-center rounded-full transition"><FaSun style={{ transform: "translateX(200%)", color: "white" }} /></div>
                )}
            </label>
        </div>
    );
}    