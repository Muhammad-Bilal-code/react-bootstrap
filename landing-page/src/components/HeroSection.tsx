import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/Button';
import { FaArrowRightLong } from "react-icons/fa6";
function HeroSection() {
  return (
    <Carousel data-bs-theme="dark" className='bilal'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.w3schools.com/html/images/13_html_images.png"
          alt="First slide"
          style={{maxHeight:"550px",objectFit:"cover"}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="outline-light">Submit<FaArrowRightLong className='ms-2'/></Button>
        </Carousel.Caption>

      </Carousel.Item>
     
     
    </Carousel>
  );
}

export default HeroSection;