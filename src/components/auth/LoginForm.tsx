import React from "react";
import { Form, FormProps, Button, Input } from "antd";
import { useAppDispatch } from "../../hooks/redux";
import { login } from "../../store/userSlice";
import { User } from "../../store/types/user";

interface FieldTypes {
    email: string
    password: string
}


const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const onLogin: FormProps<FieldTypes>['onFinish'] = (values) => {
        const userObj: User = {
            email: values["email"],
            name: "Ahmed elshamy",
            role: "Admin",
            token: "Bearer sometoken"
        };
        window.localStorage.setItem("currentLoggedInUser", JSON.stringify(userObj));    
        dispatch(login(userObj));
    };
    return (
        <div>
            <Form
                onFinish={onLogin}
            >
                <Form.Item 
                    name="email"
                    label="البريد الإلكتروني"
                    rules={[
                        {
                            required: true,
                            message: "يرجى إدخال البريد الالكتروني"
                        },
                        {
                            type: "email",
                            message: "يرجى التأكد من صيغة البريد الإلكتروني"
                        }
                    ]}
                    labelCol={{ span: 24 }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="كلمة المرور"                        
                    rules={[
                        {
                            required: true,
                            message: "يرجى إدخال كلمة المرور"
                        }
                    ]}
                    labelCol={{ span: 24 }}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item className="mt-auto">
                    <Button type="primary" htmlType="submit">
                        تسجيل الدخول
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginForm;