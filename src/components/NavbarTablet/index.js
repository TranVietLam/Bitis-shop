import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import ModalMobile from "../ModalMobile";

const NavbarTablet = () => {
  const navbarList = [
    {
      id: 1,
      icon: "under-nav-icon bi bi-house",
      label: "Trang Chủ",
      type: "link",
      url: "/home",
    },
    {
      id: 2,
      icon: "under-nav-icon bi bi-list-ul",
      label: "Danh Mục",
      type: "modal",
    },
    {
      id: 3,
      icon: "under-nav-icon bi bi-telephone",
      label: "Hotline",
      type: "phone",
      url: "tel:0879259755",
    },
    {
      id: 4,
      icon: "under-nav-icon bi bi-person-circle",
      label: "Tài Khoản",
      type: "link",
      url: "/products",
    },
  ];
  const [indexActive, setActive] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const onCloseModal = () => {
    setIsShowModal(false);
  };
  const navigate = useNavigate();
  const handleActive = (index, item) => {
    setActive(index);
    if (item.type === "link" && item.url.length > 0) {
      navigate(item.url);
    } else if (item.type === "phone") {
      window.location.href = item.url;
    } else if (item.type === "modal") {
      setIsShowModal(true);
    }
  };

  return (
    <>
      {isShowModal && (
        <ModalMobile isShow={isShowModal} handleClose={onCloseModal} />
      )}
      <div className="under-navbar-container">
        <div className="navigation">
          <ul>
            {navbarList.map((item, index) => (
              <li
                key={index}
                onClick={() => handleActive(index, item)}
                className={`navbar-list ${
                  index === indexActive ? "active" : ""
                }`}
              >
                <div className="wrapper-items">
                  <span className="navbar-icon">
                    <i className={item.icon}></i>
                  </span>
                  <span className="navbar-text">{item.label}</span>
                </div>
              </li>
            ))}
            {/*             
            <li className="navbar-list">
              <Link to="/home">
                <span className="navbar-icon">
                  <i className="under-nav-icon bi bi-list-ul"></i>
                </span>
                <span className="navbar-text">Danh Mục</span>
              </Link>
            </li>
            <li className="navbar-list">
              <a href="tel:0879259755">
                <span className="navbar-icon">
                  <i className="bi bi-telephone"></i>
                </span>
                <span className="navbar-text">Hotline</span>
              </a>
            </li>
            <li className="navbar-list">
              <Link to="/home">
                <span className="navbar-icon">
                  <i className="under-nav-icon bi bi-person-circle"></i>
                </span>
                <span className="navbar-text">Tài Khoản</span>
              </Link>
            </li> */}
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarTablet;
