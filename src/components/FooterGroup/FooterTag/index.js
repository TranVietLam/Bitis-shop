import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const FooterTag = () => {
  return (
    <>
      <div className="footer-tag-group bg-white d-flex align-items-center flex-wrap">
        <b>Tìm hiểu thêm : </b>
        <Link to="/">
          <i className="bi bi-record2" />
          LÓT CHUỘT
        </Link>
        <Link to="/">
          <i className="bi bi-record2" />
          GAMING GEAR
        </Link>
        <Link to="/">
          <i className="bi bi-record2" />
          PHỤ KIỆN MÁY TÍNH
        </Link>
        <Link to="/">
          <i className="bi bi-record2" />
          MÔ HÌNH
        </Link>
        <Link to="/">
          <i className="bi bi-record2" />
          PHỤ KIỆN TRANG TRÍ
        </Link>
        <Link to="/">
          <i className="bi bi-record2" />
          LOA, MICRO, WEBCAM
        </Link>
        <Link to="/">
          <i className="bi bi-record2" />
          GHẾ GAMING
        </Link>
        <Link to="/">
          <i className="bi bi-record2" />
          BÀN GAMING
        </Link>
        <Link to="/">
          <i className="bi bi-record2" />
          USB, BỘ CHIA TÍN HIỆU
        </Link>
        <Link to="/">
          <i className="bi bi-record2" />
          TẢN NHIỆT, COOLING
        </Link>
      </div>
    </>
  );
};

export default FooterTag;
