import React from "react";
import { useState } from "react";
import "./banner.css";
import Carousel from "react-bootstrap/Carousel";
import BannerImg1 from "../../Assets/images/banner/banner-1.jpg";
import BannerImg2 from "../../Assets/images/banner/banner-2.jpg";
import BannerImg3 from "../../Assets/images/banner/banner-3.jpg";

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
                src={BannerImg2}
                alt="Banner"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="banner-section">
              <img
                className="d-block w-100 banner-img"
                src={BannerImg3}
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
