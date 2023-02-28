import React from "react";
import "./products.css";
import Breadcrumb from "./../../components/BreadcrumbTitle/index";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Breadcrumb page="Lót chuột" />
      <div className="product-page container">
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
            <div className="filter-item">
              <p className="product-filter-title">KHOẢNG GIÁ</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">Dưới 100 ngàn</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">100 ngàn - 200 ngàn</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">200 ngàn - 500 ngàn</span>
                </a>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">ĐỘ DÀY LÓT CHUỘT</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÀY 4MM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÀY 3MM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÀY 5MM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DÀY 2MM</span>
                </a>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">CHỦ ĐỀ LÓT CHUỘT</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DRAGON BALL</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">GUNDAM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">CARTOON</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">DC COMICS</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">NARUTO</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">VALORANT</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">PUBG</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">CYPER PUNK</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">HÃNG GAME</span>
                </a>
              </div>
            </div>
            <div className="filter-item">
              <p className="product-filter-title">KÍCH THƯỚC LÓT CHUỘT</p>
              <div className="product-filter-list">
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">45x40CM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">90x35CM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">40x30CM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">80x30CM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">26x21CM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">80x40CM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">35x30CM</span>
                </a>
                <a href="/">
                  <i className="icon-square"></i>
                  <span className="filter-title">90x40CM</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right">
          <div className="product-title-group">
            <h1 className="product-title">LÓT CHUỘT</h1>
            <span>(7 sản phẩm)</span>
          </div>
          <div className="product-holder-group">
            <div className="sort-by-group">
              <div className="sort-by-list">
                <a href="/">Hàng mới</a>
                <a href="/">Giá tăng dần</a>
                <a href="/">Giá giảm dần</a>
                <a href="/">Xem nhiều</a>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <div className="choose-price-holder">
                  <input
                    type="text"
                    placeholder="Giá thấp nhất"
                    className="price-range"
                  />
                  <span>-</span>
                  <input
                    type="text"
                    placeholder="Giá cao nhất"
                    className="price-range"
                  />
                </div>

                <button type="submit" className="submit-filter">
                  Tìm
                </button>
                <select className="sort-select-item">
                  <option value={0}>Lọc sản phẩm</option>
                  <option value={1}>Còn hàng</option>
                  <option value={3}>Trao đổi</option>
                  <option value={4}>Đánh giá</option>
                  <option value={5}>Tên A-Z</option>
                </select>
                {/* <div className="display-group">
                  <a href="/" className="icons-product icon-grid active" />
                  <a href="/" className="icons-product icon-list " />
                </div> */}
              </div>
            </div>
            <div className="product-container">
              <div className="product-item">
                <Link to="/" className="product-img">
                  <img
                    src="https://lacdau.com/media/product/250-607-4e4147f80c0070f1087777b70aca74bd.jpg"
                    alt="dareu"
                  />
                </Link>
                <div className="product-text">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="product-code">Mã: PADDR0003</p>
                    <p className="product-qty conhang">Còn hàng </p>
                  </div>
                  <Link to="/" className="product-name">
                    <h3>PAD 33 DAREU ESP101 5MM HỒNG</h3>
                  </Link>
                  <div className="product-price-container">
                    <span className="product-price">55.000đ</span>
                    <button className="product-btn-cart"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;