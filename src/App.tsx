import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header/Header.tsx";
import Dashboard from "./containers/Dashboard/Dashboard.tsx";
import Login from "./containers/Login/Login.tsx";
import Register from "./containers/Register/Register.tsx";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import "./App.css";
import Homepage from "./containers/Homepage/Homepage.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />

            {/* Public Routes */}
            <PublicRoute path="/login" element={<Login />} />
            <PublicRoute path="/register" element={<Register />} />

            {/* Private Routes */}
            <PrivateRoute path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
