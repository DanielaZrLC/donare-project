import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Profile(props) {
    let {user} = props
    let {causes} = props.user



  let ownCausesList = () => causes.adoptedCauses.map(cause => {
    return(
    <li>
      <h2>{cause.name}</h2>
      <button>Detalle</button>
    </li>
    )
  })

//   if(causes.adoptedCauses.length > 0){
//     return (
//       <div>
//         <img src={user.photoURL} alt={user.username + "photo"}/>
//         <h1>Bienvenido {user.username}</h1>
//         <ul>Mis eventos creados:
//           { ownCausesList }
//         </ul>
//       </div>
//     )
//   } else {
//     return(
//       <div> 
//         <img src={user.photoURL} alt={user.username + "photo"}/>
//         <h1>Bienvenido {user.username}</h1>
//         <h4>No has creado ningún evento aún; para generar uno da click aquí: </h4>
//         <NavLink to="/createCause"><button>Crear evento para apoyar</button></NavLink>
//       </div>
//     )
//   }
}


