import { EditOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect } from "react";
import { AppLayout } from "../AppLayout/AppLayout";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if(isAuthenticated !== "1") {
      navigate('/login');
    }
  })
 
  const username = "hello";

  return (
    <AppLayout>
        <center>
        <Card
        style={{ width: 500 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[<EditOutlined key="edit" />]}
      >
        <Meta title={`Username: ${username}`} />
        <Meta title={`Email: ${username}`} />
        <Meta title={`Role: ${username}`} />
      </Card>
        </center>
    
    </AppLayout>
  );
}

export default HomePage;
