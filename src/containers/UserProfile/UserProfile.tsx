import React from "react";
import styles from "./UserProfile.module.css";
import { Match } from "../../models/Match";

interface UserProfileProps {
  recentMatches: Match[];
}

const UserProfile: React.FC<UserProfileProps> = ({ recentMatches }) => {
  const recentMatchesItems = recentMatches.map((match) => (
    <li key={match._id}>{match.product_name}</li>
  ));

  return (
    <div>
      <section className={styles.matchesSection}>
        <div className={styles.matchCategory}>
          <h3>Recent Matches</h3>
          <ul>
            <li>{recentMatchesItems}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
