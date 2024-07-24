import React from 'react'
import './Component Css/admissions.css'
import bottomimg from './Images/bottomimg.avif'
import Contact from './Contact'
function Admissions() {
  return (
<>
<div id="about-wrapper">
      <div className="headings">
      <h1>Admissions</h1>
      <p>Join our vibrant learning community! Our open enrollment process welcomes students of all backgrounds to apply and discover their potentia.</p>
      </div>
      <div className="admission-row1">
        <div className="admission-row1-left">
          <p ><span>Process: </span>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
          <p ><span>Criteria: </span>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
          
          <span>Important Dates</span>
          <ul>
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
            
          </ul>
        </div>
        <div className="admission-row1-right admission"  ></div>
      </div>
      <div className="admission-row2">
        <div className="admission-row2-left Prospective" ></div>
        <div className="admission-row2-right">
       
            <h2 style={{textAlign:'center'}}>Prospective
            Parents & Students</h2>
            <p>We believe in the power of partnership between home and school. Explore the various ways you can get involved in our school community and contribute to your child's education</p>
            <p>Discover what it's like to be a student at our school. From engaging classes to exciting extracurricular activities, there's always something to look forward to.</p>

         </div>
      </div>


    </div>
    <div className="bottomimg">
      <img src={bottomimg} alt="" />
    </div>
    <Contact/>
</>
  )
}

export default Admissions
