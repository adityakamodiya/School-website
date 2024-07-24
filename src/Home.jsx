import React from 'react'
import './Component Css/home.css';
// import Header from './Header';
import Contact from './Contact';
function Home() {
  return (<>
        {/* <Header/> */}
    <div id="home-wrapper">
        <h1>Springdale Public School</h1>
        <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
        <div className="banners">
            <div className="Annual-Sports">
                {/* <p> Celebrating Excellence in Sports</p> */}
            </div>
            <div className="Science-Exhibition">
                {/* <p>Showcasing Student Innovations</p> */}
            </div>
            <div className="Cultural-Fest">
                {/* <p>Embracing Diversity and Creativity</p> */}
            </div>
        </div>
    </div>
    <Contact/>
    </>
  )
}

export default Home
