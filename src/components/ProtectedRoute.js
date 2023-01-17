import { useEffect } from "react";
import { useNavigate } from "react-router";

export const ProtectedRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate()
    useEffect(() => {
        const login = localStorage.getItem('isLoggedIn')
        if (!login) {
            navigate('/')
        }
    })
    return (
        <Component />
    )
} 