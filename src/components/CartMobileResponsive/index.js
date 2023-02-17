import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const CartMobile = () => {
  return (
    <>
      <div className="cart-mobile clearfix container">
        <div className="cart-mobile-title d-flex align-items-center justify-content-between">
          <Link to="/home">
            <i className="bi bi-caret-left-fill"></i>
            Giỏ hàng
          </Link>

          <button type="submit">Xóa toàn bộ</button>
        </div>
        <form method="post" action="/send-cart">
          <div className="cart-mobile-content">
            <table>
              <tbody>
                <tr className="cart-mobile-item">
                  <td>
                    <img
                      src="https://lacdau.com/media/product/250-1389-cee443f13b710b757de6b494265fc813.jpg"
                      alt="img"
                      className="cart-mobile-img"
                    />
                  </td>
                  <td>
                    <div className="content-pro-cat">
                      <div className="cpc-left">
                        <p className="mobile-item-name">
                          BỘ KEYCAP AKKO 9009 PBT SUBLIMATION
                        </p>
                        <div className="mobile-item-code">
                          Mã sản phẩm:
                          <span>KCB0061</span>
                        </div>
                      </div>
                      <div className="cpc-right">
                        <div className="mobile-item-price">390.000 đ</div>
                      </div>
                    </div>
                    <div className="content-pro-cat-bottom">
                      <div className="mobile-cart-quantity d-flex align-items-center">
                        <button type="submit" className="quantity-change">
                          -
                        </button>
                        <input
                          type="text"
                          className="mobile-cart-quantity"
                          value={1}
                        />
                        <button type="submit" className="quantity-change">
                          +
                        </button>
                      </div>
                      <button type="submit" className="delete-from-cart">
                        <i className="bi bi-trash me-1"></i>
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>
                    <div className="mobile-total-cart">
                      Tổng tiền đơn hàng
                      <div className="mobile-total-content">
                        <span className="mobile-total-price">390.000 đ</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="cart-mobile-infoCus"></div>
        </form>
      </div>
    </>
  );
};

export default CartMobile;
