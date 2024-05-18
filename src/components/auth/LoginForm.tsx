import React from "react";
import { Form, FormProps, Button, Input } from "antd";

interface FieldTypes {
    email: string
    password: string
}

const onLogin: FormProps<FieldTypes>['onFinish'] = (values) => {
    console.log(values["email"]);
}

const LoginForm: React.FC = () => {
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