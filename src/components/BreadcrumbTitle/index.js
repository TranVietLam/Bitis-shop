import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Breadcrumb = ({ page }) => {
  return (
    <>
      <div className="breadcrumb-container container">
        <div className="col-lg-12 d-flex py-3">
          <Link className="breadcrumb-text" to="/home">
            Trang Chủ
          </Link>
          <span className="me-2 ms-2 text-black">/</span>
          <p className="breadcrumb-text-current m-0">{page}</p>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
