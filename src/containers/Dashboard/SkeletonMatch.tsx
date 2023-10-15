import React from "react";

const SkeletonMatch: React.FC = () => {
  return (
    <div className="bg-gray-300 p-6 rounded-xl shadow-md mb-4 flex flex-col dark:bg-gray-700 py-16 animate-pulse"></div>
  );
};

export default SkeletonMatch;
