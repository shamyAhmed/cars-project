import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { selectIsLogged } from "../../store/userSlice";

const UnAuthedOnly: React.FC = () => {
    const navigate = useNavigate();
    const isLogged = useAppSelector(selectIsLogged);

    useEffect(() => {
        if(isLogged) {
            navigate("/");
        }
    }, [isLogged, navigate])

    if(isLogged) {
        return null;
    }

    return (
        <Outlet />
    )
}

export default UnAuthedOnly