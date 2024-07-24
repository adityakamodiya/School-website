import React from 'react'
import sports from './Images/sports.png';
import scienceec from'./Images/scienceex.jpeg';
import cultural from './Images/cultural.jpeg';
import library from './Images/library.jpeg'
import './Component Css/gallery.css'
import video1 from './Images/video1.mp4'
import video2 from './Images/video2.mp4';
import video3 from './Images/video13.mp4';
import gallery1 from './Images/galler1.jpeg'
import gallery2 from './Images/gallery2.jpeg'
import gallery3 from './Images/gallery3.jpeg'
import gallery4 from './Images/gallery4.jpeg'
// import video3 from './Images/video3.mp4';
function Gallery() {
  return (
   <>
   <div id="gallery-wrapper">
   <div className="headings">
      <h1>OUR Gallery</h1>
      <p>Explore our gallery to see snapshots of daily student life, showcasing the vibrant and dynamic environment of our school.</p>
      </div>
    <div className="images">
      <img src={library} alt="" />
      <img src={sports} alt="" />
      <img src={cultural} alt="" />
      <img src={scienceec} alt="" />
    </div>
    <div className="video">
    <video width="800"   controls autoPlay muted>
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
</div>
    <div className="images">
      <img src={gallery1} alt="" />
      <img src={gallery2} alt="" />
      <img src={gallery3} alt="" />
      <img src={gallery4} alt="" />
    </div>

    <div className="video">
    <video width="800" controls  autoPlay='true' muted>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
</div>
   </div>
   </>
  )
}

export default Gallery
