import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/LoginPage.css";
import {baseUrl} from "../../apis/api.config";

function SignUpPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.username.length < 6) {
      setError("Username must be at least 6 characters long");
      return;
    }
    if (formData.password < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    // if (formData.password !== formData.repassword) {
    //   setError("Password and Confirm Password must be the same");
    //   return;
    // }

    // Make a POST request to the signup API
    try {
      const response = await axios.post(
         baseUrl + "api/auth/signup",
        formData
      );

      navigate('/login');
      console.log("Account created successfully:", response.data);
      // Add any additional logic or redirection after successful signup
    } catch (error) {
      console.error("Error creating account:", error.response.data);
      // Handle errors, display messages, etc.
    }
  };
  const handleInputChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout style={{ maxWidth: "66%", minHeight: "100%" }}>
        <Content style={{ position: "relative" }}>
          <img
            className={"login-image"}
            src="https://i.imgur.com/8rAYT95.jpeg"
            alt="Login image"
          />
          <p className="welcome-text-2">Lorem Ipsum</p>
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
              <h1 className="welcome-text">Register</h1>
            </center>
            <h2 style={{ color: "red" }}>{error}</h2>
            <Form name="login" initialValues={{ remember: true }}>
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
                  size="large"
                  onChange={handleInputChange}
                  value={formData.username}
                  minLength={6}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                  },
                ]}
              >
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  size="large"
                  onChange={handleInputChange}
                  value={formData.email}
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
                  minLength={6}
                />
              </Form.Item>
              <Form.Item
                name="repassword"
                rules={[
                  {
                    required: true,
                    message: "Please re-enter your password!",
                  },
                ]}
              >
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  size={"large"}
                  onChange={handleInputChange}
                  value={formData.repassword}
                  minLength={6}
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
                    onClick={handleSignUp}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button bg-royalblue"
                  >
                    <ArrowRightOutlined style={{ fontSize: 20 }} />
                  </Button>
                </Form.Item>
              </center>
            </Form>
          </div>
          <center>
            <Button
              type={"link"}
              className={"secondary-button"}
              onClick={() => navigate("/login")}
            >
              <b>ALREADY REGISTERED?</b>
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

export default SignUpPage;
