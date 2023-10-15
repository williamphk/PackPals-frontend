import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecentMatches } from "../../../services/user";
import { Match } from "../../../models/Match";

const RecentMatches: React.FC = () => {
  const [recentMatches, setRecentMatches] = useState([] as Match[]);

  useEffect(() => {
    const getMatches = async () => {
      const recentMatches = await getRecentMatches();
      setRecentMatches(recentMatches);
      console.log(recentMatches);
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
          Reqestee: {match.requesteeDetails?.first_name}{" "}
          {match.requesteeDetails?.last_name}
        </p>
        <Link to={`mailto:${match.requesteeDetails?.email}`}>
          <button className="bg-blue-500 text-white p-2 my-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-150">
            Connect with email
          </button>
        </Link>
      </li>
    ));
  };

  const recentMatchesItems = generateItems(recentMatches);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Matches</h2>
      <div className="space-y-6">
        {recentMatchesItems.map((item, index) => (
          <section key={index} className="bg-white p-6 rounded-xl shadow-md">
            <ul className="space-y-2">{item}</ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default RecentMatches;
