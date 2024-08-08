import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Images/vission.webp'
import sci from '../Images/scienceex.jpeg'
import lib from '../Images/library.jpeg'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <div className='slideimg' style={{ height: '400px', border:'1px solid' , backgroundImage:'url('+img1+')' }}>
      
    </div>
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          <p>Our school has taught us that learning is a lifelong journey. We are encouraged to explore, ask questions, and think critically, which helps us prepare for the future</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slideimg' style={{ height: '400px', border:'1px solid' , backgroundImage:'url('+lib+')' }}>
      
    </div>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p>Our school library is more than just a room full of books; it's a gateway to knowledge, imagination, and endless possibilities</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slideimg' style={{ height: '400px', border:'1px solid' , backgroundImage:'url('+sci+')' }}>
      
    </div>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>Welcome to our school’s science exhibition! Today, we are excited to showcase our experiments, projects, and discoveries that highlight the wonders of science
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;