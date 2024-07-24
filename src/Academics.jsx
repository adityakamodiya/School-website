import React from 'react'
import './Component Css/about.css'
import Header from './Header'
function Academics() {
  return (
    <>

<div id="about-wrapper">
      <div className="headings">
      <h1>ACADEMICS</h1>
      <p>Education is the main building block of a happy, fruitful, and productive life.A well-rounded schooling framework prepares children for the future. However, math, science, and geography alone won't set you up for real life.</p>
      </div>
      <div className="vission">
        <div className="Vleft">
          <p>
           <span> Social Studies</span></p>
          <ul>
            <li>An interactive historical atlas of the United States that combines research with innovative mapping techniques1.</li>
            <li>Geared toward high school students, this project offers a multi-disciplinary approach to knowledge.</li>
            <li>A fantastic YouTube channel with engaging videos on notable historical events and developments.</li>
            <li>Provides a list of great history websites.</li>

          </ul>
        </div>
        <div className="Vright" style={{backgroundImage:'url(src/Images/socialstudies.jpg)'}}></div>
      </div>
      <div className="principal">
        <div className="Pleft"style={{backgroundImage:'url(src/Images/science.jpeg)'}} ></div>
        <div className="Pright">
        <p><span> Science</span></p>
          <ul>
            <li>Explore hands-on experiments in our state-of-the-art science labs, where students bring scientific concepts to life through engaging, interactive activities.</li>
            <li>Showcase your scientific discoveries at our annual Science Fair, where students present their projects, experiments, and inventions to the school community and beyond.</li>
            <li>Participate in educational field.</li>
            <li>Learn from the experts with our guest lectures and workshops.</li>

          </ul>
        </div>
      </div>
      <div className="vission">
        <div className="Vleft">
          <p><span>
          Math</span></p>
          <ul>
            <li>Challenge your problem-solving skills and compete with peers in our Math Olympiad.</li>
            <li>Join our Math Club to explore fascinating mathematical concepts, engage in brain-teasing puzzles</li>
            <li>Participate in our interactive math workshops, designed to make learning fun and engaging through hands-on activities.</li>
            <li>Enhance your learning experience with educational field trips to science museums.</li>

          </ul>
        </div>
        <div className="Vright" style={{backgroundImage:'url(src/Images/Math.jpeg)'}}></div>
      </div>
      <div className="principal">
        <div className="Pleft" style={{backgroundImage:'url(src/Images/phyedu.jpeg)'}}></div>
        <div className="Pright">
        <p><span>
        Physical Education</span></p>
          <ul>
            <li>Join our competitive sports teams and develop your skills in soccer, basketball, volleyball, and more. Experience the thrill of teamwork.</li>
            <li>ngage in friendly competition with classmates through our intramural sports leagues, offering a variety of sports and games for all skill levels.</li>
            <li>Our physical education classes provide students with a well-rounded curriculum.</li>
            <li>Attend workshops focused on nutrition, mental health, and overall wellness.</li>

          </ul>
        </div>
      </div>
      <div className="vission">
        <div className="Vleft">
          <p><span>
          Teaching Methodologies</span></p>
          <ul>
            <li>Engage in project-based learning where students tackle real-world problems through collaborative projects.</li>
            <li>Experience personalized learning with differentiated instruction tailored to meet the diverse needs and learning styles of each student.</li>
            <li>Develop curiosity and independent thinking with inquiry-based learning, encouraging students to ask questions.</li>
            <li>Our reflective teaching practices ensure continuous improvement, as educators assess their methods and strategies to better meet the needs of their students.</li>

          </ul>
        </div>
        <div className="Vright"style={{backgroundImage:'url(src/Images/TeachingMethodologies.png)'}}></div>
      </div>
      <div className="principal">
        <div className="Pleft"style={{backgroundImage:'url(src/Images/eduresources.jpg)'}}></div>
        <div className="Pright">
        <p><span>
        Educational Resources</span></p>
          <ul>
            <li>Explore a wealth of knowledge in our well-equipped library and media center, featuring a vast collection of books, e-books, academic journals, and multimedia resources.</li>
            <li>Utilize a range of educational software and apps designed to reinforce classroom learning, promote skill development, and provide interactive practice.</li>
            <li>Participate in our enrichment programs, offering workshops, seminars, and extracurricular activities that provide deeper insights and extended learning opportunities.</li>
            <li>Our commitment to continuous improvement includes professional development resources for teachers.</li>

          </ul>
        </div>
      </div>
    </div>

    </>
  )
}

export default Academics
