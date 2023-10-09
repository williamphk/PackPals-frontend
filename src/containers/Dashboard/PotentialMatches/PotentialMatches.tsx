import React, { useState } from "react";
import { createMatch, acceptMatch } from "../../../services/match";
import { getRecentMatchesByReqesterId } from "../../../services/user";
import { Match } from "../../../models/Match";
import MatchHosted from "../MatchHosted/MatchHosted";
import UserProfile from "../../UserProfile/UserProfile";

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
  const [recentMatches, setRecentMatches] = useState([] as Match[]);
  const [viewedProfileId, setViewedProfileId] = useState<string | null>(null);

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

  const handleProfile = async (
    requesterId: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setViewedProfileId(requesterId);
    const result = await getRecentMatchesByReqesterId(requesterId);
    setRecentMatches(result);
  };

  if (isMatchAccepted) {
    return <MatchAccepted message={matchAcceptedMessage} />;
  }

  if (isMatchHosted) {
    return <MatchHosted message={matchHostedMessage} />;
  }

  return (
    <div className="potentialMatchesContainer">
      <h2>Potential Matches</h2>
      {potentialMatches.map((match) => (
        <div>
          <div key={match._id} className="matchItem">
            <div className="productName">{match.product_name}</div>
            <div className="productName">
              {`${match.requesterDetails?.first_name}
            ${match.requesterDetails?.last_name}`}
            </div>
            <button
              className="viewProfileButton"
              onClick={(event) => handleProfile(match.requesterId, event)}
            >
              View Profile
            </button>
            <button
              className="connectButton"
              onClick={(event) => handleConnect(match._id, event)}
            >
              Connect
            </button>
          </div>
          <div>
            {viewedProfileId === match.requesterId && (
              <UserProfile recentMatches={recentMatches} />
            )}
          </div>
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
