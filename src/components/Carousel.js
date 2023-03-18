import Carousel from "react-bootstrap/Carousel";
import carousel_1 from "../images/carousel_1.jpg";
import carousel_2 from "../images/carousel_2.jpg";
import carousel_3 from "../images/carousel_3.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel_1} alt="First slide" height="400px" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={carousel_2} alt="Second slide" height="400px" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={carousel_3} alt="Third slide" height="400px" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
