import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import {baseUrl} from "../../apis/api.config";
function LoginPage() {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleLogIn = async (e) => {
    e.preventDefault();

    // Make a POST request to the signup API
    try {
      const response = await axios.post(
        baseUrl+ "api/auth/login",
        formData
      );
      console.log("Log in successfully", response.data);
      navigate("/");
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email", response.data.email);

      // Add any additional logic or redirection after successful signup
    } catch (error) {
      console.error("Error logging in", error.response.data);
      setError("Username or password is incorrect");
      // Handle errors, display messages, etc.
    }
  };
  const handleInputChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const loginForm = (
    <Form name="login" initialValues={{ remember: true }}>
      <div style={{ color: "red" }}>{error}</div>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please enter your username!",
          },
        ]}
      >
        <Input
          name="username"
          placeholder="Username"
          size={"large"}
          onChange={handleInputChange}
          value={formData.username}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
        ]}
      >
        <Input
          name="password"
          type="password"
          placeholder="Password"
          size={"large"}
          onChange={handleInputChange}
          value={formData.password}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>
      <center>
        <Form.Item>
          <Button
            onClick={handleLogIn}
            type="primary"
            htmlType="submit"
            className="login-form-button bg-royalblue"
          >
            <ArrowRightOutlined style={{ fontSize: 20 }} />
          </Button>
        </Form.Item>
      </center>
    </Form>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout style={{ maxWidth: "66%", minHeight: "100%" }}>
        <Content style={{ position: "relative" }}>
          <img
            className={"login-image"}
            src="https://i.imgur.com/8rAYT95.jpeg"
            alt="Login image"
          />
          <p className="welcome-text-2">Welcome to AWP</p>
        </Content>
      </Layout>
      <Sider width={"33%"} class="login-form-container">
        <Flex
          vertical
          justify={"space-between"}
          style={{ minHeight: "100%", padding: "10% 10% 0" }}
        >
          <div>
            <center>
              <h1 className="welcome-text">Login</h1>
            </center>
            {loginForm}
          </div>
          <center>
            <Button type={"link"} className={"secondary-button"}>
              <b>COULD NOT LOGIN?</b>
            </Button>
            <br />
            <Button
              type={"link"}
              className={"secondary-button"}
              onClick={() => navigate("/signup")}
            >
              <b>CREATE A NEW ACCOUNT</b>
            </Button>
            <p
              style={{
                color: "silver",
                textTransform: "uppercase",
                fontFamily: "Poppins",
                fontSize: 12,
              }}
            >
              HCMUS - Advanced Web Programming Course
              <br />
              This project is for educational purpose only. All icons, logos and
              contents used are the sole properties of their respective owners.
            </p>
          </center>
        </Flex>
      </Sider>
    </Layout>
  );
}

export default LoginPage;
