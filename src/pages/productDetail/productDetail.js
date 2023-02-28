import React from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";
import Breadcrumb from "./../../components/BreadcrumbTitle/index";
import ProductGallery from "../../components/ProductGallery";

const dataProduct = [
  {
    image:
      "https://lacdau.com/media/product/250-1382-6d2d77ddcf570fb9b77173c844e0d945.png",
    name: "keycap",
  },

  {
    image:
      "https://lacdau.com/media/product/75-1382-bb6287083f281f624cf3e3898213b450.jpg",
    name: "keycap",
  },

  {
    image:
      "https://lacdau.com/media/product/250-1382-0b7113807178b8848ba1ca97ca24b58d.jpg",
    name: "keycap",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <>
      <Breadcrumb page="Chi tiết sản phẩm" />
      <div className="product-detail-container container">
        <div className="pd-info-group pd-box-group bg-white d-flex">
          <div className="pd-box-left">
            <div className="pd-img-gallery">
              <ProductGallery dataProduct={dataProduct} />
            </div>
          </div>
          <div className="pd-box-middle">
            <h1 className="pd-name">BỘ KEYCAP AKKO BILIBILI PBT SUBLIMATION</h1>
            <div className="pd-sku-rating-group">
              Mã SP :<span className="green mx-2">KCB0065</span>
            </div>
            <div className="pd-summary-group">
              <b className="summary-title">Thông số sản phẩm</b>
              <div className="pd-summary-list">
                <div className="pd-summary-item">
                  <ul>
                    <li>
                      <i className="bi bi-info-circle-fill"></i>
                      <strong>Chất liệu : PBT</strong>
                    </li>
                    <li>
                      <i className="bi bi-info-circle-fill"></i>
                      <strong>Số nút : 108</strong>
                    </li>
                    <li>
                      <i className="bi bi-info-circle-fill"></i>
                      <strong>Profile : OEM</strong>
                    </li>
                    <li>
                      <i className="bi bi-info-circle-fill"></i>
                      <strong>Giá : 890k</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="pd-variant-group">
              <b className="variant-title">Tùy Chọn Sản Phẩm</b>
              <div className="pd-variant-group-holder"></div>
              <div className="pd-btn-variant"></div>
            </div> */}
            <div className="pd-price-group">
              <table>
                <tbody>
                  <tr>
                    <td>Giá bán:</td>
                    <td>
                      <del className="pd-old-price">890.000đ</del>
                    </td>
                  </tr>
                  <tr>
                    <td>Giá khuyến mại:</td>
                    <td>
                      <span className="pd-price">445.000đ</span>
                      <span className="pd-discount">(Tiết kiệm: 50%)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pd-btn-cart">
              <button className="btn-buy-now">MUA NGAY</button>
              <button className="btn-add-cart">THÊM VÀO GIỎ</button>
            </div>
          </div>
          <div className="pd-box-right">
            <div className="static-item">
              <p className="static-title">CHÍNH SÁCH MUA HÀNG</p>
              <div className="static-item-list">
                <p className="item">
                  <i className="icon-static icon-card"></i>
                  <span>Thanh toán thuận tiện</span>
                </p>
                <p className="item">
                  <i className="icon-static icon-shield"></i>
                  <span>Sản phẩm 100% chính hãng</span>
                </p>
                <p className="item">
                  <i className="icon-static icon-guarantee"></i>
                  <span>Bảo hành nhanh chóng</span>
                </p>
                <p className="item">
                  <i className="icon-static icon-truck"></i>
                  <span>Giao hàng toàn quốc</span>
                </p>
              </div>
            </div>
            <div className="static-item">
              <p className="static-title">HOTLINE HỖ TRỢ</p>
              <div className="static-item-list">
                <a href="/" className="item">
                  <i className="icon-static icon-phone"></i>
                  <span>Hotline CSKH: 0879.259.755</span>
                </a>
                <a href="/" className="item">
                  <i className="icon-static icon-phone"></i>
                  <span>Tư vấn mua hàng: 0879.259.755</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="pd-history-group pd-box-group"></div>
      </div>
    </>
  );
};

export default ProductDetail;
