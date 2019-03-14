import React, { Component } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css'
import {Form, Input, Icon,  Button, } from 'antd';
import {NavLink} from 'react-router-dom'



export default class Signup extends Component {
    state={
        user: {},
        auth: {},
        profilePic:{},
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

     handleImageChange = (e) => {
      let { profilePic } = this.state
      profilePic = e.target.files[0] 
      this.setState({profilePic})
    }

    sendToServer = (e) =>{
        e.preventDefault()
        let {user, profilePic} = this.state
        console.log(user)
        let url = 'http://localhost:3000/signup'
        const formData = new FormData()		
        for(let key in user){
            formData.append(key, user[key])
        }
        formData.append("picture", profilePic)
        let serviceUpload = axios.create({url, withCredentials: true})
        return serviceUpload.post(url, formData, {
            headers: {
                'Content-type': 'multipart/form-data',
            }
        })
        .then(res => {
            console.log(res)
            this.props.history.push('/login')
            
        })
            .catch(e => console.log(e))
    }
      	
   

  render() {
    return (
        <div>
      <Form  className="signup-form">
      <div className="back-sign">
       <h2 style={{backgroundColor: "rgba(20, 20, 20, 0.76)", color:"white", height:"50px"}} >Regístrate:</h2>
       <Form.Item>
            <Input onChange= {this.handleChange} name="username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ingresa tu nombre de usuario" />
        </Form.Item>
       <Form.Item>
            <Input onChange= {this.handleChange} name="email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ingresa tu correo" />
        </Form.Item>
        <Form.Item>
            <Input.Password onChange= {this.handleChange} name="password" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ingresa contraseña" />
        </Form.Item>
        <Form.Item>
            <Input.Password onChange= {this.handleChange} name="password2" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirma contraseña" />
        </Form.Item>
            <Input onChange= {this.handleImageChange} name="profilePic" type="file" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        <Form.Item>
            <Input onChange={this.handleChange} placeholder="Your phone number" name="phone" type="number" />
        </Form.Item>
        <Button onClick={this.sendToServer}>
            Enviar
          </Button>
        </div>
        </Form>
        <h4>¿Ya tienes cuenta con nosotros?</h4>
          <NavLink to ="/login">Login</NavLink>
          </div>
    )
  }
}

//btn onsubmit 