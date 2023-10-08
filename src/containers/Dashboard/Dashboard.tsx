import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.createMatch}>
        <h2>Create Match</h2>
        <div className={styles.inputGroup}>
          <label>Interested Item:</label>
          <input
            type="text"
            placeholder="Enter the product or deal you're interested in..."
          />
          <button>Find Matches</button>
        </div>
      </section>

      <section className={styles.matchesSection}>
        <div className={styles.matchCategory}>
          <h3>Newly Matched</h3>
          <ul>
            <li>User name</li>
            <li>User name</li>
            <li>User name</li>
            <li>User name</li>
          </ul>
          <button>See more</button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
