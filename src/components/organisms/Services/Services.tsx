import React from 'react'

import './Services.scss'

export interface ServicesProps {
  children?: React.ReactNode
}

const Services: React.FC<ServicesProps> = () => {

  return (
    <div className='services-container' id='services'>
      <h1 >NUESTROS SERVICIOS</h1>

      <div className='cards-container'>

        <div className='card'>
          <img src="/images/laser-machine.png" alt="Logo" width="100" />
          <h2>SUAJES EN CALADO<br></br>LÁSER</h2>
          <p>Máquinas láser de alta precisión para quemado de madera plana y rotativa.</p>
        </div>

        <div className='card'>
          <img src="/images/cutting-saw.png" alt="Logo" width="100" />
          <h2>SUAJES EN CALADO<br></br>MANUAL</h2>
          <p>14 años de experiencia con Suajes en calado manual, planos o rotativos.</p>
        </div>

        <div className='card'>
          <img src="/images/cutting-saw2.png" alt="Logo" width="100" />
          <h2>RENAVAJEO Y<br></br>REPARACIÓN</h2>
          <p>Servicios de reparación y renavajeo de Suajes, scored, navaja y perforado.</p>
        </div>

      </div>
    </div>
  )
}

export default Services