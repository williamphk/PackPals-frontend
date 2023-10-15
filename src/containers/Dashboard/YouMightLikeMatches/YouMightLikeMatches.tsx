import React, { useState, useEffect } from "react";
import { getYouMightLikeMatches } from "../../../services/user";
import { Match } from "../../../models/Match";

const YouMightLikeMatches: React.FC = () => {
  const [youMightLikeMatches, setYouMightLikeMatches] = useState([] as Match[]);

  useEffect(() => {
    const getMatches = async () => {
      const youMightLikeMatches = await getYouMightLikeMatches();
      setYouMightLikeMatches(youMightLikeMatches);
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
        <p className="text-gray-700">
          Reqester: {match.requesterDetails?.first_name}{" "}
          {match.requesterDetails?.last_name}
        </p>
      </li>
    ));
  };

  const youMightLikeMatchesItems = generateItems(youMightLikeMatches);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">You Might Like</h2>
      <div className="space-y-6">
        {youMightLikeMatchesItems.map((item) => (
          <section
            key="YouMightLike Matches"
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <ul className="space-y-2 mb-4">{item}</ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default YouMightLikeMatches;
