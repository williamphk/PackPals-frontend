import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../../context/SocketContext";

import { createMatch, acceptMatch } from "../../../services/match";
import { getRecentMatchesByReqesterId } from "../../../services/user";

import { Match } from "../../../models/Match";

import UserProfile from "../../UserProfile/UserProfile";
import MatchHosted from "../MatchHosted/MatchHosted";
import MatchAccepted from "../MatchAccepted/MatchAccepted";
import SkeletonMatch from "../SkeletonMatch";

interface PotentialMatchesProps {
  formData: {
    product_name: string;
  };
  potentialMatches: Match[];
  isLoading: boolean;
}

const PotentialMatches: React.FC<PotentialMatchesProps> = ({
  formData,
  potentialMatches,
  isLoading,
}) => {
  const navigate = useNavigate();
  const socket = useSocket();

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
    if (socket) {
      console.log("emitting requestAccepted");
      socket.emit("requestAccepted", {
        requestId: "REQUEST_ID",
        requesterId: "REQUESTER_ID",
      });
    }

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

  const handleHomeButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-200">
        <h2 className="text-2xl font-semibold mb-4">Potential Matches</h2>
        <SkeletonMatch />
        <SkeletonMatch />
        <SkeletonMatch />
        <SkeletonMatch />
        <SkeletonMatch />
        <SkeletonMatch />
      </div>
    );
  }

  if (isMatchAccepted) {
    return <MatchAccepted message={matchAcceptedMessage} />;
  }

  if (isMatchHosted) {
    return <MatchHosted message={matchHostedMessage} />;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-200">
      <h2 className="text-2xl font-semibold mb-4">Potential Matches</h2>
      {potentialMatches.map((match) => (
        <div
          key={match._id}
          className="bg-white p-6 rounded-xl shadow-md mb-4 flex flex-col dark:bg-gray-700"
        >
          <h3 className="text-3xl font-bold mb-2">{match.product_name}</h3>
          <p className="text-gray-700 mb-4 dark:text-white">
            {match.requesterDetails?.first_name}{" "}
            {match.requesterDetails?.last_name}
          </p>
          <div className="flex space-x-2">
            <button
              className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150"
              onClick={(event) => handleProfile(match.requesterId, event)}
            >
              View Profile
            </button>
            <button
              className="py-1 px-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-150"
              onClick={(event) => handleConnect(match._id, event)}
            >
              Connect
            </button>
          </div>
          {viewedProfileId === match.requesterId && (
            <UserProfile recentMatches={recentMatches} />
          )}
        </div>
      ))}
      <div className="flex gap-x-2">
        <button
          className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-800 transition duration-150"
          onClick={handleHostMatch}
        >
          Host a match
        </button>

        <button
          className="py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-600 transition duration-150"
          type="submit"
          onClick={handleHomeButton}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PotentialMatches;
