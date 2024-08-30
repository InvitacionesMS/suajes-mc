import React from 'react'
import './NavBar.scss'

export interface NavBarProps {
  children?: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = () => {

  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <h1>Logo</h1>
    </div>
    <ul className="navbar-links">
      <li><a href="#hero">Inicio</a></li>
      <li><a href="#services">Servicios</a></li>
      <li><a href="#about">Sobre nosotros</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
  )
}

export default NavBar