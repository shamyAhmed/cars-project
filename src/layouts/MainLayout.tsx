import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
    return (
        <div className="h-screen w-screen overscroll-x-none bg-slate-100">
            <Outlet />
        </div>
    )
};

export default RootLayout;