import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./style.css";
import { numberWithCommas } from "../../../Utils";

//redux
import { useDispatch, useSelector } from "react-redux";
import { onAddToCart } from "../../../redux/actions/actions";
import ModalSuccess from "../../ModalSuccess";

const SaleSlider = () => {
  //modal
  const [show, setShow] = useState(false);
  useEffect(() => {
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

  const {dataSale} = useSelector((state) => {
    return {
      dataSale : state.productsList.products || [],
    }
  })
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
  return (
    <>
      <ModalSuccess show={show} />
      <Slider {...settings}>
        {dataSale.map((item, id) => (
          <div key={id}>
            <div className="container">
              <div className="sale-product-card">
                <div className="sale-product-item">
                  <a
                    href={`/products/${item.id}`}
                    className="sale-product-img"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.image} alt="products" />
                    <span className="sale-product-discount">{item.discount}</span>
                  </a>
                  <div className="sale-product-text">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="sale-product-code">Mã: {item.code}</p>
                      <p className="sale-product-status">Còn Hàng</p>
                    </div>
                    <a href="/" className="sale-product-name">
                      {item.name}
                    </a>
                    <div className="sale-product-price-container">
                      <del className="sale-product-old-price">
                        {item.oldprice}
                        <span className="ms-1">đ</span>
                      </del>
                      <span className="sale-product-price">
                        {numberWithCommas(item.price)}
                        <span className="ms-1">đ</span>
                      </span>
                      <div
                        onClick={() => {
                          handleAddToCart(item);
                        }}
                        className="sale-product-btn-cart"
                      >
                        {" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <a
        href="/"
        className="sale-product-btn-collection"
        target="_blank"
        rel="noopener noreferrer"
      >
        Xem thêm
        <span>
          <i className="bi bi-arrow-right ms-2"></i>
        </span>
      </a>
    </>
  );
};

export default SaleSlider;
