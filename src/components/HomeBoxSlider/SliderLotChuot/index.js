import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Slider from "react-slick";
import DataLotChuot from "../../../DataLotChuot/index";
import { numberWithCommas } from "../../../Utils";
//redux
import { useDispatch } from "react-redux";
import { onAddToCart } from "../../../redux/actions/actions";
import ModalSuccess from "../../ModalSuccess";
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
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const SliderLotChuot = () => {
  //modal
  const [show, setShow] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);
  const isDidMount = useRef(null);
  useEffect(() => {
    // api
    console.log("willDidMount");
    if (isDidMount.current) {
      console.log("didmount");
      fetch("https://5e1fc92ee31c6e0014c6000e.mockapi.io/api/product")
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setDataProducts(data);
          }
        });
    } else {
      isDidMount.current = true;
    }

    //modal show
    const interval = setInterval(() => {
      setShow(false);
    }, 3300);

    return () => clearInterval(interval);
  }, []);

  const dispatch = useDispatch();
  const handleAddToCart = (infoProduct) => {
    dispatch(onAddToCart(infoProduct));
    setShow(true);
  };

  return (
    <>
      <ModalSuccess show={show} />
      <Slider {...settings}>
        {dataProducts.map((item, id) => (
          <div key={id} className="slider-item">
            <a
              href="/"
              className="slider-img"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.image} alt="images" />
            </a>
            <div className="slider-text">
              <div className="d-flex align-item-center justify-content-between">
                <p className="slider-code">Mã : {item.code}</p>
                <p className="slider-quantity"></p>
              </div>
              <a href="/" className="slider-name">
                {item.name}
              </a>
              <div className="slider-price-container">
                <div className="slider-price">
                  {numberWithCommas(item.price)}
                  <span className="ms-1">đ</span>
                </div>

                <button
                  className="slider-btn-cart"
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                ></button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderLotChuot;
