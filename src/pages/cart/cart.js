import React from "react";
import "./cart.css";
import Breadcrumb from "./../../components/BreadcrumbTitle/index";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Breadcrumb page="Thông tin giỏ hàng" />
      <div className="container cart-page">
        <div className="cart-items-container">
          <div className="cart-items-header">
            <div className="item-header-title">
              <p className="m-0"> THÔNG TIN GIỎ HÀNG </p>
              <div>
                <Link to="/home" className="goHome d-inline-block">
                  <i className="bi bi-caret-left-fill"></i>
                  CHỌN TIẾP SẢN PHẨM KHÁC
                </Link>
                <button> XÓA GIỎ HÀNG </button>
              </div>
            </div>

            <div className="products-header">
              <div className="cart-col-1">Sản phẩm</div>
              <div className="cart-col-2">Đơn giá</div>
              <div className="cart-col-3">Số lượng</div>
              <div className="cart-col-4">Số tiền</div>
              <div className="cart-col-5">Thao tác</div>
            </div>
          </div>

          <div className="cart-items-body">
            <div className="shopping-cart-items cart-col-row">
              <div className="cart-col-1">
                <a
                  href="/"
                  className="item-img"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://lacdau.com/media/product/75-1389-cee443f13b710b757de6b494265fc813.jpg"
                    alt="Products"
                  />
                </a>
                <div className="item-text">
                  <a href="/" className="d-inline-block font-700">
                    BỘ KEYCAP AKKO 9009 PBT SUBLIMATION
                  </a>
                  <p className="d-block item-code">Mã sản phẩm: KCB0061</p>
                </div>
              </div>

              <div className="cart-col-2">
                <p className="item-price">390.000 đ</p>
              </div>

              <div className="cart-col-3 clearfix">
                <button className="quantity-change"> - </button>
                <input className="quantity-input" type="text" value={1} />
                <button className="quantity-change"> + </button>
              </div>

              <div className="cart-col-4 text-danger">
                <span className="item-price">390.000 đ</span>
              </div>

              <div className="cart-col-5">
                <button>
                <i className="bi bi-trash"></i>
                Xoá
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
