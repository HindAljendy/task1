import "./CarouselHeader.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import IMGCarousel1 from "./../../assets/images/banner-01.jpg";
import IMGCarousel2 from "./../../assets/images/banner-02Carousel.jpg";
import IMGCarousel3 from "./../../assets/images/banner-03.jpg";

const CarouselHeader = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="HJ_CarouselHeader">
      <div className="HJ_ContainerCarousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={IMGCarousel1} alt="Img Carousel" />
            <div className="HJ_CarouselCaption">
              <div className="HJ_TextCarousel">
                <span className="HJ_Country">
                  Toronto, <em className="HJ_Style_Country">Canada</em>
                </span>
              </div>
              <h2>
                Hurry!
                <br></br>
                Get the Best villa for you
              </h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={IMGCarousel2} alt="Img Carousel" />
            <div className="HJ_CarouselCaption">
              <div className="HJ_TextCarousel">
                <span className="HJ_Country">
                  Melbourne, <em className="HJ_Style_Country">Australia</em>
                </span>
              </div>
              <h2>
                Be Quick !<br></br>
                Get the Best villa In Town
              </h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={IMGCarousel3} alt="Img Carousel" />
            <div className="HJ_CarouselCaption">
              <div className="HJ_TextCarousel">
                <span className="HJ_Country">
                  Miami, <em className="HJ_Style_Country">South Florida</em>
                </span>
              </div>
              <h2>
                Act Now !<br></br>
                Get the Highest Level Penthouse
              </h2>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselHeader;
