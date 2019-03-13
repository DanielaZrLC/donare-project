import React, { Component } from 'react'
import axios from 'axios'

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

  sendToServer = e => {
    console.log(this.state.user)
    e.preventDefault()
    let { newEvent } = this.state
    let url = "http://localhost:3000/createEvent"
    axios.post(url, newEvent, { withCredentials: true })
      .then(res => {
        console.log(res)
        this.props.history.push('/allMyEvents')
      })
      .catch(e => console.log(e))
  }


  render() {
    return (
      <div>
      <input type="text" name="name" placeholder="Nombre deL evento" onChange ={this.handleChange}/>
      <label>Fecha del evento: </label>
      <input type="date" name="date" onChange ={this.handleChange}/>
      <input type="text" name="cause" placeholder="Nombre de la Organización" onChange ={this.handleChange}/>
      <button onClick={this.sendToServer}>Crear evento</button>
        
      </div>
    )
  }
}

export default CreateEvent
