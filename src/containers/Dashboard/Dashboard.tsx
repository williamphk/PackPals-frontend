import React, { useState, useEffect } from "react";
import { getPotentialMatches } from "../../services/match";
import {
  getOngoingMatches,
  getRecentMatches,
  getYouMightLikeMatches,
} from "../../services/user";
import { Match } from "../../models/Match";
import PotentialMatches from "./PotentialMatches/PotentialMatches";
import NoPotentialMatches from "./NoPotentialMatches/NoPotentialMatches";

const Dashboard: React.FC = () => {
  const [formData, setFormData] = useState({
    product_name: "",
  });

  const [recentMatches, setRecentMatches] = useState([] as Match[]);
  const [ongoingMatches, setOngoingMatches] = useState([] as Match[]);
  const [youMightLike, setYouMightLike] = useState([] as Match[]);
  const [potentialMatches, setPotentialMatches] = useState([] as Match[]);
  const [isDashboardVisible, setIsDashboardVisible] = useState(true);
  const [isPotentialMatchesVisible, setIsPotentialMatchesVisible] =
    useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const result = await getPotentialMatches(formData.product_name);
    setPotentialMatches(result);
    setIsDashboardVisible(false);
    setIsPotentialMatchesVisible(true);
    if (!Array.isArray(result)) {
      setMessage(result);
    }
  };

  useEffect(() => {
    const getMatches = async () => {
      const ongoingMatches = await getOngoingMatches();
      ongoingMatches.splice(5);
      setOngoingMatches(ongoingMatches);
      const recentMatches = await getRecentMatches();
      recentMatches.splice(5);
      setRecentMatches(recentMatches);
      const youMightLike = await getYouMightLikeMatches();
      youMightLike.splice(5);
      setYouMightLike(youMightLike);
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
  const ongoingMatchesItems = generateItems(ongoingMatches);
  const youMightLikeItems = generateItems(youMightLike);

  return (
    <div className="p-6">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Find Matches</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2" htmlFor="product_name">
              Interested Item:
            </label>
            <input
              type="text"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              required
              placeholder="Enter the product or deal you're interested in..."
              className="p-2 w-full border rounded-xl focus:border-blue-500 focus:outline-none"
              id="product_name"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-150"
            >
              Find Matches
            </button>
          </div>
        </form>
      </section>

      {isDashboardVisible && (
        <div className="space-y-6">
          {[
            {
              title: "Recent Matches",
              items: recentMatchesItems,
            },
            {
              title: "Ongoing Matches",
              items: ongoingMatchesItems,
            },
            {
              title: "You Might Like",
              items: youMightLikeItems,
            },
          ].map((section) => (
            <section
              key={section.title}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 mb-4">{section.items}</ul>
              <button className="text-blue-500 focus:outline-none focus:text-blue-600">
                See more
              </button>
            </section>
          ))}
        </div>
      )}

      {isPotentialMatchesVisible && Array.isArray(potentialMatches) && (
        <PotentialMatches
          formData={formData}
          potentialMatches={potentialMatches}
        />
      )}
      {isPotentialMatchesVisible && !Array.isArray(potentialMatches) && (
        <NoPotentialMatches formData={formData} message={message} />
      )}
    </div>
  );
};

export default Dashboard;
