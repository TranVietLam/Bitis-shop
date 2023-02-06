import React from 'react'
import Banner from "./../../components/banner/banner";
import "./style.css";

// Banner Right
import BannerRight1 from "../../Assets/images/banner/Banner-right1.png";
import BannerRight2 from "../../Assets/images/banner/Banner-right2.png";
import BannerRight3 from "../../Assets/images/banner/Banner-right3.png";

// Banner Under
import BannerUnder1 from "../../Assets/images/banner/Banner-under1.png";
import BannerUnder2 from "../../Assets/images/banner/Banner-under2.png";
import BannerUnder3 from "../../Assets/images/banner/Banner-under3.png";
import Menu from "../../components/MenuList";
import ProductSection from './../ProductSection/index';


const BannerHomePage = () => {
  return (
    <div className="homepage-container container d-flex">
    <div className="home-left-group">
      <Menu />
    </div>
    <div className="home-container">
      <div className="d-flex">
        <div className="home-banner-group">
          <Banner />
        </div>
        <div className="home-right-group d-flex flex-column">
          <a
            href="/"
            className="home-right-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BannerRight1} alt="Banner-Right" />
          </a>
          <a
            href="/"
            className="home-right-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BannerRight2} alt="Banner-Right" />
          </a>
          <a
            href="/"
            className="home-right-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BannerRight3} alt="Banner-Right" />
          </a>
        </div>
      </div>
      <div className="home-under-group">
        <a
          href="/"
          className="home-under-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={BannerUnder1} alt="Banner-Right" />
        </a>
        <a
          href="/"
          className="home-under-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={BannerUnder2} alt="Banner-Right" />
        </a>
        <a
          href="/"
          className="home-under-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={BannerUnder3} alt="Banner-Right" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default BannerHomePage