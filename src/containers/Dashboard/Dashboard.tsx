import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import { getPotentialMatches } from "../../services/match";
import {
  getOngoingMatches,
  getRecentMatches,
  getYouMightLike,
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
      setOngoingMatches(ongoingMatches);
      const recentMatches = await getRecentMatches();
      setRecentMatches(recentMatches);
      const youMightLike = await getYouMightLike();
      setYouMightLike(youMightLike);
    };
    getMatches();
  }, []);

  const recentMatchesItems = recentMatches.map((match) => (
    <li key={match._id}>{match.product_name}</li>
  ));

  const ongoingMatchesItems = ongoingMatches.map((match) => (
    <li key={match._id}>{match.product_name}</li>
  ));

  const youMightLikeItems = youMightLike.map((match) => (
    <li key={match._id}>{match.product_name}</li>
  ));

  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.createMatch}>
        <h2>Find Matches</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Interested Item:</label>
            <input
              type="text"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              required
              placeholder="Enter the product or deal you're interested in..."
            />
            <button type="submit">Find Matches</button>
          </div>
        </form>
      </section>

      {isDashboardVisible && (
        <div>
          <section className={styles.matchesSection}>
            <div className={styles.matchCategory}>
              <h3>Recent Matches</h3>
              <ul>
                <li>{recentMatchesItems}</li>
              </ul>
              <button>See more</button>
            </div>
          </section>

          <section className={styles.matchesSection}>
            <div className={styles.matchCategory}>
              <h3>Ongoing Matches</h3>
              <ul>{ongoingMatchesItems}</ul>
              <button>See more</button>
            </div>
          </section>

          <section className={styles.matchesSection}>
            <div className={styles.matchCategory}>
              <h3>You Might Like</h3>
              <ul>
                <li>{youMightLikeItems}</li>
              </ul>
              <button>See more</button>
            </div>
          </section>
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
