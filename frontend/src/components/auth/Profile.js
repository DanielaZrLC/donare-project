import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button, Card,Icon, Statistic} from 'antd';


const { Meta } = Card;

export default function Profile(props) {
    let {user} = props
    // let {profilePic} = props.profilePic
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

<Card
    hoverable
    style={{ width: 250 , margin: '10px'}}
    cover={<img alt="" src={user.profilePic} />} > 
    <Meta
      title={user.username}
      description={user.email}/>

<Button >Editar mi foto</Button>
  </Card>
  
  
  
  <div className="complemento-prof">

  <Statistic style={{color: 'white'}} title="Feedback" value={1128} prefix={<Icon type="like" />} />
        <NavLink to="/createEvent"><Button>Crear evento</Button></NavLink>
        <NavLink to="/allMyEvents"><Button>Ver mis eventos</Button></NavLink>
        </div>
        </div>
    )
  }
// }


