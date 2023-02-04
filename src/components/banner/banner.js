import React from "react";
import { useState } from "react";
import "./banner.css";
import Carousel from "react-bootstrap/Carousel";
import BannerImg1 from "../../Assets/images/banner/Banner1.png";
import BannerImg2 from "../../Assets/images/banner/Banner2.png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="banner-section">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="banner-section">
              <img
                className="d-block w-100 banner-img"
                src={BannerImg1}
                alt="Banner"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="banner-section">
              <img
                className="d-block w-100 banner-img"
                src={BannerImg2}
                alt="Banner"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
