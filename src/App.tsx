import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useUser } from "./context/UserContext";

import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";

import Homepage from "./containers/Homepage/Homepage.tsx";
import About from "./containers/About/About.tsx";
import Register from "./containers/Register/Register.tsx";
import Login from "./containers/Login/Login.tsx";
import Dashboard from "./containers/Dashboard/Dashboard.tsx";
import RecentMatches from "./containers/Dashboard/RecentMatches/RecentMatches.tsx";
import YouMightLikeMatches from "./containers/Dashboard/YouMightLikeMatches/YouMightLikeMatches.tsx";
import OngoingMatches from "./containers/Dashboard/OngoingMatches/OngoingMatches.tsx";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App: React.FC = () => {
  const { isAuthenticated, setUser } = useUser();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUser(parsedUser);
    }
    setAuthLoading(false);
  }, [setUser]);

  return (
    <Router>
      {authLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {isAuthenticated && <Sidebar />}
          <div className={`${isAuthenticated ? "md:ml-60 sm:pl-4" : ""}`}>
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

                <Route path="/about" element={<About />} />

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

                <Route
                  path="/recent-matches"
                  element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                      <RecentMatches />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/you-might-like"
                  element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                      <YouMightLikeMatches />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/ongoing-matches"
                  element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                      <OngoingMatches />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </>
      )}
    </Router>
  );
};

export default App;
