import React from 'react'
import './Component Css/home.css';
// import Header from './Header';
import  UncontrolledExample from './BootstrapComponent/Slider'
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate()
  return (<>
        {/* <Header/> */}
    <div id="home-wrapper">
        <h1>Springdale Public School</h1>
        <p >Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
        <div className="banners">
            <div className="Annual-Sports"  onClick={(e)=> {navigate('/Gallery')}}>
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

        <div className="slider">
    <UncontrolledExample/>
        </div>
    <Contact/>
    </>
  )
}

export default Home
