import React from 'react'
import './Component Css/about.css'
import Contact from './Contact'

function About() {
  return (<>
    <div id="about-wrapper">
      <div className="headings">
      <h1>Our School History</h1>
      <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students</p>
      </div>
      <div className="vission">
        <div className="Vleft">
          <p><span>Vision: </span>To create a learning environment that fosters academic excellence, critical thinking, and ethical values</p>
          <p><span>Mission: </span>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
          
          <span>values</span>
          <ul>
            <li>Be Kind</li>
            <li>Be Responsible</li>
            <li>Be Respectful</li>
            <li>Work Hard</li>
            <li>Have Fun</li>
          </ul>
        </div>
        <div className="Vright"></div>
      </div>
      <div className="principal">
        <div className="Pleft"></div>
        <div className="Pright">
        <p><span>Principal's Message: </span>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
        <span>Infrastructure and Facilities:
        </span>
      <ul><li>State-of-the-art science and computer labs</li></ul>
      <ul><li>Spacious and well-equipped classrooms</li></ul>
      <ul><li>Sports facilities including a playground, gymnasium, and swimming poo</li></ul>
      <ul><li>Library with a vast collection of books and digital resource</li></ul>
        </div>
      </div>
    </div>
    <Contact/>
    </>

  )
}

export default About
