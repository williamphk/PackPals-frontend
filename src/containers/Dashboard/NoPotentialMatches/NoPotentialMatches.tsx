import React from "react";
import { useNavigate } from "react-router-dom";

import "./NoPotentialMatches.css";

interface PotentialMatchesProps {
  message: string;
}

const NoPotentialMatches: React.FC<PotentialMatchesProps> = ({ message }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="noPotentialMatchesContainer">
      <h2>No Potential Matches</h2>
      <p>{message}</p>
      <button className="homeButton" type="submit" onClick={handleSubmit}>
        Return to Home
      </button>
    </div>
  );
};

export default NoPotentialMatches;
