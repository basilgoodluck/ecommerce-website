import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/authContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to sign-in if not authenticated
    return <Navigate to="/sign-in" replace />;
  }

  // Render the protected route content if authenticated
  return children;
};

export default ProtectedRoute;
