import React from "react";
import './Component Css/faculty.css'
import jhon from './Images/jhon.jpeg'
import jame from './Images/jame.jpeg';
import michal from './Images/michal.jpg';
import david from './Images/david.png';
import sophia from './Images/sophia.jpg';
import jhonsan from './Images/jhonsan.jpeg';
import Contact from "./Contact";

export default function Faculty() {


  return (<>
    <div id="faculty-wrapper">
    <div className="headings">
      <h1>Our Faculties.</h1>
      <p>Their responsibilities may include teaching and/or research, along with potential service duties.</p>
       </div>
      <div className="cards">
      <img src={jhonsan} alt="" />
      <p> <span>Emily Johnson: </span>  English Teacher, M.A. in English, 10 years of teaching experience.      </p>
      </div>
      <div className="cards">
      <img src={jhon} alt="" />
      <p> <span>John Doe:</span> Principal, M.Ed, 20 years of experience in educational administration.
      </p>
      </div>
      <div className="cards">
      <img src={jame} alt="" />
      <p> <span>Jane Smith:</span>Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</p>
      </div>
      <div className="cards">
      <img src={michal} alt="" />
      <p> <span>Michael Brown: </span> Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.

      </p>
      </div>
      <div className="cards">
      <img src={david} alt="" />
      <p> <span>David Wilson: </span> Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.

      </p>
      </div>
      <div className="cards">
      <img src={sophia} alt="" />
      <p> <span>Sophia Davis: </span> Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.

      </p>
      </div>
      <div className="cards">
      <img src={sophia} alt="" />
      <p> <span>Sophia Davis: </span> Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.

      </p>
      </div>
      <div className="cards">
      <img src={sophia} alt="" />
      <p> <span>Sophia Davis: </span> Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.

      </p>
      </div>
      <div className="cards">
      <img src={sophia} alt="" />
      <p> <span>Sophia Davis: </span> Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.

      </p>
      </div>
     </div>
     <Contact/>
     </>
  );
}