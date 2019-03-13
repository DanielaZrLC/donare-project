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
        let url = `${process.env.REACT_APP_API_URL}/signup`
        let {user} = this.state
        axios.post(url, user)
        .then(data =>{
            console.log(data)
            this.props.history.push('/login')
        })
    }

    // sendToServer = (e) => {
    //   e.preventDefault()
    //   let url= "http://localhost:3000/signup"
    //   let {profilePhoto, newUser} = this.state
    //   const formData = new FormData()		
    //   for(let key in newUser){
    //     formData.append(key, newUser[key])
    //   }		
    //   formData.append("picture", profilePhoto)
    //   let serviceUpload = axios.create({url, withCredentials: true})
    //   return serviceUpload.post(url, formData, {
    //     headers: {
    //       'Content-type': 'multipart/form-data',
    //     }
    //   })
    //     .then(res => {
    //       this.props.history.push('/profile')
    //       console.log(res)
    //     })
    //     .catch(e => console.log(e))
    // }
   

  render() {
    return (
      <Form onSubmit={this.sendToServer} className="signup-form">
      <div className="back-sign">
       <h2 style={{backgroundColor: "rgba(20, 20, 20, 0.76)", color:"white", height:"50px"}} title="Regístrate">Regístrate:</h2>
       <Form.Item>
            <Input onChange= {this.handleChange} name="email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ingresa tu correo" />
        </Form.Item>
        <Form.Item>
            <Input.Password onChange= {this.handleChange} name="password" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ingresa contraseña" />
        </Form.Item>
        <Form.Item>
            <Input.Password onChange= {this.handleChange} name="password2" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirma contraseña" />
        </Form.Item>

        <Button ghost type="submit" >
            Enviar
          </Button>
          <h4>¿Ya tienes cuenta con nosotros?</h4>
          <NavLink to ="/login">Login</NavLink>
        </div>
        </Form>
    )
  }
}


// <input type="file" onChange={this.handleImageChange} name="profilePhoto" />
// <br />
// <input onChange={this.handleChange} placeholder="Your phone number" name="phone" type="number" />
// <br />
// <input onChange={this.handleChange} placeholder="Set a password" name="password" type="password" />
// <br />
// <input onChange={this.handleChange} placeholder="Rewrite your password" name="password2" type="password" />
// <p style={{ color: "red" }}>{errors.password}</p> {/*Add Toastr*/}
// <button onClick={this.sendToServer}>Registrarse</button>
// </div>
// <div>

//dirigir al profile una vez hecho el signup