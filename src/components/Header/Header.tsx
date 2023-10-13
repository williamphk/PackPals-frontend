import React from "react";
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
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 hover:text-gray-600"
        >
          PackPals
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Logout
            </button>
          ) : (
            <div className="flex space-x-4">
              <Link to="/login">
                <button className="border border-gray-500 text-gray-500 px-5 py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
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
