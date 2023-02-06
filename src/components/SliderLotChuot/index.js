import React from "react";
import "./style.css";
import Slider from "react-slick";
import DataLotChuot from "./../../DataLotChuot/index";

//redux
import { useDispatch } from "react-redux";
import { onAddToCart } from "../../redux/actions/actions";

const SliderLotChuot = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (infoProduct) => {
    dispatch(onAddToCart(infoProduct));
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
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
        {DataLotChuot.map((item, id) => (
          <div key={id} className="slider-item">
            <a
              href="/"
              className="slider-img"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.image} alt="images" />
            </a>
            <p className="slider-text">
              <div className="d-flex align-item-center justify-content-between">
                <p className="slider-code">Mã : {item.code}</p>
                <p className="slider-quantity">{item.quantity}</p>
              </div>
              <a href="/" className="slider-name">
                {item.name}
              </a>
              <div className="slider-price-container">
                <div className="slider-price">
                  {item.price}
                  <span className="ms-1">đ</span>
                </div>

                <button
                  className="slider-btn-cart"
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                ></button>
              </div>
            </p>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderLotChuot;
