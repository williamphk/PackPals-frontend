import React, { useState } from "react";
import { createMatch } from "../../../services/match";
import { useNavigate } from "react-router-dom";

import MatchHosted from "../MatchHosted/MatchHosted";

import "./NoPotentialMatches.css";

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
  const [matchHostedMessage, setmatchHostedMessage] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await createMatch(formData);
    setmatchHostedMessage(result.message);
    setIsMatchHosted(true);
  };

  const handleHomeButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      {isMatchHosted ? (
        <MatchHosted message={matchHostedMessage} />
      ) : (
        <div className="noPotentialMatchesContainer">
          <h2>No Potential Matches</h2>
          <p>{message}</p>
          <button className="homeButton" type="submit" onClick={handleSubmit}>
            Host a Match
          </button>
          <button
            className="homeButton"
            type="submit"
            onClick={handleHomeButton}
          >
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default NoPotentialMatches;
