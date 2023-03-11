import React from "react";
import "./style.css";

import SliderLotChuot from "../../components/HomeBoxSlider/SliderLotChuot/index";

const HomeBoxSlider = () => {

  return (
    <>
      <div className="container home-box-group">
        <div className="homebox-slider">
          <div className="homebox-title-group">
            <h2 className="title">Lót Chuột</h2>
            <button className="btn-view-more-mobile">
              <h3>
                {" "}
                XEM THÊM
                <i className="bi bi-arrow-right ms-1"></i>
              </h3>
            </button>
            <div className="homebox-list-group">
              <a href="/">
                <h3 className="list-text"> LÓT CHUỘT CỠ 80X30 </h3>
              </a>
              <a href="/">
                <h3 className="list-text"> LÓT CHUỘT CỠ 90X40</h3>
              </a>
              <a href="/">
                <h3 className="list-text"> LÓT CHUỘT CỠ 45X40</h3>
              </a>
              <a href="/">
                <h3 className="list-text"> LÓT CHUỘT CỠ 80X40</h3>
              </a>
              <button className="btn-view-more">
                <h3>
                  {" "}
                  XEM THÊM
                  <i className="bi bi-arrow-right ms-1"></i>
                </h3>
              </button>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <SliderLotChuot/>
        </div>
      </div>
    </>
  );
};

export default HomeBoxSlider;
