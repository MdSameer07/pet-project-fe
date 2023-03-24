import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute2 = ({ children }) => {
    const location = useLocation();
    const login1 = localStorage.getItem('userLoggedIn')
    const login2 = localStorage.getItem('adminLoggedIn')
    if (login1 || login2) {
        return <Navigate to="/home" state={{ path: location.pathname }} />;
    }
    return children;
};