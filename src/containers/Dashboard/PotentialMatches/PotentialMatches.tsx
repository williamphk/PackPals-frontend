import React, { useState } from "react";
import { createMatch, acceptMatch } from "../../../services/match";
import { Match } from "../../../models/Match";
import MatchHosted from "../MatchHosted/MatchHosted";

import "./PotentialMatches.css";
import MatchAccepted from "../MatchAccepted/MatchAccepted";

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
  const [isMatchAccepted, setIsMatchAccepted] = useState(false);
  const [matchAcceptedMessage, setMatchAcceptedMessage] = useState("");

  const handleHostMatch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await createMatch(formData);
    setMatchHostedMessage(result.message);
    setIsMatchHosted(true);
  };

  const handleConnect = async (
    matchId: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const result = await acceptMatch(matchId);
    setMatchAcceptedMessage(result.message);
    setIsMatchAccepted(true);
  };

  if (isMatchAccepted) {
    return <MatchHosted message={matchAcceptedMessage} />;
  }

  if (isMatchHosted) {
    return <MatchAccepted message={matchHostedMessage} />;
  }

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
          <button
            className="connectButton"
            onClick={(event) => handleConnect(match._id, event)}
          >
            Connect
          </button>
        </div>
      ))}
      <button
        className="hostMatchButton"
        type="submit"
        onClick={handleHostMatch}
      >
        Host a match
      </button>
    </div>
  );
};

export default PotentialMatches;
