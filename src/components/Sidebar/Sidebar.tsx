import React from "react";
import { Link } from "react-router-dom";
import { usePage } from "../../context/PageContext";

const Sidebar: React.FC = () => {
  const { page, setPage } = usePage();

  return (
    <div className="bg-white text-gray-700 w-64 h-full fixed top-0 left-0 shadow-lg hidden dark:bg-gray-800 dark:text-white md:flex flex-col justify-between transition-colors duration-200">
      <ul className="mt-2">
        <li className="mb-1">
          <Link
            to="/dashboard"
            className={`${
              page === "dashboard" &&
              "border-r-4 border-gray-700 dark:border-white bg-gray-200 dark:bg-gray-700"
            } flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700`}
            onClick={() => setPage("dashboard")}
          >
            <span className="ml-4">Home</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/recent-matches"
            className={`${
              page === "recent-matches" &&
              "border-r-4 border-gray-700 dark:border-white bg-gray-200 dark:bg-gray-700"
            } flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700`}
            onClick={() => setPage("recent-matches")}
          >
            <span className="ml-4">Recent Matches</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/ongoing-matches"
            className={`${
              page === "ongoing-matches" &&
              "border-r-4 border-gray-700 dark:border-white bg-gray-200 dark:bg-gray-700"
            } flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700`}
            onClick={() => setPage("ongoing-matches")}
          >
            <span className="ml-4">Ongoing Matches</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/you-might-like"
            className={`${
              page === "you-might-like" &&
              "border-r-4 border-gray-700 dark:border-white bg-gray-200 dark:bg-gray-700"
            } flex items-center px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700`}
            onClick={() => setPage("you-might-like")}
          >
            <span className="ml-4">You Might Like</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
