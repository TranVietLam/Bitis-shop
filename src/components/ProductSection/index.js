import React from "react";
import SaleSlider from "../../components/ProductSection/SaleProductSlider";
import "./style.css";

const ProductSection = () => {
  return (
    <>
      <div className="home-collection-group mt-4">
        <div className="box-title-group">
          <a className="box-title" href="/" target="_blank" rel="noopener noreferrer">
            XẢ LỖ CUỐI NĂM - SIÊU SALE ĂN MỪNG 200.000 LIKE FACEBOOK
          </a>
          <div className="home-collection-list">
            <a href="/" target="_blank" rel="noopener noreferrer">
              CHUỘT GAMING
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              BÀN PHÍM GAMING
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              TAI NGHE
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              LOA
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              GHẾ GAMING
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              BÀN GAMING
            </a>
          </div>
        </div>
        <div className="product-container">
          <SaleSlider />
        </div>
        <a href="/" className="btn-moredetail">
          {" "}
        </a>
      </div>
    </>
  );
};

export default ProductSection;
