import React from 'react';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Menu, Layout } from 'antd';

const { Header} = Layout;

const Navbar = (props) => {
  if (props.isLogged){
    return (
      <Header className="Navbar">
      <Menu defaultSelectedKeys={['2']}  mode="horizontal" theme="dark" style={{ lineHeight : "60px"}}>
      <Menu.Item key="1"><Link to='/profile'>Perfil</Link></Menu.Item>
      <Menu.Item key="2"><Link to='/logout'>Cerrar sesión</Link></Menu.Item>
      <Menu.Item key="3"><Link to='/'>Home</Link></Menu.Item>
      </Menu>
      </Header>
    )
  }else {
    return(
    <Header className="Navbar">
    <Menu defaultSelectedKeys={['2']}  mode="horizontal" theme="dark" style={{ lineHeight : "60px"}}>
    <Menu.Item key="1"><Link to='/login'>Login</Link></Menu.Item>
    <Menu.Item key="2"><Link to='/signup'>Signup</Link></Menu.Item>
    <Menu.Item key="3"><Link to='/'>Home</Link></Menu.Item>
    </Menu>
    </Header>
  )}
   

 
}

export default Navbar