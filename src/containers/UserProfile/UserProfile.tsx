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
    <div className="mt-6">
      <section>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          Recent Matches
        </h3>
        <ul className="mt-4">{recentMatchesItems}</ul>
      </section>
    </div>
  );
};

export default UserProfile;
