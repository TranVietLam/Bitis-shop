import React, { useState, useEffect } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { onAddToCart } from "./../../../redux/actions/actions";
import ModalSuccess from "../../ModalSuccess";

const ProductsCard = (props) => {
  // modal Success
  const [show, setShow] = useState(false);
  useEffect(() => {
    //modal show
    const interval = setInterval(() => {
      setShow(false);
    }, 3300);

    return () => clearInterval(interval);
  }, []);

  const data = props.data;

  // handle Add Cart
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(onAddToCart(data));
    setShow(true);
  };
  return (
    <>
      <ModalSuccess show={show} />
      <div className="product-main my-3">
        <div className="product-card p-3">
          <div className="product-ribbon-wrap">
            <span className="product-ribbon-sale">Sale 10%</span>
          </div>
          <div className="product-main-heading mt-4 d-flex flex-column align-items-center">
            <div className="product-brand">Bitis</div>
            <div className="product-name">{data.name}</div>
          </div>
          <div className="product-img">
            <img src={data.image} alt="Air Max 270" />
          </div>
          <div className="mb-2 d-flex justify-content-between align-items-center flex-wrap">
            <div className="product-price">{data.price}</div>
            <div className="product-price-sale">{data.oldPrice}</div>
          </div>
          <div className="product-footer ">
            <div className="product-buy col-12">
              <button onClick={handleAddToCart} className="product-card-btn">
                Mua
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
