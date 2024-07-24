import React from 'react'
import "./Component Css/header.css"
import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
function Header() {
  return (
    <>
<div className="header">
    <div className="img">
<img src={logo} alt="" />
</div>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About us' >About</Link></li>
        <li><Link to='/Academics'>Academics</Link></li>
        <li> <Link to='/Admissions'>Admissions</Link></li>
        <li><Link to='/Faculty'>Faculty</Link></li>
        <li> <Link to='/Students'>Students</Link></li>
        <li><Link to='/Gallery'>Gallery</Link></li>
    </ul>
</div>
    </>
  )
}

export default Header
