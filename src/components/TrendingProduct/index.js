import React from "react";
import "./style.css";
import DataTrending from "./../../DataTrending/DataTrending";

const TrendingProduct = () => {
  return (
    <>
      <div className="mt-4">
        <div className="home-trending-group">
          <p className="box-title">XU HƯỚNG MUA SẮM</p>
          <div className="box-title-slider">
            {DataTrending.map((item, id) => (
              <a key={id} href="/" className="item">
                <img src={item.image} alt="images" className="trending-img" />
                <p className="trending-card-text">
                  <span>{item.title}</span>
                  <span className="trending-sale green">
                    {item.textDiscount}
                  </span>
                  <i className="icon-arrow"></i>
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProduct;
