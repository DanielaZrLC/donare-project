import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Avatar, Button, Statistic, Pagination } from 'antd';
import { NavLink} from 'react-router-dom';

const { Meta } = Card

export default class Events extends Component {
  state={
    myEvents: [],
  }

  componentDidMount(){
    let url = `${process.env.REACT_APP_API_URL}/allMyEvents`
    let { myEvents } =this.state 
  }
  render() {
    
    return (
      <div>
    <div className="event-card">
      <Card style={{ width: 200, marginTop : '30px', marginBottom:'10px' , backgroundColor: 'rgba(103, 126, 148, 0.52)'}}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} >
    <Statistic title="Monto recaudado" value={27550} precision={2} />
    <Button style={{ height: '20px',marginTop: 5, marginBottom: 10 }} type="primary">Ver más</Button>
    <Meta
      avatar={<Avatar src="https://cupidum.es/wp-content/uploads/2018/09/regalo.png" />}
      title="Cumpleaños 35"
      description="Hola a todos, quiero celebrar mi cumpleaños número..." />
      </Card>


      <Card style={{ width: 200, marginTop : '30px', marginBottom:'10px',backgroundColor: 'rgba(103, 126, 148, 0.52)'}}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} >
    <Statistic title="Monto recaudado" value={12050} precision={2} />
    <Button style={{ height: '20px',marginTop: 5, marginBottom: 10 }} type="primary">Ver más</Button>
    <Meta
      avatar={<Avatar src="https://listimg.pinclipart.com/picdir/s/59-590716_graduation-student-graduate-icon-png-clipart.png" />}
      title="Graduación"
      description="Quiero apoyar esta causa ya que tuve oportunidad..." />
      </Card>


      <Card style={{ width: 200, marginTop : '30px', marginBottom:'10px', backgroundColor: 'rgba(103, 126, 148, 0.52)' }}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} >
    <Statistic title="Monto recaudado" value={6500} precision={2} />
    <Button style={{ height: '20px',marginTop: 5, marginBottom: 10 }} type="primary">Ver más</Button>
    <Meta
      avatar={<Avatar src="http://hope.abta.org/assets/images-vfe/celebration-icon.png" />}
      title="Aniversario"
      description="En esta ocasión queremos celebrar esta fecha de una..." />
      </Card>


    </div>
    <h4>Ver más eventos...</h4>
    <Pagination style={{marginBottom: 15}} defaultCurrent={1} total={4} />
    </div>

    )
  }
}

