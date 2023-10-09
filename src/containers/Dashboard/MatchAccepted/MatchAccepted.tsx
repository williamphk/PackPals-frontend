import React from "react";
import { useNavigate } from "react-router-dom";

import "./MatchAccepted.css";

interface PotentialMatchesProps {
  message: string;
}

const MatchAccepted: React.FC<PotentialMatchesProps> = ({ message }) => {
  const navigate = useNavigate();

  const handleHomeButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="matchAcceptedContainer">
      <h2>{message}</h2>
      <button className="homeButton" type="submit" onClick={handleHomeButton}>
        Return to Home
      </button>
    </div>
  );
};

export default MatchAccepted;
