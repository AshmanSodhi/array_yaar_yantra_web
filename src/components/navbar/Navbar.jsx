import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <p className='logo'>ECO FORECAST</p>
        <ul>
            <li>HOME</li>
            <li>SIGHT</li>
            <li>INSIGHTS</li>
            <li>ADMIN</li>
        </ul>
    </nav>
  )
}

export default Navbar
