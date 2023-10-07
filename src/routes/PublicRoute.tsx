import { Navigate, useLocation } from "react-router-dom";

interface PublicRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
  fallback?: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  isAuthenticated,
  fallback = "/dashboard",
}) => {
  return !isAuthenticated ? children : <Navigate to={fallback} />;
};

export default PublicRoute;
