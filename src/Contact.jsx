import React from 'react'
import "./Component Css/contact.css"
function Contact() {
  return (
    <>
    <div id="contact-wrapper">
        <div className="left">
            <h1>Contact Us</h1>
            <p><span>Address: </span>Springdale Public School, 123 Education Lane,Cityville, State, ZIP Code.</p>
            <p><span>Phone: </span> +1 (123) 456-7890</p>
            <p><span>Email: </span><a href="https://google.com/mail">info@springdale.edu</a></p>
        </div>
        <div className="right">
            <form action="">
                <input type="text"  placeholder='name' name="" id="" />
                <input type="email"  placeholder='Email' name="" id="" />
                <textarea name="" placeholder='Message' rows={10} cols={20} id=""></textarea>
                <input type="submit" className='submit' placeholder='' />
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
