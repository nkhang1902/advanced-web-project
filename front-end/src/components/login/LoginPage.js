import {Button, Checkbox, Form, Input, Layout} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import './LoginPage.css'
import {Footer} from "antd/lib/layout/layout";

export function LoginPage() {

    const loginForm = <Form
        name="login"
        // onFinish={onFinish}
        initialValues={{remember: true}}>
        <Form.Item
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please enter your username!',
                },
            ]}>
            <Input
                prefix={<UserOutlined className="site-form-item-icon"/>}
                placeholder="Username"
            />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please enter your password!',
                },
            ]}>
            <Input
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
                placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            Forgot password
            {/*<Link to="/forgot-password">Forgot password</Link>*/}
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>
            register now!
            {/*Or <Link to="/register">register now!</Link>*/}
        </Form.Item>
    </Form>;


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout>
                <Content style={{background: "white"}}>
                    <img
                        className={"content-image"}
                        src="https://img.freepik.com/free-vector/forming-team-leadership-concept-illustration_114360-13973.jpg?w=1380&t=st=1699185991~exp=1699186591~hmac=db5867fc0d5f1c177db04cedad0350055d285bcf7df500586a960e16c2c64390"
                        alt="Login image"/>
                </Content>
                <Footer>
                    <b>HCMUS - Advanced Web Programming Course</b>
                    <br/> Members:
                </Footer></Layout>
            <Sider width={'33%'} class="login-form-container">
                <h1 className="welcome-text">Welcome back!</h1>
                {loginForm}
            </Sider>
        </Layout>
    );
}