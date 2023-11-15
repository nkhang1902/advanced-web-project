import {
  EditOutlined,
  LogoutOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Divider, Dropdown, Layout, Row, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import { Footer, Header } from "antd/lib/layout/layout";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AppLayout.css";

export function AppLayout({ children }) {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/logout",
        {}
      );
      console.log("Log out successfully", response.data);
      localStorage.setItem("isAuthenticated", "0");
      navigate("/login");
      // Add any additional logic or redirection after successful logout
    } catch (error) {
      console.error("Error logging in", error.response.data);
      // Handle errors, display messages, etc.
    }
  };

  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/update-profile">
          <EditOutlined></EditOutlined> Update Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLogout}
          style={{ color: "red" }}
        >
          <LogoutOutlined /> Logout
        </a>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className={"header"} shadow>
        <Row style={{ minWidth: "100%" }} justify={"space-between"}>
          <Space size={"middle"}>
            <a href="/">
              <div className={"logo-header-text"}>AWP</div>
            </a>
            <Divider type={"vertical"} style={{ height: "40px" }} />
            <div className={"search-container"}>
              <SearchOutlined style={{ color: "grey" }} />
              <input className={"search"} placeholder={"Search anything..."} />
            </div>
          </Space>
          <div>
          {username && <span className="mr-2 font-bold">Hello {username}</span>}

            <Dropdown menu={{ items }} arrow placement="bottomRight">
              <Avatar size={"large"} icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Row>
      </Header>
      <Content style={{ backgroundColor: "white" }}>{children}</Content>
      <Footer>
        <center>
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
      </Footer>
    </Layout>
  );
}
