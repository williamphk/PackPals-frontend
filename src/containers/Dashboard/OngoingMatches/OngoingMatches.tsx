import React, { useState, useEffect } from "react";
import { getOngoingMatches } from "../../../services/user";
import { Match } from "../../../models/Match";
import { deleteMatch } from "../../../services/match";
import MatchDeleted from "../MatchDeleted/MatchDeleted";

const OngoingMatches: React.FC = () => {
  const [ongoingMatches, setOngoingMatches] = useState([] as Match[]);
  const [isMatchDeleted, setIsMatchDeleted] = useState(false);
  const [matchDeletedMessage, setMatchDeletedMessage] = useState("");

  useEffect(() => {
    const getMatches = async () => {
      const ongoingMatches = await getOngoingMatches();
      setOngoingMatches(ongoingMatches);
    };
    getMatches();
  }, []);

  const generateItems = (matches: Match[]) => {
    if (matches.length === 0) {
      return [
        <li className="text-gray-500 dark:text-gray-300">No matches found</li>,
      ];
    }
    return matches.map((match) => (
      <li key={match._id} className="flex justify-between">
        <p className="text-2xl font-bold">{match.product_name}</p>
        <button
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150"
          onClick={(event) => handleDelete(match._id, event)}
        >
          Delete
        </button>
      </li>
    ));
  };

  const handleDelete = async (
    matchId: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const result = await deleteMatch(matchId);
    setMatchDeletedMessage(result.message);
    setIsMatchDeleted(true);
  };

  if (isMatchDeleted) {
    return <MatchDeleted message={matchDeletedMessage} />;
  }

  const ongoingMatchesItems = generateItems(ongoingMatches);

  return (
    <div className="p-6 dark:bg-gray-900 dark:text-white min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Ongoing Matches</h2>
      <div className="space-y-6">
        {ongoingMatchesItems.map((item, index) => (
          <section
            key={index}
            className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700 dark:text-white"
          >
            <ul className="space-y-2">{item}</ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default OngoingMatches;
