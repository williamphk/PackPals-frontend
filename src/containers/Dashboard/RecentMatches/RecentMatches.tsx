import React, { useState, useEffect } from "react";
import { getRecentMatches } from "../../../services/user";
import { Match } from "../../../models/Match";

const RecentMatches: React.FC = () => {
  const [recentMatches, setRecentMatches] = useState([] as Match[]);

  useEffect(() => {
    const getMatches = async () => {
      const recentMatches = await getRecentMatches();
      setRecentMatches(recentMatches);
    };
    getMatches();
  }, []);

  const generateItems = (matches: Match[]) => {
    if (matches.length === 0) {
      return [<li className="text-gray-500">No matches found</li>];
    }
    return matches.map((match) => (
      <li key={match._id}>{match.product_name}</li>
    ));
  };

  const recentMatchesItems = generateItems(recentMatches);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Matches</h2>
      <div className="space-y-6">
        {recentMatchesItems.map((item) => (
          <section
            key="Recent Matches"
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <ul className="space-y-2 mb-4">{item}</ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default RecentMatches;
