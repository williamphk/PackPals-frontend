import React, { useState } from "react";
import { createMatch } from "../../../services/match";
import { Match } from "../../../models/Match";
import MatchHosted from "../MatchHosted/MatchHosted";

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
  const [isMatchHosted, setIsMatchHosted] = useState(false);
  const [matchHostedMessage, setMatchHostedMessage] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await createMatch(formData);
    setMatchHostedMessage(result.message);
    setIsMatchHosted(true);
  };

  return (
    <div>
      {isMatchHosted ? (
        <MatchHosted message={matchHostedMessage} />
      ) : (
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
          <button
            className="hostMatchButton"
            type="submit"
            onClick={handleSubmit}
          >
            Host a match
          </button>
        </div>
      )}
    </div>
  );
};

export default PotentialMatches;
