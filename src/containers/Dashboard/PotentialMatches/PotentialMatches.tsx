import React, { useState } from "react";
import { createMatch } from "../../../services/match";
import { Match } from "../../../models/Match";

import "./PotentialMatches.css";

interface PotentialMatchesProps {
  formData: {
    product_name: string;
  };
  potentialMatches: Match[];
}

const PotentialMatches: React.FC<PotentialMatchesProps> = ({
  formData,
  potentialMatches,
}) => {
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
    await createMatch(formData);
  };

  return (
    <div className="potentialMatchesContainer">
      <h2>Potential Matches</h2>
      {potentialMatches.map((match) => (
        <div key={match._id} className="matchItem">
          <div className="productName">{match.product_name}</div>
          <div className="productName">
            {`${match.requesterDetails?.first_name}
            ${match.requesterDetails?.last_name}`}
          </div>
          <button className="viewProfileButton">View Profile</button>
          <button className="connectButton">Connect</button>
        </div>
      ))}
      <button className="hostMatchButton" type="submit" onClick={handleSubmit}>
        Host a match
      </button>
    </div>
  );
};

export default PotentialMatches;
