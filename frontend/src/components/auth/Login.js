import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css'
import {Form, Icon, Input, Button } from 'antd';



class NormalLoginForm extends Component {
  state={
    auth: {},
    user:{}
  }

  handleChange = (e) =>{
    let {auth} = this.state
    auth[e.target.name] = e.target.value
    console.log(auth)
    this.setState = ({auth})
  }

  sendToServer = (e) =>{
    e.preventDefault()
      let url= `${process.env.REACT_APP_API_URL}/login`
      let {auth} = this.state
      console.log(auth)
      axios.post(url, auth, {withCredentials: true})
        .then(data =>{
          console.log('The data was send', data)
          this.props.catched(data)
          this.props.history.push('/profile')
        })
        .catch(e => console.log(e))
  } 

  render () {
    const { getFieldDecorator } = this.props.form
    return(
    <Form onSubmit={this.sendToServer} className="login-form">
    <div className="back-log">
    <h2 style={{backgroundColor: "rgba(20, 20, 20, 0.76)", color:"white", height:"50px"}} title="Inicia sesión">Inicia sesión</h2>
    <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Ingresa tu email' }],
          })(
            <Input onChange= {this.handleChange} name="email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Ingresa tu contraseña' }],
          })(
            <Input.Password onChange= {this.handleChange} name="password" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
          )}
        </Form.Item>
        <Form.Item> 
          <Button ghost htmlType="submit">
            Iniciar sesión
          </Button>
          <NavLink style={{color: "white"}}to="/signup">¿Aún no estás registrado?</NavLink>
        </Form.Item>
        </div>
    </Form>
 )}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)
export default WrappedNormalLoginForm


