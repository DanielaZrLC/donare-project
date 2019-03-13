import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from 'antd';

export default function Profile(props) {
    let {user} = props
    // let {newprofilePic} = props.profilePic
    // let {newEvent} = props.users

  // let allMyEvents = () => newEvent.push(events => {
  //   return(
  //   <li>
  //     <h2>{event.name}</h2>
  //     <button>Detalle</button>
  //   </li>
  //   )
  // })
  // if(user.isLogged)
  
  // if(events.adoptedCauses.length > 0){
  //   return (
  //     <div>
  //       <img src={user.photoURL} alt=""/>
  //       <h1>Bienvenido {user.username}</h1>
  //       <ul>Mis causas adoptadas:
  //         { allMyEvents }
  //       </ul>
  //     </div>
  //   )
  // } else {
    return(
      <div className="profile">
        <h1>Bienvenido {user.username}</h1>
        <img src={user.profilePic} alt=""/>
        <Button >Editar mi foto</Button>
        <h3>Correo: {user.email}</h3>


        <h4>No has generado aún eventos para apoyar alguna causa, si deseas dar de alta uno da click aquí: </h4>
        <NavLink to="/createEvent"><Button>Crear evento</Button></NavLink>
        <NavLink to="/allMyEvents"><Button>Ver mis eventos</Button></NavLink>
        </div>
    )
  }
// }


