import Carousel from "react-bootstrap/Carousel";
import './homeCarousel.css';

function HomeCarousel() {

  return (
    <Carousel className="my-carousel box-shadow mb-3 py-4">
      <Carousel.Item interval={500}>
        <img
          className="img-fluid d-block w-100"
          src="https://th.bing.com/th/id/OIG.W836kQdFl4WBoo9nSqwB?pid=ImgGn"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img-fluid d-block w-100"
          src="https://th.bing.com/th/id/OIG.snWU8uW0cgaGR40UwnVL?pid=ImgGn"
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
          src="https://th.bing.com/th/id/OIG.wDyKk21dEInto0qnMP6t?pid=ImgGn"
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
