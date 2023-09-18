import Carousel from "react-bootstrap/Carousel";
import './homeCarousel.css';

function HomeCarousel() {

  return (
    <Carousel className="my-carousel box-shadow mb-3 py-4">
      <Carousel.Item interval={1000}>
        <Carousel.Item className="d-flex ">
            <img className="d-block py-4" id="carousel-cover " src="" alt="First slide" />
          <Carousel.Item className="d-flex flex-column justify-content-center align-items-start">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="btn btn-outline-danger">shop now!</button>
          </Carousel.Item>
        </Carousel.Item>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img-fluid d-block w-100"
          src="https://shorturl.at/gnGK4"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 p-4"
          src="https://i.ibb.co/WxMz4vk/epibooks-logo.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
