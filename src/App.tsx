import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useUser } from "./context/UserContext";

import Header from "./components/Header/Header.tsx";
import Homepage from "./containers/Homepage/Homepage.tsx";
import Register from "./containers/Register/Register.tsx";
import Login from "./containers/Login/Login.tsx";
import Dashboard from "./containers/Dashboard/Dashboard.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App: React.FC = () => {
  const { isAuthenticated, setUser } = useUser();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUser(parsedUser);
    }
  }, [setUser]);

  return (
    <Router>
      {isAuthenticated && <Sidebar />}
      <div className={`${isAuthenticated ? "ml-60 pl-4" : ""}`}>
        <Header />
        <main className="min-h-[80vh]">
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute isAuthenticated={isAuthenticated}>
                  <Homepage />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute isAuthenticated={isAuthenticated}>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute isAuthenticated={isAuthenticated}>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
