import React, { Component } from 'react'
import axios from 'axios';
import {  Button, Input, Menu, Dropdown, Icon } from 'antd'; //
import FormItem from 'antd/lib/form/FormItem';



const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

// const dateFormat = 'YYYY-MM-DD';
// const dataSource =['Grupo Voluntario Mexicano-Alemán', 'Fundación Jaguar Negro Tigre Blanco', 'Océanos Vivientes','8 Rainforest Alliance México','Naturalia, Comité para la Conservación de Especies Silvestres', 'Fundación Universidad Nacional Autónoma de México', 'Grupo de Ecología y Conservación de Islas','Trasplante y Vida','ProSalud y Lucha Contra el Cancer','Proteccion Integral para la Mujer y la Niñez','Milagros Caninos','Culturas y Artes Populares','Greenpeace México','Reforestamos México','Protectora Nacional de Animales','Andes Animales Desamparados']

export class CreateEvent extends Component {
  state={
    user:{},
    cause:{},
    newEvent:{},
  }

  componentWillMount() {
    console.log(this.props)
    let { user } = this.state
    user = this.props.user
    this.setState({user})
  }

  handleChange = (e) =>{
    let {newEvent, user} = this.state
    newEvent["owner"] = user._id
    newEvent[e.target.name] = e.target.value
    console.log(newEvent)
    this.setState = ({newEvent})
  }


  // function handleMenuClick(e) {
  //   message.info('Click on menu item.');
  //   console.log('click', e);
  // }

  sendToServer = e => {
    console.log(this.state.user)
    e.preventDefault()
    let { newEvent } = this.state
    let url = `${process.env.REACT_APP_API_URL}/createEvent`
    axios.post(url, newEvent, { withCredentials: true })
      .then(res => {
        console.log(res)
        this.props.history.push('/allMyEvents')
      })
      .catch(e => console.log(e))
  }


  render() {
    return (
    <div className="newEventform">
     <FormItem>
       <Input type="text" name="name" placeholder="Nombre de mi evento" onChange ={this.handleChange}/>
       </FormItem>
       <label>Fecha del evento: </label>
       <FormItem>
      <Input type="date" name="date" onChange ={this.handleChange}/>
    </FormItem>

      <label>Nombre de la ONG</label>
      <Dropdown overlay={menu} trigger={['click']}><a className="ant-dropdown-link" href="/"> ONGS 
      <Icon type="down" /></a>
      </Dropdown>
      
   <Button  onClick={this.sendToServer}>Crear evento</Button>
  </div>

    )
  }
}

export default CreateEvent

      // <div>
      // <input type="text" name="name" placeholder="Nombre de mi evento" onChange ={this.handleChange}/>
      // <input type="date" name="date" onChange ={this.handleChange}/>
      // <input type="text" name="cause" placeholder="Nombre de la Organización" onChange ={this.handleChange}/>
      
        
      // </div>


// <FormItem>
//       <Input type="text" name="cause" placeholder="Nombre de la ONG" onChange ={this.handleChange}/>
//       </FormItem>