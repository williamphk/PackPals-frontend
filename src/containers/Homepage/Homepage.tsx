import React from "react";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.mainContent}>
        <h1 className={styles.headline}>Headline</h1>
        <p className={styles.supportingHeadline}>Supporting headline</p>
        <Link to="/register">
          <button className={styles.signupButton}>Signup Now</button>
        </Link>
        <div className={styles.screenshot}>Platform Screenshot</div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureBox}></div>
          <p>Description</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureBox}></div>
          <p>Description</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureBox}></div>
          <p>Description</p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
