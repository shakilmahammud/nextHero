import React from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import  {
    AiOutlineLogin,
    AiOutlineUserAdd,
    AiFillHome
}  from "react-icons/ai";


const {  Item } = Menu;

const TopNav = () => {
    return (
        <Menu mode="horizontal">
            <Item icon={<AiFillHome/>}>
                <Link href="/">
                    <a>App</a>
                </Link>
            </Item>
            <Item icon={<AiOutlineLogin/>}>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </Item>
            <Item icon={<AiOutlineUserAdd/>}>
                <Link href="/register">
                    <a>register</a>
                </Link>
            </Item>
        </Menu>
    )
}

export default TopNav;