import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.authButtons}>
          <button>Login</button>
          <button>Signup</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
