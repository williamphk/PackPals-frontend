import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

interface PublicRouteProps {
  path: string;
  element: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element, path }) => {
  let { user } = useUser();
  let navigate = useNavigate();

  if (user) {
    navigate("/dashboard");
    return null;
  }

  return <Route path={path} element={element} />;
};

export default PublicRoute;
