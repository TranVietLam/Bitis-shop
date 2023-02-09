import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NavbarTablet = () => {
  return (
    <>
      <div className="under-navbar-container">
        <Link to="/home" className="under-nav-item">
          <i className="under-nav-icon bi bi-house"></i>
          <p className="under-nav-title">Trang Chủ</p>
        </Link>
        <Link to="" className="under-nav-item">
          <i className="under-nav-icon bi bi-list-ul"></i>
          <p className="under-nav-title">Danh Mục</p>
        </Link>
        <a href="tel:0879259755" className="under-nav-item">
          <i className="under-nav-icon bi bi-telephone-outbound"></i>
          <p className="under-nav-title">Hotline</p>
        </a>
        <Link to="/login" className="under-nav-item">
          <i className="under-nav-icon bi bi-person-circle"></i>
          <p className="under-nav-title">Tài Khoản</p>
        </Link>
      </div>
    </>
  );
};

export default NavbarTablet;