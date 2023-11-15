import { Button, Form, Input, Select } from "antd";
import Item from "antd/es/list/Item";
import { Option } from "antd/es/mentions";
import { AppLayout } from "../AppLayout/AppLayout";
import { ArrowRightOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MOCK_DATA = {
  username: "ducanh",
  email: "ducanh123@gmail.com",
  roles: "admin",
};

const UpdateProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if(isAuthenticated !== "1") {
      navigate('/login');
    }
  })

  const [formData, setFormData] = useState({
    username: MOCK_DATA.username,
    email: MOCK_DATA.email,
    roles: MOCK_DATA.admin,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/update-profile",
        formData
      );
      localStorage.setItem("email", formData.email);
      console.log("Updated successfully", response.data);
    } catch (e) {
      console.log("Error updating, ", e);
    }

    console.log("button clicked");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelect = (e) => {
    setFormData((prevData) => ({ ...prevData, roles: e }));

  }
  return (
    <AppLayout>
      <Form
        name="updateProfile"
        initialValues={{ email: MOCK_DATA.email, roles: "user" }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Please enter a valid email!",
            },
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input
            name="email"
            placeholder="email"
            size="large"
            onChange={handleInputChange}
            value={formData.email}
          />
        </Form.Item>

        <Form.Item
          label="Role"
          name="roles"
          rules={[
            {
              required: true,
              message: "Please select a roles!",
            },  
          ]}
        >
          <Select
            name="roles"
            defaultValue="user"
            style={{ width: 120 }}
            onChange={handleSelect}
            options={[
              { value: "user", label: "User" },
              { value: "admin", label: "Admin" },
            ]}
          />
        </Form.Item>

        <center>
          <Form.Item>
            <Button onClick={handleSubmit} type="dashed" htmlType="submit">
              Save changes
            </Button>
          </Form.Item>
        </center>
      </Form>
    </AppLayout>
  );
};

export default UpdateProfile;
