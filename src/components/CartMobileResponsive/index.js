import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  minusQuantity,
  onAddToCart,
} from "./../../redux/actions/actions";
import { numberWithCommas } from "./../../Utils/index";
import ModalConfirm from "./../ModalConfirmDeleteProd/index";

const CartMobile = () => {
  // input
  const [nameUser, setNameUser] = useState("");
  const onChangeInputName = (e) => {
    const value = e.target.value;
    setNameUser(value);
  };

  const [emailUser, setEmailUser] = useState("");
  const onChangeInputEmail = (e) => {
    const value = e.target.value;
    setEmailUser(value);
  };

  const [phoneUser, setPhoneUser] = useState("");
  const onChangeInputPhone = (e) => {
    const value = e.target.value;
    setPhoneUser(value);
  };

  const [districtUser, setDistrictUser] = useState("");
  const onChangeInputDistrict = (e) => {
    const value = e.target.value;
    setDistrictUser(value);
  };

  const [addressUser, setAddressUser] = useState("");
  const onChangeInputAddress = (e) => {
    const value = e.target.value;
    setAddressUser(value);
  };

  const [note, setNote] = useState("");
  const onChangeNote = (e) => {
    const value = e.target.value;
    setNote(value);
  };

  //product
  const { dataCart } = useSelector((state) => {
    return { dataCart: state.cartStore };
  });

  const dispatch = useDispatch();
  const handleRemoveProducts = (infoProduct) => {
    setShow(true);
    setInfoProdForRemove(infoProduct);
  };

  const quantityPlus = (item) => {
    dispatch(onAddToCart(item));
  };

  const [infoProdForRemove, setInfoProdForRemove] = useState({});
  const [show, setShow] = useState(false);
  const quantityMinus = (item) => {
    if (item.quantity === 1) {
      setShow(true);
      setInfoProdForRemove(item);
    } else {
      dispatch(minusQuantity(item));
    }
  };

  return (
    <>
      <ModalConfirm
        show={show}
        handleClose={() => setShow(false)}
        handleConfirm={() => {
          dispatch(deleteProduct(infoProdForRemove));
          setShow(false);
        }}
      />
      <div className="cart-mobile clearfix container mb-3">
        <div className="cart-mobile-title d-flex align-items-center justify-content-between">
          <Link to="/home">
            <i className="bi bi-caret-left-fill"></i>
            Giỏ hàng
          </Link>

          <button type="submit">Xóa toàn bộ</button>
        </div>
        {dataCart.product.map((item, id) => (
          <div key={id} className="cart-mobile-content">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr className="cart-mobile-item">
                  <td>
                    <img
                      src={item.image}
                      alt="img"
                      className="cart-mobile-img"
                    />
                  </td>
                  <td>
                    <div className="content-pro-cat">
                      <div className="cpc-left">
                        <p className="mobile-item-name">{item.name}</p>
                        <div className="mobile-item-code">
                          Mã sản phẩm:
                          <span className="mx-2">{item.code}</span>
                        </div>
                      </div>
                      <div className="cpc-right">
                        <div className="mobile-item-price">
                          {numberWithCommas(item.price)} đ
                        </div>
                      </div>
                    </div>
                    <div className="content-pro-cat-bottom">
                      <div className="mobile-cart-quantity d-flex align-items-center">
                        <button
                          type="submit"
                          className="quantity-change"
                          onClick={() => quantityMinus(item)}
                        >
                          -
                        </button>
                        <div type="text" className="cart-quantity">
                          {item.quantity}
                        </div>
                        <button
                          type="button"
                          className="quantity-change"
                          onClick={() => quantityPlus(item)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="delete-from-cart"
                        onClick={() => handleRemoveProducts(item)}
                      >
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
                        <span className="mobile-total-price">
                          {numberWithCommas(item.totalPrice)}đ
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        ))}

        <div className="cart-mobile-infoCus">
          {/* Cart Thông tin khách hàng */}
          <div className="cart-ttkh cart-cus">
            <h3>Thông tin khách hàng</h3>
            <div className="form-group">
              <label>Họ tên*</label>
              <input
                type="text"
                name="user_info[name]"
                className="form-control"
                onChange={onChangeInputName}
                value={nameUser}
              />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="text"
                name="user_info[email]"
                className="form-control"
                onChange={onChangeInputEmail}
                value={emailUser}
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại*</label>
              <input
                type="text"
                name="user_info[tel]"
                className="form-control"
                onChange={onChangeInputPhone}
                value={phoneUser}
              />
            </div>
            <div className="form-group">
              <div className="box-district">
                <select name="user_info[province]" className="form-control">
                  <option value="0">Tỉnh/Thành phố</option>
                  <option value="1">Hà Nội</option>
                  <option value="2">TP HCM</option>
                  <option value="5">Hải Phòng</option>
                  <option value="4">Đà Nẵng</option>
                  <option value="6">An Giang</option>
                  <option value="7">Bà Rịa-Vũng Tàu</option>
                  <option value="13">Bình Dương</option>
                  <option value="15">Bình Phước</option>
                  <option value="16">Bình Thuận</option>
                  <option value="14">Bình Định</option>
                  <option value="8">Bạc Liêu</option>
                  <option value="10">Bắc Giang</option>
                  <option value="9">Bắc Kạn</option>
                  <option value="11">Bắc Ninh</option>
                  <option value="12">Bến Tre</option>
                  <option value="18">Cao Bằng</option>
                  <option value="17">Cà Mau</option>
                  <option value="3">Cần Thơ</option>
                  <option value="24">Gia Lai</option>
                  <option value="25">Hà Giang</option>
                  <option value="26">Hà Nam</option>
                  <option value="27">Hà Tĩnh</option>
                  <option value="30">Hòa Bình</option>
                  <option value="28">Hải Dương</option>
                  <option value="29">Hậu Giang</option>
                  <option value="31">Hưng Yên</option>
                  <option value="32">Khánh Hòa</option>
                  <option value="33">Kiên Giang</option>
                  <option value="34">Kon Tum</option>
                  <option value="35">Lai Châu</option>
                  <option value="38">Lào Cai</option>
                  <option value="36">Lâm Đồng</option>
                  <option value="37">Lạng Sơn</option>
                  <option value="39">Long An</option>
                  <option value="40">Nam Định</option>
                  <option value="41">Nghệ An</option>
                  <option value="42">Ninh Bình</option>
                  <option value="43">Ninh Thuận</option>
                  <option value="44">Phú Thọ</option>
                  <option value="45">Phú Yên</option>
                  <option value="46">Quảng Bình</option>
                  <option value="47">Quảng Nam</option>
                  <option value="48">Quảng Ngãi</option>
                  <option value="49">Quảng Ninh</option>
                  <option value="50">Quảng Trị</option>
                  <option value="51">Sóc Trăng</option>
                  <option value="52">Sơn La</option>
                  <option value="53">Tây Ninh</option>
                  <option value="56">Thanh Hóa</option>
                  <option value="54">Thái Bình</option>
                  <option value="55">Thái Nguyên</option>
                  <option value="57">Thừa Thiên-Huế</option>
                  <option value="58">Tiền Giang</option>
                  <option value="59">Trà Vinh</option>
                  <option value="60">Tuyên Quang</option>
                  <option value="61">Vĩnh Long</option>
                  <option value="62">Vĩnh Phúc</option>
                  <option value="63">Yên Bái</option>
                  <option value="19">Đắk Lắk</option>
                  <option value="22">Đồng Nai</option>
                  <option value="23">Đồng Tháp</option>
                  <option value="21">Điện Biên</option>
                  <option value="20">Đăk Nông</option>
                </select>
                <label>Quận/Huyện</label>
                <input
                  type="text"
                  name="user_info[district]"
                  className="form-control"
                  onChange={onChangeInputDistrict}
                  value={districtUser}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Địa chỉ*</label>
              <input
                type="text"
                name="user_info[address]"
                className="form-control"
                onChange={onChangeInputAddress}
                value={addressUser}
              />
            </div>
            <div className="form-group">
              <label>Ghi chú</label>
              <textarea
                name="user_info[note]"
                id="buyer_note"
                onChange={onChangeNote}
                value={note}
              ></textarea>
            </div>
          </div>
          {/* Cart Thông tin thanh toán */}
          <div className="cart-httt cart-cus">
            <h3>Hình thức thanh toán</h3>
            <label className="label-container">
              <input
                type="radio"
                id="pay-method-1"
                name="pay-method"
                value="1"
              />
              <span className="checkmark"></span>
              <span>Thanh toán tiền mặt khi nhận hàng</span>

              <div className="payment-detail"></div>
            </label>
            <label className="label-container">
              <input
                type="radio"
                id="pay-method-2"
                name="pay-method"
                defaultValue={2}
              />
              <span className="checkmark" />
              <span>Thanh toán qua chuyển khoản</span>
              <div className="payment-detail">
                - STK: 000.0000.0000 <br /> - Chủ Tk: Nguyễn Văn A <br />- Chi
                nhánh: Hà Nội
              </div>
            </label>
          </div>
          {/* Cart button thanh toán */}
          <div className="mobile-cart-btn">
            <div className="cart-btn-content">
              <button type="submit" className="download-orderImg">
                <i className="bi bi-card-image me-2"></i>
                TẢI ẢNH ĐƠN HÀNG
              </button>
              <button type="submit" className="order">
                ĐẶT HÀNG
              </button>
            </div>
            <Link to="/home">
              <i className="bi bi-caret-left-fill"></i>
              Tiếp tục tìm kiếm sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMobile;
