import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { createMatch } from "../../services/match";

const Dashboard: React.FC = () => {
  const [formData, setFormData] = useState({
    product_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createMatch(formData);
  };

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
          <ul>
            <li>Product name</li>
            <li>Product name</li>
            <li>Product name</li>
            <li>Product name</li>
          </ul>
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
  );
};

export default Dashboard;
