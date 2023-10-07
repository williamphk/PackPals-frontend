import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { useUser } from "./context/UserContext";

import Header from "./components/Header/Header.tsx";
import Homepage from "./containers/Homepage/Homepage.tsx";
import Register from "./containers/Register/Register.tsx";
import Login from "./containers/Login/Login.tsx";
import Dashboard from "./containers/Dashboard/Dashboard.tsx";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import "./App.css";

const App: React.FC = () => {
  const { isAuthenticated } = useUser();

  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Header />
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
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
