import React from "react";
import Slider from "react-slick";
import "./style.css";
import DataProductSale from "./../../DataProductSale/index";

const SaleSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {DataProductSale.map((item, id) => (
          <div key={id} className="container">
            <div className="product-card">
              <div className="product-item">
                <a
                  href="/"
                  className="product-img"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.image} alt="products" />
                  <span className="product-discount">{item.discount}</span>
                </a>
                <div className="product-text">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="product-code">Mã: {item.code}</p>
                    <p className="product-status">Còn Hàng</p>
                  </div>
                  <a href="/" className="product-name">
                    {item.name}
                  </a>
                    <div className="product-price-container">
                      <del className="product-old-price">
                        {item.oldprice}
                        <span>đ</span>
                      </del>
                      <span className="product-price">
                        {item.price}
                        <span>đ</span>
                      </span>
                      <a
                        href="/cart"
                        className="product-btn-cart"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                      </a>
                    </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SaleSlider;
