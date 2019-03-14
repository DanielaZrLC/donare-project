import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button, Card,Icon, Statistic} from 'antd';


const { Meta } = Card;

export default function Profile(props) {
    let {user} = props



    return(
      <div className="profile">
<div className="complemento-prof">
<Card
    hoverable
    style={{ width: 250 , margin: '10px'}}
    cover={<img alt="" src={user.profilePic} />} > 
    <Meta
      title={user.username}
      description={user.email}/>

<Button >Editar mi foto</Button>
  </Card>
  
  <Statistic style={{color: 'black'}} title="Mi ranking" value={216} prefix={<Icon type="like" />} />
        <NavLink to="/createEvent"><Button>Crear evento</Button></NavLink>
        <NavLink to="/allMyEvents"><Button>Ver mis eventos</Button></NavLink>
        </div>
        
        <div className="cards-news">
<h2>Mis últimos aportes: </h2>
        <Card
      size="small"
      title="Mundo patitas"
      extra={<a href="/">More</a>}
      style={{ width: 300 ,height: 150}}
    >
      <img style={{width: 120, height: 80}} src="http://media.biobiochile.cl/wp-content/uploads/2016/04/resize-e1460982677152.jpg" alt="casita del sol"/>
    </Card>
    <Card
      size="small"
      title="Black Jaguar White Tiger Foundation"
      extra={<a href="/">More</a>}
      style={{ width: 300 ,height: 150}}
    >
      <img style={{width: 120, height: 80}} src="http://cde.peru21.pe/ima/0/0/4/3/2/432374.jpg" alt="black jaguar foundation"/>
    </Card>
    </div>
   
        </div>
    )
  }


