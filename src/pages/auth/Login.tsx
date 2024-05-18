import React from "react";
import { Card } from "antd";
import LoginForm from "../../components/auth/LoginForm";
import { mainColor } from "../../constants";
import logoImage from "../../assets/logo.png"


const CardTitle: React.FC = () => {
    return (
        <div className="flex justify-between items-center text-white">
            <p>تسجيل الدخول</p>
            <img src={logoImage} height={120} width={150} alt="logo" />
        </div>
    )
}

const LoginPage: React.FC = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Card
                className=" md:min-h-96 sm:min-w-96 border shadow-lg shadow-gray-400"
                title={<CardTitle />}
                headStyle={{
                    backgroundColor: mainColor,
                    fontWeight: "bold"
                }}
            >
                <LoginForm />
            </Card>
        </div>
    )
}

export default LoginPage;