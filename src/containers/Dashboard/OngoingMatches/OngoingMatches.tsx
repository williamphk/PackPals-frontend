import React, { useState, useEffect } from "react";
import { getOngoingMatches } from "../../../services/user";
import { Match } from "../../../models/Match";

const OngoingMatches: React.FC = () => {
  const [ongoingMatches, setOngoingMatches] = useState([] as Match[]);

  useEffect(() => {
    const getMatches = async () => {
      const ongoingMatches = await getOngoingMatches();
      setOngoingMatches(ongoingMatches);
    };
    getMatches();
  }, []);

  const generateItems = (matches: Match[]) => {
    if (matches.length === 0) {
      return [<li className="text-gray-500">No matches found</li>];
    }
    return matches.map((match) => (
      <li key={match._id}>
        <p className="text-2xl font-bold">{match.product_name}</p>
      </li>
    ));
  };

  const ongoingMatchesItems = generateItems(ongoingMatches);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Ongoing Matches</h2>
      <div className="space-y-6">
        {ongoingMatchesItems.map((item, index) => (
          <section key={index} className="bg-white p-6 rounded-xl shadow-md">
            <ul className="space-y-2 mb-4">{item}</ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default OngoingMatches;
