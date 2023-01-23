import React from 'react'
import { Link } from "react-router-dom"
import { HomeOutlined, MenuOutlined, BulbOutlined, MoneyCollectOutlined, FundOutlined } from "@ant-design/icons"
import { Typography, Button, Menu, Avatar } from 'antd'

const NavBar = () => {
    return (
        <div>
            <div>
                <Avatar src={"https://source.unsplash.com/random?crypto"} size={"large"}></Avatar>
                <Typography.Title level={2}>
                    <Link to={"/"}>Crypto App</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined></HomeOutlined>}>
                    <Link to={"/"}>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined></FundOutlined>}>
                    <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined></MoneyCollectOutlined>}>
                    <Link to={"/exchanges"}>Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined></BulbOutlined>}>
                    <Link to={"/news"}>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavBar