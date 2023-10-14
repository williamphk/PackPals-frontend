import React, { useState } from "react";
import { createMatch } from "../../../services/match";
import { useNavigate } from "react-router-dom";

import MatchHosted from "../MatchHosted/MatchHosted";

interface PotentialMatchesProps {
  formData: {
    product_name: string;
  };
  message: string;
}

const NoPotentialMatches: React.FC<PotentialMatchesProps> = ({
  formData,
  message,
}) => {
  const navigate = useNavigate();
  const [isMatchHosted, setIsMatchHosted] = useState(false);
  const [matchHostedMessage, setMatchHostedMessage] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await createMatch(formData);
    setMatchHostedMessage(result.message);
    setIsMatchHosted(true);
  };

  const handleHomeButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  if (isMatchHosted) {
    return <MatchHosted message={matchHostedMessage} />;
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">No Potential Matches</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mb-2 hover:bg-blue-600 transition duration-150"
          type="submit"
          onClick={handleSubmit}
        >
          Host a match
        </button>
        <button
          className="bg-gray-300 text-black py-2 px-4 rounded-lg w-full hover:bg-gray-400 transition duration-150"
          type="submit"
          onClick={handleHomeButton}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NoPotentialMatches;
