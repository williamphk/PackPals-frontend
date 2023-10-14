import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white w-64 h-full fixed top-0 left-0 shadow-lg">
      <ul className="mt-2">
        <li className="mb-1">
          <a
            href="/"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <span className="ml-4">Home</span>
          </a>
        </li>
        <li className="mb-1">
          <a
            href="/recent-matches"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <span className="ml-4">Recent Matches</span>
          </a>
        </li>
        <li className="mb-1">
          <a
            href="/ongoing-matches"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <span className="ml-4">Ongoing Matches</span>
          </a>
        </li>
        <li className="mb-1">
          <a
            href="/you-might-like"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <span className="ml-4">You Might Like</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
