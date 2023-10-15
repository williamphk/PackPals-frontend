import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white text-gray-700 w-64 h-full fixed top-0 left-0 shadow-lg hidden dark:bg-gray-800 dark:text-white md:flex flex-col justify-between transition-colors duration-200">
      <ul className="mt-2">
        <li className="mb-1">
          <Link
            to="/"
            className="flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-4">Home</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/recent-matches"
            className="flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-4">Recent Matches</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/ongoing-matches"
            className="flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-4">Ongoing Matches</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/you-might-like"
            className="flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-4">You Might Like</span>
          </Link>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 mt-5 dark:bg-gray-400 dark:text-black"
      >
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Sidebar;
