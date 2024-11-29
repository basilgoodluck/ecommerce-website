import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/authContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page and pass the original location
    return <Navigate to="/sign-in" replace state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
