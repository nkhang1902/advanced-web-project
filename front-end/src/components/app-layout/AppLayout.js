import {Avatar, Divider, Dropdown, Layout, MenuProps, Row, Space} from "antd";
import {Footer, Header} from "antd/lib/layout/layout";
import React from "react";
import {Content} from "antd/es/layout/layout";
import './AppLayout.css'
import {EditOutlined, LogoutOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import axios from "axios";


export function AppLayout({children}) {
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/logout', {});
            console.log('Log out successfully', response.data);
            navigate("/login")
            // Add any additional logic or redirection after successful logout
        } catch (error) {
            console.error('Error logging in', error.response.data);
            // Handle errors, display messages, etc.
        }
    };

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <EditOutlined></EditOutlined> Edit Profile
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={handleLogout} style={{color: 'red'}}>
                    <LogoutOutlined/> Logout
                </a>
            ),
        },
    ];

    return <Layout style={{minHeight: '100vh'}}>
        <Header className={'header'} shadow>
            <Row style={{minWidth: '100%'}} justify={"space-between"}><Space size={"middle"}>
                <div className={'logo-header-text'}>Lorem Ipsum</div>
                <Divider type={"vertical"} style={{height: "40px"}}/>
                <div className={'search-container'}>
                    <SearchOutlined style={{color: 'grey'}}/>
                    <input className={'search'} placeholder={'Search anything...'}/></div>
            </Space>
                <div>
                    <Dropdown menu={{items}} arrow placement="bottomRight">
                        <Avatar size={"large"} icon={<UserOutlined/>}/>
                    </Dropdown>
                </div>
            </Row>
        </Header>
        <Content style={{backgroundColor: 'white'}}>
            {children}
        </Content>
        <Footer>
            <center><p style={{
                color: "silver",
                textTransform: "uppercase",
                fontFamily: "Poppins",
                fontSize: 12
            }}>
                HCMUS - Advanced Web Programming Course
                <br/>This project is for educational purpose only. All icons, logos and contents used are
                the
                sole properties of their respective owners.
            </p></center>
        </Footer>
    </Layout>;
}