import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css'
import {Form, Icon, Input, Button, PageHeader} from 'antd';



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
      let url= "http://localhost:3000/login"
      let {auth} = this.state
      console.log(auth)
      axios.post(url, auth, {WithCredentials: true})
        .then(data =>{
          console.log('The data was send', data)
          this.props.history.push('/profile')
        })
        .catch(e => console.log(e))
  } 

  render () {
    const { getFieldDecorator } = this.props.form
    return(
    <div>
    <Form onSubmit={this.sendToServer} className="login-form">
    <PageHeader title="Inicia sesión" />
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
            <Input.Password onChange= {this.handleChange} name="password" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
          )}
        </Form.Item>
        <Form.Item> 
          <Button type="primary" htmlType="submit" className="btn-login">
            Iniciar sesión
          </Button>
          <NavLink to="/signup">¿Aún no estás registrado?</NavLink>
        </Form.Item>
    </Form>
    </div>
 )}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)
export default WrappedNormalLoginForm


//getFieldDecorator = of undefined 