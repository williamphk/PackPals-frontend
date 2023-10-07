import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>Logo</div>
        </Link>
        <div className={styles.authButtons}>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
