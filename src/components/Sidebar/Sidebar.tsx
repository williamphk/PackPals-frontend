import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white w-64 h-full fixed top-0 left-0 shadow-lg hidden md:block">
      <ul className="mt-2">
        <li className="mb-1">
          <Link
            to="/"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <span className="ml-4">Home</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/recent-matches"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <span className="ml-4">Recent Matches</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/ongoing-matches"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <span className="ml-4">Ongoing Matches</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/you-might-like"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <span className="ml-4">You Might Like</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
