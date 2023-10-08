import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span>PackPals</span>
      <span>About</span>
      <span>Term of Use</span>
      <span>Privacy</span>
      <span>Copyright</span>
    </footer>
  );
};

export default Footer;
