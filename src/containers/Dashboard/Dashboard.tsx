import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import { getPotentialMatches, getOngoingMatches } from "../../services/match";
import { Match } from "../../models/Match";
import PotentialMatches from "./PotentialMatches/PotentialMatches";
import NoPotentialMatches from "./NoPotentialMatches/NoPotentialMatches";

const Dashboard: React.FC = () => {
  const [formData, setFormData] = useState({
    product_name: "",
  });

  const [ongoingMatches, setOngoingMatches] = useState([] as Match[]);
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
    if (result.length === 0) {
      setMessage(result as any);
    }
  };

  useEffect(() => {
    const getMatches = async () => {
      const matches = await getOngoingMatches();
      setOngoingMatches(matches);
    };
    getMatches();
  }, []);

  const ongoingMatchesItems = ongoingMatches.map((match) => (
    <li key={match._id}>{match.product_name}</li>
  ));

  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.createMatch}>
        <h2>Create Match</h2>
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
                <li>User name Product name</li>
                <li>User name Product name</li>
                <li>User name Product name</li>
                <li>User name Product name</li>
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
                <li>User name Product name</li>
                <li>User name Product name</li>
                <li>User name Product name</li>
                <li>User name Product name</li>
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
        <NoPotentialMatches message={message} />
      )}
    </div>
  );
};

export default Dashboard;
