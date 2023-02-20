import React from "react";
import "./style.css";

const FooterNewsletter = () => {
  return (
    <>
      <div className="footer-newsletter-group d-flex flex-wrap align-items-center justify-content-center text-white">
        <div className="icons icon-mail"></div>
        <p className="newsletter-text">
          <b className="d-block">NHẬN TIN KHUYẾN MÃI</b>
          <span className="font-300 d-block">
            Bạn vui lòng để lại Email để nhận thông tin <br />
            khuyến mãi từ Bitis Thu
          </span>
        </p>
        <div className="newsletter-form position-relative">
          <input
            type="text"
            className="newsletter-input"
            placeholder="Nhập email đăng ký nhận tin khuyến mãi"
          />
          <button className="icons icon-submit d-block"></button>
        </div>
      </div>
    </>
  );
};

export default FooterNewsletter;
