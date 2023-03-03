import React from "react";
import "./style.css";

import Shoes from "../../../Assets/images/Products/1.png";

const ProductsCard = () => {
  return (
    <>
      <div className="product-main my-3">
        <div className="product-card p-3">
          <div className="product-ribbon-wrap">
            <span className="product-ribbon-sale">Sale 10%</span>
          </div>
          <div className="product-main-heading mt-4 d-flex flex-column align-items-center">
            <div className="product-brand">Bitis</div>
            <div className="product-name">Bitis Hunter</div>
          </div>
          <div className="product-img">
            <img src={Shoes} alt="Air Max 270" />
            <div>
              <button className="product-quick-view">Xem nhanh</button>
            </div>
          </div>
          <div className="mb-2 d-flex justify-content-between align-items-center flex-wrap">
            <div className="product-price-sale">1.575.000&nbsp;₫</div>
            <div className="product-price ">1.750.000&nbsp;₫</div>
          </div>
          <div className="product-footer ">
            <div className="product-like d-flex justify-content-center align-items-center">
              <i className="product-like-icon fs-5 bi bi-heart-fill" />
            </div>
            <div className="product-buy col-8 flex-grow-1">
              <button className="product-card-btn">Mua</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
