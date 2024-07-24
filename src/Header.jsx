import React from 'react'
import "./Component Css/header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
<div className="header">
    <div className="img">
<img src="src/Images/logo.png" alt="" />
</div>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About us' >About</Link></li>
        <li><Link to='/Academics'>Academics</Link></li>
        <li> <Link to='/Admissions'>Admissions</Link></li>
        <li><Link to='/Faculty'>Faculty</Link></li>
        <li>Students</li>
        <li>Gallery</li>
    </ul>
</div>
    </>
  )
}

export default Header
