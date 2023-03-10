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
            Gi??? h??ng
          </Link>

          <button type="submit">X??a to??n b???</button>
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
                          M?? s???n ph???m:
                          <span className="mx-2">{item.code}</span>
                        </div>
                      </div>
                      <div className="cpc-right">
                        <div className="mobile-item-price">
                          {numberWithCommas(item.price)} ??
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
                        X??a
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>
                    <div className="mobile-total-cart">
                      T???ng ti???n ????n h??ng
                      <div className="mobile-total-content">
                        <span className="mobile-total-price">
                          {numberWithCommas(item.totalPrice)}??
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
          {/* Cart Th??ng tin kh??ch h??ng */}
          <div className="cart-ttkh cart-cus">
            <h3>Th??ng tin kh??ch h??ng</h3>
            <div className="form-group">
              <label>H??? t??n*</label>
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
              <label>S??? ??i???n tho???i*</label>
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
                  <option value="0">T???nh/Th??nh ph???</option>
                  <option value="1">H?? N???i</option>
                  <option value="2">TP HCM</option>
                  <option value="5">H???i Ph??ng</option>
                  <option value="4">???? N???ng</option>
                  <option value="6">An Giang</option>
                  <option value="7">B?? R???a-V??ng T??u</option>
                  <option value="13">B??nh D????ng</option>
                  <option value="15">B??nh Ph?????c</option>
                  <option value="16">B??nh Thu???n</option>
                  <option value="14">B??nh ?????nh</option>
                  <option value="8">B???c Li??u</option>
                  <option value="10">B???c Giang</option>
                  <option value="9">B???c K???n</option>
                  <option value="11">B???c Ninh</option>
                  <option value="12">B???n Tre</option>
                  <option value="18">Cao B???ng</option>
                  <option value="17">C?? Mau</option>
                  <option value="3">C???n Th??</option>
                  <option value="24">Gia Lai</option>
                  <option value="25">H?? Giang</option>
                  <option value="26">H?? Nam</option>
                  <option value="27">H?? T??nh</option>
                  <option value="30">H??a B??nh</option>
                  <option value="28">H???i D????ng</option>
                  <option value="29">H???u Giang</option>
                  <option value="31">H??ng Y??n</option>
                  <option value="32">Kh??nh H??a</option>
                  <option value="33">Ki??n Giang</option>
                  <option value="34">Kon Tum</option>
                  <option value="35">Lai Ch??u</option>
                  <option value="38">L??o Cai</option>
                  <option value="36">L??m ?????ng</option>
                  <option value="37">L???ng S??n</option>
                  <option value="39">Long An</option>
                  <option value="40">Nam ?????nh</option>
                  <option value="41">Ngh??? An</option>
                  <option value="42">Ninh B??nh</option>
                  <option value="43">Ninh Thu???n</option>
                  <option value="44">Ph?? Th???</option>
                  <option value="45">Ph?? Y??n</option>
                  <option value="46">Qu???ng B??nh</option>
                  <option value="47">Qu???ng Nam</option>
                  <option value="48">Qu???ng Ng??i</option>
                  <option value="49">Qu???ng Ninh</option>
                  <option value="50">Qu???ng Tr???</option>
                  <option value="51">S??c Tr??ng</option>
                  <option value="52">S??n La</option>
                  <option value="53">T??y Ninh</option>
                  <option value="56">Thanh H??a</option>
                  <option value="54">Th??i B??nh</option>
                  <option value="55">Th??i Nguy??n</option>
                  <option value="57">Th???a Thi??n-Hu???</option>
                  <option value="58">Ti???n Giang</option>
                  <option value="59">Tr?? Vinh</option>
                  <option value="60">Tuy??n Quang</option>
                  <option value="61">V??nh Long</option>
                  <option value="62">V??nh Ph??c</option>
                  <option value="63">Y??n B??i</option>
                  <option value="19">?????k L???k</option>
                  <option value="22">?????ng Nai</option>
                  <option value="23">?????ng Th??p</option>
                  <option value="21">??i???n Bi??n</option>
                  <option value="20">????k N??ng</option>
                </select>
                <label>Qu???n/Huy???n</label>
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
              <label>?????a ch???*</label>
              <input
                type="text"
                name="user_info[address]"
                className="form-control"
                onChange={onChangeInputAddress}
                value={addressUser}
              />
            </div>
            <div className="form-group">
              <label>Ghi ch??</label>
              <textarea
                name="user_info[note]"
                id="buyer_note"
                onChange={onChangeNote}
                value={note}
              ></textarea>
            </div>
          </div>
          {/* Cart Th??ng tin thanh to??n */}
          <div className="cart-httt cart-cus">
            <h3>H??nh th???c thanh to??n</h3>
            <label className="label-container">
              <input
                type="radio"
                id="pay-method-1"
                name="pay-method"
                value="1"
              />
              <span className="checkmark"></span>
              <span>Thanh to??n ti???n m???t khi nh???n h??ng</span>

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
              <span>Thanh to??n qua chuy???n kho???n</span>
              <div className="payment-detail">
                - STK: 000.0000.0000 <br /> - Ch??? Tk: Nguy???n V??n A <br />- Chi
                nh??nh: H?? N???i
              </div>
            </label>
          </div>
          {/* Cart button thanh to??n */}
          <div className="mobile-cart-btn">
            <div className="cart-btn-content">
              <button type="submit" className="download-orderImg">
                <i className="bi bi-card-image me-2"></i>
                T???I ???NH ????N H??NG
              </button>
              <button type="submit" className="order">
                ?????T H??NG
              </button>
            </div>
            <Link to="/home">
              <i className="bi bi-caret-left-fill"></i>
              Ti???p t???c t??m ki???m s???n ph???m
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMobile;
