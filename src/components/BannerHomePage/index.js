import React from "react";
import Banner from "../../components/BannerHomePage/banner/banner";
import "./style.css";

// Banner Right
import BannerRight1 from "../../Assets/images/banner/Banner-right1.png";
import BannerRight2 from "../../Assets/images/banner/Banner-right2.png";
import BannerRight3 from "../../Assets/images/banner/Banner-right3.png";

// Banner Under
import BannerUnder1 from "../../Assets/images/banner/Banner-under1.png";
import BannerUnder2 from "../../Assets/images/banner/Banner-under2.png";
import BannerUnder3 from "../../Assets/images/banner/Banner-under3.png";
import MenuListHomePage from "./../MenuListHomePage/index";

const BannerHomePage = () => {
  return (
    <>
      <div className="homepage-container d-flex justify-content-center">
        <div className="home-left-group">
          <MenuListHomePage />
        </div>
        <div className="home-container">
          <div className="home-container-group d-flex">
            <div className="home-banner-group">
              <Banner />
            </div>
            <div className="home-pro-cat-group">
              <a href="/">
                <span className="cat-thumb lot-chuot"></span>
                <span className="cat-title">LÓT CHUỘT</span>
              </a>
              <a href="/">
                <span className="cat-thumb gaming-gear"></span>
                <span className="cat-title">GAMING GEAR</span>
              </a>
              <a href="/">
                <span className="cat-thumb phu-kien"></span>
                <span className="cat-title">PHỤ KIỆN MÁY TÍNH</span>
              </a>
              <a href="/">
                <span className="cat-thumb mo-hinh"></span>
                <span className="cat-title">MÔ HÌNH</span>
              </a>
              <a href="/">
                <span className="cat-thumb trang-tri mr-0"></span>
                <span className="cat-title">PHỤ KIỆN TRANG TRÍ</span>
              </a>
              <a href="/">
                <span className="cat-thumb loa-micro"></span>
                <span className="cat-title">LOA, MICRO, WEBCAM</span>
              </a>
              <a href="/">
                <span className="cat-thumb ghe-gaming"></span>
                <span className="cat-title">GHẾ GAMING</span>
              </a>
              <a href="/">
                <span className="cat-thumb ban-gaming"></span>
                <span className="cat-title">BÀN GAMING</span>
              </a>
              <a href="/">
                <span className="cat-thumb usb"></span>
                <span className="cat-title">USB, BỘ CHIA TÍN HIỆU</span>
              </a>
              <a href="/">
                <span className="cat-thumb tan-nhiet"></span>
                <span className="cat-title">TẢN NHIÊT, COOLING</span>
              </a>
            </div>
            <div className="home-right-group">
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
    </>
  );
};
export default BannerHomePage;
