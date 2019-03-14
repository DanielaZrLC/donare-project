import React from 'react';
import { Carousel } from 'antd';
import { Card, Col, Row, Button } from 'antd';

let imageSrc1 = "https://www.unicef.org/sites/default/files/styles/media_banner/public/2018-06/06_AU_UN0148747_Bluewash_WEB_0.jpg?itok=PL6mgo-h"
let imageSrc2 = "http://www.arborday.org/trees/images/hero-planting.jpg"
let imageSrc3 = "https://expreso.press/wp-content/uploads/2017/12/albergue-de-perros.jpg"
let imageSrc4 = "http://images6.fanpop.com/image/photos/33100000/Jaguar-Wallpaper-amazon-rainforest-33125157-1920-1200.jpg"


export default function Home() {
  return (
    <div>
    <section>
    <Carousel autoplay>
    <div className="img-carousel"><img src={imageSrc1} style={{width:"100vw", height:"50vw"}} alt="children"/></div>
    <div className="img-carousel"><img src={imageSrc2} style={{width:"100vw", height:"50vw"}} alt="reforestación"/></div>
    <div className="img-carousel"><img src={imageSrc3} style={{width:"100vw", height:"50vw"}} alt="dogs"/></div>
    <div className="img-carousel"><img src={imageSrc4} style={{width:"100vw", height:"50vw"}} alt="jaguar"/></div>
  </Carousel>
    <p style={{ 'font-size': '1.5em', color: '#ECECECy'}}>Donare es un organismo que se encarga de concentrar información de diferentes ONGS de México con el fin de que se vuelva tendencia el participar activamente en causas mediante aportes económicos.</p>
    </section>
    <section className="home-s2">
    <div className="cards-icon" style={{ background: '#ECECEC', padding: '30px', height: '650px' }}>
    <Row gutter={16}>
      <Col span={8}>
      <img style={{height: "300px", margin:'30px'}} src="https://1.bp.blogspot.com/-HRlBJ8l6sKk/WoEZ945KsmI/AAAAAAAAHuA/1CjDdoczXuwisSFZ3EHzxV1SgIHbFkAQgCLcBGAs/s1600/icon-registro-digital.png" alt="registro"/>
        <Card title="Registra tu evento" bordered={false}>Registra el tipo de evento, el plazo y la ONG que deseas apoyar. </Card>
      </Col>
      <Col span={8}>
      <img style={{height: "300px", margin:'30px'}} src="https://images.vexels.com/media/users/3/136557/isolated/preview/64e97a538865341a45bd37df4fad1579-icono-de-chat-de-usuarios-de-personas-by-vexels.png" alt="invitación"/>
        <Card title="Invita" bordered={false}> Envíales a tus contactos la liga para que ingresen, realicen un aporte económico y apoyen tu causa.</Card>
      </Col>
      <Col span={8}>
      <img style={{height: "300px", margin:'30px'}} src="https://cdn3.iconfinder.com/data/icons/business-bundle/512/wishlist-512.png" alt="depósito meta"/>
        <Card title="Deposita" bordered={false}>Una vez cumplido el plazo depositamos el monto reunido a la ONG</Card>
      </Col>
    </Row>
    <Button type="primary"><a href="/login">Registra tu evento</a></Button>
    </div>
    </section>

    <section className="sec3">
    <div className="img-ongs">
    <a href="/"><img style={{height: "100px"}} src="http://www.stickpng.com/assets/images/5a0c731b9642de34b6b65cee.png" alt="greenpeace logo"/></a>
    <img style={{height: "130px", margin: '20px'}} src="https://seeklogo.com/images/R/rainforest-alliance-certified-logo-768E66A962-seeklogo.com.png" alt="rainforest alliance logo"/>
    <img style={{height: "130px", margin: '20px'}} src="https://www.fundacionealyortiz.org/imgusr/logos/logo_fundacion_unam.png" alt="fundación UNAM logo"/>
    <img style={{height: "130px", margin: '20px'}} src="https://blackjaguarwhitetiger.org/wp-content/uploads/2017/06/Black-Jaguar-White-Tiger-Logo-600px.png" alt="black jaguar logo"/>
    <img style={{height: "130px", margin: '20px'}} src="http://www.pro-renal.com/wp-content/uploads/2017/05/logoTyV.png" alt="trasplante y vida logo"/>
    <img style={{height: "130px", margin: '20px'}} src="https://pnamexico.com/wp-content/uploads/2017/12/LOGO-PNA-300x105.png" alt="protectora animales logo"/>
    <img style={{height: "130px", margin: '20px'}} src="http://riapuebla.org/web/wp-content/uploads/2012/11/Logo-Casa-del-Sol-jpg.jpg" alt="casa del sol logo"/>
    <img style={{height: "130px", margin: '20px'}} src="https://pbs.twimg.com/profile_images/957096924225593344/_fVjntU3_400x400.jpg" alt="lucha cancer logo"/>
    <img style={{height: "130px", margin: '20px'}} src="https://yt3.ggpht.com/a-/AAuE7mDhotuLkv1D7hUcRVhYUhkYvPOXosPLgpkHOQ=s900-mo-c-c0xffffffff-rj-k-no" alt="animales silvestres"/>
    </div>
    <Button style={{margin: '30px'}} type="primary"><a href="/">Conoce más ONGS</a></Button>
    </section>

    </div>
  )
}