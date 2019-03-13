import React, { Component } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css'
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';


const { Option } = Select;

const AutoCompleteOption = AutoComplete.Option
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


export default class Signup extends Component {
    state={
        user: {},
        auth: {},
        errors:{}
    }
    handleChange = (e) =>{
        let {user, errors} = this.state
        user[e.target.name] = e.target.value 
        if (user.password !== user.password2) {errors.password = "Las contraseñas no coinciden"}
        else{
            this.setState({errors, user})
        }
    }

    sendToServer = (e) =>{
        e.preventDefault()
        let url = "http://localhost:3000/signup"
        let {user} = this.state
        axios.post(url, user)
        .then(data =>{
            console.log(data)
            this.props.history.push('/login')
        })
    }

  render() {
    // const { getFieldDecorator } = this.props.form;
      const errors = this.state
    return (
      <div>
       <h1>Regístrate:</h1>
      {/* <Form {...formItemLayout} onSubmit={this.sendToServer}>
        <Form.Item label="E-mail"> {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
              }],
              })(
                <Input />
                )}
            </Form.Item>

        <Form.Item label="Password"> {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </Form.Item>
        
        <Form.Item label="Confirm Password"> {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item> */}
        <form onSubmit={this.sendToServer}>
       
            <label>Nombre de usuario</label>
            <input onChange= {this.handleChange} type="text" name="username"/>
            <label>Email</label>
            <input onChange= {this.handleChange} type="email" name="email"/>
            <label>Password</label>
            <input onChange= {this.handleChange} type="password" name="password"/>
            <label>Repite tu password</label>
            <input onChange= {this.handleChange} type="password" name="password2"/>
            <label>Ingresa tu RFC</label>
            <input onChange= {this.handleChange} type="text" name="rfc"/>

            <p style={{color:"red"}}>{errors.password}</p>
            <button type="submit">Enviar</button>
        </form>
        {/* </Form> */}
      </div>
    )
  }
}
