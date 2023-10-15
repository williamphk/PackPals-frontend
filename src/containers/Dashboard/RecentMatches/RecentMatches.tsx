import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useUser } from "./../../../context/UserContext";
import { getRecentMatches } from "../../../services/user";
import { Match } from "../../../models/Match";

const RecentMatches: React.FC = () => {
  const [recentMatches, setRecentMatches] = useState([] as Match[]);
  const { user } = useUser();

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
      return [
        <li className="text-gray-500 dark:text-gray-300">No matches found</li>,
      ];
    }
    let email: string | undefined;
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      if (match.requesterId === user?.id && match.requesterDetails) {
        match.requesterDetails.first_name = "You";
        match.requesterDetails.last_name = "";
        email = match.requesteeDetails?.email;
      } else if (match.requesteeId === user?.id && match.requesteeDetails) {
        match.requesteeDetails.first_name = "You";
        match.requesteeDetails.last_name = "";
        email = match.requesterDetails?.email;
      }
    }

    return matches.map((match) => (
      <li key={match._id}>
        <p className="text-2xl font-bold">{match.product_name}</p>
        <p>
          Requester: {match.requesterDetails?.first_name}{" "}
          {match.requesterDetails?.last_name}
        </p>
        <p>
          Reqestee: {match.requesteeDetails?.first_name}{" "}
          {match.requesteeDetails?.last_name}
        </p>
        <Link to={`mailto:${email}`}>
          <button className="bg-blue-500 text-white p-2 my-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-150">
            Connect with email
          </button>
        </Link>
      </li>
    ));
  };

  const recentMatchesItems = generateItems(recentMatches);

  return (
    <div className="p-6 dark:bg-gray-900 dark:text-white min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Recent Matches</h2>
      <div className="space-y-6">
        {recentMatchesItems.map((item, index) => (
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

export default RecentMatches;
