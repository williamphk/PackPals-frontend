import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const { isAuthenticated, setUser, user } = useUser();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setUser(null);
    if (theme === "dark") {
      toggleTheme();
    }
    navigate("/login");
  };

  return (
    <header className="bg-white text-gray-800 shadow-md mb-0.5 dark:bg-gray-950 dark:text-white transition-colors duration-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold hover:text-gray-600 items-center gap-2 flex"
        >
          <img src={logo} height={50} width={50} alt="PackPals Logo" />
          <h1 className="hidden sm:block">PackPals</h1>
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-x-8">
              <div className="whitespace-nowrap">
                {user?.first_name} {user?.last_name}
              </div>
              <button>Notification</button>
              <button
                onClick={toggleTheme}
                className="w-full text-dark dark:text-white flex"
              >
                {theme === "light" ? (
                  <span className="material-symbols-outlined">dark_mode</span>
                ) : (
                  <span className="material-symbols-outlined">light_mode</span>
                )}
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link to="/login">
                <button className="border border-gray-500 text-gray-500 px-5 py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
