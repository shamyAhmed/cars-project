import React, { useEffect } from "react";
import { selectIsLogged } from "../../store/userSlice";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes: React.FC = () => {
    const isLogged = useSelector(selectIsLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogged) {
            navigate("/auth/login")
        }
    }, [isLogged, navigate])

    if (!isLogged) {
        return null;
    }

    return (
        <>
            <Outlet />
        </>
    )
};

export default ProtectedRoutes;