import React from 'react'
import 'antd/dist/antd.css'
import {Layout} from 'antd'
import { Icon } from 'antd'

const {Footer} = Layout



export default function footer() {
  return (
    <div className="gral">
     <Footer >
     
        <p><a href="/">Acerca de nosotros</a></p>
        <p><a href="/">Contacto</a></p>
        <p><a href="/">Aviso de privacidad</a></p>
        <div className="Red-cont">
        <a href="/"><Icon type="facebook" theme="filled" style={{ fontSize:'30px', color: '#364d79'}}/></a>
        <a href="/"><Icon type="instagram" theme="filled" style={{ fontSize:'30px', color: '#364d79'}} /></a>
        <a href="/"><Icon type="twitter" style={{ fontSize:'30px', color: '#364d79'}} /></a>
        </div>
      </Footer>      
    </div>
  )
}
