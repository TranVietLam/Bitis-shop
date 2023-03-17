import "./header.css";
import React from "react";
import Logo from "../../Assets/images/Logo/logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NavbarTablet from "../../components/NavbarTablet/index";
import { onAddToCart } from "../../redux/actions/actions";
import { numberWithCommas } from "../../Utils/index";

const Header = () => {
  //product render
  const { dataCart } = useSelector((state) => {
    return { dataCart: state.cartStore };
  });


  const dispatch = useDispatch();
  const onChangeQuantity = (e, item) => {
    item.quantity = e.target.value;
    dispatch(onAddToCart(item));
  };
  //Navbar Animation
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  const cartAmount = useSelector((state) => state.cartStore.product.length);
  return (
    <>
      <div className={navbar ? "fixed-top active" : "fixed-top"}>
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <span className="contact-address">
              <i className="bi bi-geo-alt-fill me-2" />
              Địa chỉ liên hệ
              <div className="contact-address-holder">
                <p className="holder-item-title">Địa Chỉ</p>
                <div className="holder-container">
                  <div className="holder-item">
                    <a
                      href="https://maps.app.goo.gl/jY682zFD6E5ZUYKB6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-geo-alt"></i>
                      <span>
                        Địa chỉ : 47/1 Khu Phố : 5A P.Tân Biên - Biên Hòa - Đồng
                        Nai
                      </span>
                    </a>
                  </div>
                  <div className="holder-item">
                    <a href="tel:0879259755">
                      <i className="bi bi-telephone-forward"></i>
                      <span>Số Điện Thoại : 0879259755</span>
                    </a>
                  </div>

                  <div className="holder-item">
                    <a href="mailto:tranvietlam25051998@gmail.com">
                      <i className="bi bi-envelope-at"></i>
                      <span>Địa chỉ email : Tranvietlam25051998@gmail.com</span>
                    </a>
                  </div>

                  <div className="holder-item">
                    <i className="bi bi-alarm"></i>
                    <span>Giờ mở cửa : 7h - 21h</span>
                  </div>

                  <div className="holder-item">
                    <i className="bi bi-calendar-check"></i>
                    <span>Mở Cửa Vào Các Ngày Trong Tuần</span>
                  </div>
                </div>
              </div>
            </span>

            <span className="ms-4">/</span>

            <span className="hotline-support ms-4">
              <i className="bi bi-headset me-2 fs-5" />
              Hotline trực tuyến
              <div className="hotline-support-holder">
                <div className="holder-item-title">
                  Phòng Kinh Doanh - Tư Vấn
                </div>
                <div className="holder-item">
                  <a href="tel:0879259755">
                    <i className="bi bi-telephone-forward"></i>
                    <span>Hotline : 0879259755</span>
                  </a>
                </div>

                <div className="holder-item">
                  <a
                    href="https://zalo.me/0879259755"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-telephone-forward"></i>
                    <span>Zalo : 0879259755</span>
                  </a>
                </div>
              </div>
            </span>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <div className="header-right">
              <i className="bi bi-person-circle"></i>
              <NavLink to="/register" className="user-section">
                Đăng Ký
              </NavLink>
              <span className="ms-2 me-2">/</span>
              <NavLink to="/login" className="user-section">
                Đăng Nhập
              </NavLink>
            </div>
          </div>
        </div>
        {/* Under Header */}
        <div className="container under-header-container">
          <div className="header-middle-group d-flex align-items-center">
            <NavLink to="/home" className="logo-store">
              <img src={Logo} alt="Logo" className="logo" />
            </NavLink>

            <div className="header-menu-group">
              <Link to="/products" className="header-menu-title">
                <i className="bi bi-ui-checks-grid"></i>
                Sản Phẩm
              </Link>
            </div>

            <div className="header-search-group">
              <div
                method="get"
                action="/tim"
                name="search"
                className="search-input-group bg-white position-relative"
              >
                <button type="submit" className="bi bi-search icon-search" />
                <input
                  type="text"
                  placeholder="Bạn cần tìm gì?"
                  autoComplete="off"
                  className="text-search"
                />
              </div>
            </div>

            <div className="header-right-group">
              <div className="header-right-item">
                <i className="icon-phones ringing me-3 bi bi-telephone-forward" />
                <a href="tel:0879259755" className="text font-700">
                  <div className="fw-bold me-2 text-black">Hotline</div>
                  <b>0879.259.755</b>
                </a>
              </div>
              <div className="header-right-item">
                <i className="icon-lightning bi bi-lightning-fill" />
                <a
                  href="https://www.messenger.com/t/100044646572165"
                  target="_blank"
                  className="advise-mess fw-bold"
                  rel="noopener noreferrer"
                >
                  Tư vấn trực tiếp
                </a>
              </div>
              <div className="header-right-item item-cart">
                <a href="/cart" className="icons-header icon-cart bi bi-cart3">
                  <span className="cart-count">{cartAmount}</span>
                </a>
                <NavLink to="/cart" className="cart">
                  Giỏ hàng
                </NavLink>
                {/* cart hover */}
                <div className="header-cart-hover">
                  {dataCart.product.length === 0 && (
                    <div className="text-center p-4 fw-bold fs-6">
                      Có 0 sản phẩm trong giỏ hàng
                    </div>
                  )}
                  {dataCart.product.length > 0 && (
                    <>
                      <div className="cart-items-holder">
                        {dataCart.product.map((item, id) => (
                          <div key={id}>
                            <div className="cart-item">
                              <Link to="/cart" className="cart-img">
                                <img src={item.image} alt="images" />
                              </Link>
                              <div className="cart-text">
                                <Link
                                  to="cart"
                                  className="d-block font-700 cart-name"
                                >
                                  {item.name}
                                </Link>
                                <p className="m-0 d-flex justify-content-between">
                                  <b
                                    onChange={(e) => onChangeQuantity(e, item)}
                                  >
                                    x{item.quantity}
                                  </b>
                                  <b className="text-danger fw-semibold fs-6">
                                    {numberWithCommas(item.price)} đ
                                  </b>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="cart-price-holder">
                        <p className="text-secondary font-400 m-0 text-end">
                          Tổng tiền hàng
                          <span className="text-danger">
                            (
                            <span className="cart-counts text-danger me-1">
                              {dataCart.product.length}
                            </span>
                            sản phẩm):
                          </span>
                          <span className="text-danger text-18 fw-semibold mx-2 fs-5">
                            {numberWithCommas(dataCart.totalPrice)} đ
                          </span>
                        </p>
                        <Link
                          to="/cart"
                          className="d-block text-center text-white btn-goCart"
                        >
                          THANH TOÁN NGAY
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavbarTablet />
    </>
  );
};

export default Header;
