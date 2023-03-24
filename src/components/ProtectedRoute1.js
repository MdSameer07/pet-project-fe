import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute1 = ({ children }) => {
  const location = useLocation();
  const login = localStorage.getItem('userLoggedIn')
  if (!login) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return children;
};