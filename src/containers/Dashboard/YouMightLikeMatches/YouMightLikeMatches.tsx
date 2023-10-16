import React, { useState, useEffect } from "react";

import { getYouMightLikeMatches } from "../../../services/user";
import { getRecentMatchesByReqesterId } from "../../../services/user";
import { acceptMatch } from "../../../services/match";

import { Match } from "../../../models/Match";

import UserProfile from "../../UserProfile/UserProfile";
import MatchAccepted from "../MatchAccepted/MatchAccepted";
import SkeletonMatch from "../SkeletonMatch";

const YouMightLikeMatches: React.FC = () => {
  const [youMightLikeMatches, setYouMightLikeMatches] = useState([] as Match[]);
  const [isMatchAccepted, setIsMatchAccepted] = useState(false);
  const [matchAcceptedMessage, setMatchAcceptedMessage] = useState("");
  const [recentMatches, setRecentMatches] = useState([] as Match[]);
  const [viewedProfileIndex, setViewedProfileIndex] = useState<number | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMatches = async () => {
      const youMightLikeMatches = await getYouMightLikeMatches();
      setYouMightLikeMatches(youMightLikeMatches);
      setIsLoading(false);
    };
    getMatches();
  }, []);

  const generateItems = (matches: Match[]) => {
    if (matches.length === 0) {
      return [
        <li className="text-gray-500 dark:text-gray-300">No matches found</li>,
      ];
    }
    return matches.map((match, index) => (
      <li key={match._id}>
        <p className="text-2xl font-bold">{match.product_name}</p>
        <p className="text-gray-700 dark:text-white">
          Reqester: {match.requesterDetails?.first_name}{" "}
          {match.requesterDetails?.last_name}
        </p>
        <div className="flex space-x-2">
          <button
            className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150"
            onClick={(event) => handleProfile(index, match.requesterId, event)}
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
        {viewedProfileIndex === index && (
          <UserProfile recentMatches={recentMatches} />
        )}
      </li>
    ));
  };

  const youMightLikeMatchesItems = generateItems(youMightLikeMatches);

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
    index: number,
    requesterId: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setViewedProfileIndex(index);
    const result = await getRecentMatchesByReqesterId(requesterId);
    setRecentMatches(result);
  };

  if (isMatchAccepted) {
    return <MatchAccepted message={matchAcceptedMessage} />;
  }

  return (
    <div className="p-6 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-200">
      <h2 className="text-xl font-semibold mb-4">You Might Like</h2>
      {isLoading ? (
        <div className="space-y-6">
          <SkeletonMatch />
          <SkeletonMatch />
          <SkeletonMatch />
          <SkeletonMatch />
          <SkeletonMatch />
          <SkeletonMatch />
        </div>
      ) : (
        <div className="space-y-6">
          {youMightLikeMatchesItems.map((item, index) => (
            <section
              key={index}
              className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700 dark:text-white"
            >
              <ul className="space-y-2">{item}</ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default YouMightLikeMatches;
