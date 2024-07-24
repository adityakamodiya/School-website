import React from 'react'

function Admissions() {
  return (
<>
<div id="about-wrapper">
      <div className="headings">
      <h1>Admissions</h1>
      <p>Join our vibrant learning community! Our open enrollment process welcomes students of all backgrounds to apply and discover their potentia.</p>
      </div>
      <div className="vission">
        <div className="Vleft">
          <p style={{textAlign:'justify',lineHeight:'40px'}}><span>Process: </span>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
          <p style={{textAlign:'justify',lineHeight:'40px'}}><span>Criteria: </span>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
          
          <span>Important Dates</span>
          <ul>
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
            
          </ul>
        </div>
        <div className="Vright"  style={{backgroundImage:'url(src/Images/Admissions.jpeg)'}}></div>
      </div>
      <div className="principal">
        <div className="Pleft"  style={{backgroundImage:'url(src/Images/prospective.avif)'}}></div>
        <div className="Pright">
       
            <h2 style={{textAlign:'center'}}>Prospective
            Parents & Students</h2>
            <p style={{textAlign:'justify',lineHeight:'40px'}}>We believe in the power of partnership between home and school. Explore the various ways you can get involved in our school community and contribute to your child's education</p>
            <p style={{textAlign:'justify',lineHeight:'40px'}}>Discover what it's like to be a student at our school. From engaging classes to exciting extracurricular activities, there's always something to look forward to.</p>

         </div>
      </div>


    </div>
    <div className="bottomimg">
      <img src="src/Images/bottomimg.avif" alt="" />
    </div>
</>
  )
}

export default Admissions
