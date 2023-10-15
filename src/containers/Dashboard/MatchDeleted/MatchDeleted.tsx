import React from "react";
import { useNavigate } from "react-router-dom";

interface PotentialMatchesProps {
  message: string;
}

const MatchDeleted: React.FC<PotentialMatchesProps> = ({ message }) => {
  const navigate = useNavigate();

  const handleHomeButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4 sm:w-1/2 md:w-1/3 dark:bg-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-center">{message}</h2>
        <button
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleHomeButton}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default MatchDeleted;
