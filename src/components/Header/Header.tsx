import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { isAuthenticated, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>Logo</div>
        </Link>
        <div className={styles.authButtons}>
          {isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <div>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
