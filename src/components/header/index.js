import "./header.css";
import React from "react";
import Logo from "../../Assets/images/logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import Menu from "./../MenuList/index";
import NavbarTablet from "./../NavbarTablet/index";

const Header = () => {
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
                      href="https://goo.gl/maps/eVNpqoLAagPwctjs7"
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
              <Link to="/register" className="user-section">
                Đăng Ký
              </Link>
              <span className="ms-2 me-2">/</span>
              <Link to="/login" className="user-section">
                Đăng Nhập
              </Link>
            </div>
          </div>
        </div>
        {/* Under Header */}
        <div className="container under-header-container">
          <div className="header-middle-group d-flex align-items-center">
            <Link href="/home" className="logo-store">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>

            <div className="header-menu-group">
              <p className="header-menu-title">
                <i className="bi bi-list-ul icon-list" />
                Danh Mục
              </p>
              <Menu />
            </div>

            <div className="header-search-group">
              <form
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
              </form>
            </div>

            <div className="header-right-group">
              <div className="header-right-item">
                <i className="icon-phone ringing me-3 bi bi-telephone-forward" />
                <a href="tel:0879259755" className="text font-700">
                  <div className="font-400 me-2 text-black">Hotline</div>
                  <b>0879.259.755</b>
                </a>
              </div>
              <div className="header-right-item">
                <i className="icons bi bi-lightning" />
                <a
                  href="https://www.messenger.com/t/100044646572165"
                  target="_blank"
                  className="advise-mess"
                  rel="noopener noreferrer"
                >
                  Tư vấn trực tiếp
                </a>
              </div>
              <div className="header-right-item item-cart">
                <a href="/cart" className="icons icon-cart bi bi-cart3">
                  <span className="cart-count">{cartAmount}</span>
                </a>
                <Link to="/cart" className="cart">
                  Giỏ hàng
                </Link>
                {/* cart hover */}
                <div className="header-cart-hover"></div>
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

// <div className="navbar py-lg-0 px-lg-0">
// <Link to="/home" className="navbar-brand ms-lg-4 ms-lg-0">
//   <div className="logo-store m-0">
//     <img src={Logo} alt="LogoStore" />
//   </div>
// </Link>

// </div>
