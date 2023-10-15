import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePage } from "../context/PageContext";

const NavigationHandler: React.FC = () => {
  const location = useLocation();
  const { setPage } = usePage();

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath.includes("/dashboard")) {
      setPage("dashboard");
    } else if (currentPath.includes("/recent-matches")) {
      setPage("recent-matches");
    } else if (currentPath.includes("/ongoing-matches")) {
      setPage("ongoing-matches");
    } else if (currentPath.includes("/you-might-like")) {
      setPage("you-might-like");
    }
  }, [location]);

  return null;
};

export default NavigationHandler;
