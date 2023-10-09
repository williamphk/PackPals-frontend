import React from "react";
import { useNavigate } from "react-router-dom";

import "./MatchHosted.css";

interface PotentialMatchesProps {
  message: string;
}

const MatchHosted: React.FC<PotentialMatchesProps> = ({ message }) => {
  const navigate = useNavigate();

  const handleHomeButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="matchHostedContainer">
      <h2>Matches Hosted Successfully</h2>
      <p>{message}</p>
      <button className="homeButton" type="submit" onClick={handleHomeButton}>
        Return to Home
      </button>
    </div>
  );
};

export default MatchHosted;