import React from 'react';
import { Carousel } from 'antd';
import { Card, Col, Row } from 'antd';


export default function Home() {
  return (
    <div className="">
    <div className="home-p1">
    <Carousel effect="fade">
    <div className="img-carousel"><img src="https://www.unicef.org/sites/default/files/styles/media_banner/public/2018-06/06_AU_UN0148747_Bluewash_WEB_0.jpg?itok=PL6mgo-h" alt="children"/></div>
    <div className="img-carousel"><img src="https://tecreview.tec.mx/wp-content/uploads/2016/10/ANTARTIDA.jpg" alt="antartida"/></div>
    <div className="img-carousel"><img src="https://www.hoyestado.com/wp-content/uploads/2017/08/perros.jpg" alt="dogs"/></div>
    <div className="img-carousel"><img src="http://imparcialoaxaca.mx/wp-content/uploads/2018/05/EN-EL-MARCO.jpg" alt="jaguar"/></div>
  </Carousel>
  <h3>"Nadie que haya aliviado el peso de sus semejantes habrá fracasado en este mundo.”
Charles Dickens</h3>
    <p>Donare es un organismo que se encarga de concentrar información de diferentes ONGS de México con el fin de que se vuelva tendencia el participar activamente en causas mediante aportes económicos.</p>
    </div>
    <div className="cards">
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
      <img style={{height: "300px"}} src="https://1.bp.blogspot.com/-HRlBJ8l6sKk/WoEZ945KsmI/AAAAAAAAHuA/1CjDdoczXuwisSFZ3EHzxV1SgIHbFkAQgCLcBGAs/s1600/icon-registro-digital.png" alt="registro"/>
        <Card title="Registra tu evento" bordered={false}>Registra el tipo de evento, el plazo y la ONG que deseas apoyar. </Card>
      </Col>
      <Col span={8}>
      <img style={{height: "300px"}} src="https://images.vexels.com/media/users/3/136557/isolated/preview/64e97a538865341a45bd37df4fad1579-icono-de-chat-de-usuarios-de-personas-by-vexels.png" alt="invitación"/>
        <Card title="Invita" bordered={false}> Envíales a tus contactos la liga para que ingresen, realicen un aporte económico y apoyen tu causa.</Card>
      </Col>
      <Col span={8}>
      <img style={{height: "300px"}} src="https://cdn3.iconfinder.com/data/icons/business-bundle/512/wishlist-512.png" alt="depósito meta"/>
        <Card title="Deposita" bordered={false}>Una vez cumplido el plazo depositamos el monto reunido a la ONG</Card>
      </Col>
    </Row>

    <button><a href="/login">Registra tu evento</a></button>
    </div>,
    </div>

    <div className="img-ongs">
    <a href="/"><img style={{height: "100px"}} src="http://www.stickpng.com/assets/images/5a0c731b9642de34b6b65cee.png" alt="greenpeace logo"/></a>
    <img style={{height: "100px"}} src="https://seeklogo.com/images/R/rainforest-alliance-certified-logo-768E66A962-seeklogo.com.png" alt="rainforest alliance logo"/>
    <img style={{height: "100px"}} src="https://www.fundacionealyortiz.org/imgusr/logos/logo_fundacion_unam.png" alt="fundación UNAM logo"/>
    <img style={{height: "100px"}} src="https://blackjaguarwhitetiger.org/wp-content/uploads/2017/06/Black-Jaguar-White-Tiger-Logo-600px.png" alt="black jaguar logo"/>
    <img style={{height: "100px"}} src="http://www.pro-renal.com/wp-content/uploads/2017/05/logoTyV.png" alt="trasplante y vida logo"/>
    <img style={{height: "100px"}} src="https://pnamexico.com/wp-content/uploads/2017/12/LOGO-PNA-300x105.png" alt="protectora animales logo"/>
    <button><a href="/">Conoce más ONGS</a></button>
    </div>

    </div>
  )
}