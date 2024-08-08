import React from 'react'
import "./Component Css/contact.css"
import { useNavigate } from 'react-router-dom'
import Map from './Map'
function Contact() {
  const navigate = useNavigate();
  function FindMap(e){

    e.preventDefault()
    navigate('/Address')
    // <Map/>

   return  <Map />
}
  return (
    <>
    <div id="contact-wrapper">
        <div className="left">
            <h1>Contact Us</h1>
            <p className='address' onClick={(e)=>{FindMap(e)}}><span>Address: </span>Springdale Public School, 123 Education Lane,Cityville, State, ZIP Code.</p>
            <p><span>Phone: </span> +1 (123) 456-7890</p>
            <p><span>Email: </span><a href="https://google.com/mail">info@springdale.edu</a></p>
        </div>
        <div className="right">
            <form action="" onSubmit={e=> alert('Thanks for submission,We will guide your carrer!')}>
                <input  required type="text"  placeholder='name' name="" id="" />
                <input required type="email"  placeholder='Email' name="" id="" />
                <textarea required name="" placeholder='Message' rows={10} cols={20} id=""></textarea>
                <input type="submit" className='submit' placeholder='' />
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
