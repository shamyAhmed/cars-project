import React from "react";
import { Card, Form, FormProps, Button, Input } from "antd";

interface FieldTypes {
    email: string
    password: string
}

const onLogin: FormProps<FieldTypes>['onFinish'] = (values) => {
    console.log(values["email"]);
}

const LoginPage: React.FC = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Card
                className="min-h-96 min-w-96 border shadow-lg shadow-gray-400"
                title="تسجيل الدخول"
            >
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
            </Card>
        </div>
    )
}

export default LoginPage;