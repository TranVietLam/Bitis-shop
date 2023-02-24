import React from "react";
import "./products.css";
import Breadcrumb from "./../../components/BreadcrumbTitle/index";

const Products = () => {
  return (
    <>
      <Breadcrumb page="Lót chuột" />
      <div className="product-page-container container">
        <div className="col-left">
          <div className="product-filter-container">
            <div className="product-filter-item">
              <p className="product-filter-title">HÃNG SẢN XUẤT</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DAREU</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">E-DRA</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">LẮC ĐẦU</span>
                </a>
              </div>
            </div>
            <div className="filter-item"></div>
            <div className="filter-item"></div>
            <div className="filter-item"></div>
            <div className="filter-item"></div>
          </div>
        </div>
        <div className="col-right"></div>
      </div>
    </>
  );
};

export default Products;
