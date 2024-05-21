import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { navBarLinks } from "../constants";

type MenuItem = Required<MenuProps>['items'][number];

const HomeLayout: React.FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const menuItems: MenuItem[] = navBarLinks.map(item => ({
        label: item.name,
        key: item.path,
        onClick() {
            navigate(item.path)
        }
    }));

    return (
        <div className="h-screen flex flex-col gap-4">
            <Menu className="px-12 font-bold line-" items={menuItems} activeKey={pathname} mode="horizontal" />
            <div className="px-12 flex-1">
                <Outlet />
            </div>
        </div>
    )
};

export default HomeLayout;