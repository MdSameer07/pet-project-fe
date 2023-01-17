import { useEffect } from "react";
import { useNavigate } from "react-router";

export const ProtectedRoute1 = (props) => {
    const { Component } = props;
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('isLoggedIn')
        if (login) {
            navigate('/home')
        }
    })
    return (
        <div><Component /></div>
    )
} 