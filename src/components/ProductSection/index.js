import React from "react";
import SaleSlider from "../SaleProductSlider";
import "./style.css";

const ProductSection = () => {
  return (
    <>
      <div className="container home-collection-group">
        <div className="box-title-group">
            <a href="/" target="_blank" rel="noopener noreferrer">XẢ LỖ CUỐI NĂM - SIÊU SALE ĂN MỪNG 200.000 LIKE FACEBOOK</a>
            <a href="/" target="_blank" rel="noopener noreferrer">CHUỘT GAMING</a>
            <a href="/" target="_blank" rel="noopener noreferrer">BÀN PHÍM GAMING</a>
            <a href="/" target="_blank" rel="noopener noreferrer">TAI NGHE</a>
            <a href="/" target="_blank" rel="noopener noreferrer">LOA</a>
            <a href="/" target="_blank" rel="noopener noreferrer">GHẾ GAMING</a>
            <a href="/" target="_blank" rel="noopener noreferrer">BÀN GAMING</a>
        </div>
        <div className="product-container">
          <SaleSlider/>
        </div>
        <a href="/" className="btn-moredetail"> </a>
      </div>
    </>
  );
};

export default ProductSection;
