import React, { useRef, useState } from "react";
import "./cart.css";
import Breadcrumb from "../../components/BreadcrumbTitle/index";
import { Link } from "react-router-dom";
import CartMobile from "../../components/CartMobileResponsive";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  onAddToCart,
  minusQuantity,
} from "../../redux/actions/actions";
import { numberWithCommas } from "../../Utils/index";
import ModalConfirm from "../../components/ModalConfirmDeleteProd";
import { deleteAllProduct } from "../../redux/actions/actions";

const Cart = () => {
  const typeDelete = useRef(null);
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

  //fetch products from redux
  const { dataCart } = useSelector((state) => {
    return { dataCart: state.cartStore };
  });

  const dispatch = useDispatch();
  const handleRemoveProducts = (infoProduct, type) => {
    typeDelete.current = type;
    setShow(true);
    setInfoProdForRemove(infoProduct);
  };

  const handleRemoveAllProducts = () => {
    typeDelete.current = "all";
    setShow(true);
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

  window.scrollTo(0, 0);

  const [paymentDetail, setPaymentDetail] = useState(false);
  return (
    <>
      <ModalConfirm
        show={show}
        handleClose={() => setShow(false)}
        handleConfirm={() => {
          if (typeDelete.current === "single") {
            dispatch(deleteProduct(infoProdForRemove));
          } else if (typeDelete.current === "all") {
            dispatch(deleteAllProduct());
          }
          typeDelete.current = "";
          setShow(false);
        }}
      />
      <Breadcrumb page="Th??ng tin gi??? h??ng" />
      <CartMobile />
      <div className="container cart-page">
        {dataCart.product.length === 0 && (
          <div className="cart-noneProducts text-center">
            C?? 0 S???n Ph???m Trong Gi??? H??ng
          </div>
        )}
        {dataCart.product.length > 0 && (
          <>
            <div className="cart-items-container">
              <div className="cart-items-header">
                <div className="item-header-title">
                  <p className="m-0"> TH??NG TIN GI??? H??NG </p>
                  <div>
                    <Link to="/home" className="goHome d-inline-block">
                      <i className="bi bi-caret-left-fill"></i>
                      CH???N TI???P S???N PH???M KH??C
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleRemoveAllProducts()}
                    >
                      {" "}
                      X??A GI??? H??NG{" "}
                    </button>
                  </div>
                </div>

                <div className="products-header">
                  <div className="cart-col-1">S???n ph???m</div>
                  <div className="cart-col-2">????n gi??</div>
                  <div className="cart-col-3">S??? l?????ng</div>
                  <div className="cart-col-4">S??? ti???n</div>
                  <div className="cart-col-5">Thao t??c</div>
                </div>
              </div>
              {dataCart.product.map((item, id) => (
                <div key={id} className="cart-items-body">
                  <div className="shopping-cart-items cart-col-row">
                    <div className="cart-col-1">
                      <a
                        href="/"
                        className="item-img"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={item.image} alt="Products" />
                      </a>
                      <div className="item-text">
                        <a href="/" className="d-inline-block font-700">
                          {item.name}
                        </a>
                        <p className="d-block item-code">
                          M?? s???n ph???m: {item.code}
                        </p>
                      </div>
                    </div>

                    <div className="cart-col-2">
                      <p className="item-price">
                        {numberWithCommas(item.price)} ??
                      </p>
                    </div>

                    <div className="cart-col-3 clearfix">
                      <button
                        className="quantity-change"
                        onClick={() => quantityMinus(item)}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <div className="quantity-input">{item.quantity}</div>
                      <button
                        className="quantity-change"
                        onClick={() => quantityPlus(item)}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>

                    <div className="cart-col-4 text-danger">
                      <span className="item-price">
                        {numberWithCommas(item.totalPrice)} ??
                      </span>
                    </div>

                    <div className="cart-col-5">
                      <button
                        type="button"
                        onClick={() => handleRemoveProducts(item, "single")}
                      >
                        <i className="bi bi-trash"></i>
                        Xo??
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-customer-container clearfix">
              <div className="customer-left">
                <p className="customer-left-title">
                  <i className="bi bi-pin-map-fill"></i>
                  ?????A CH??? NH???N H??NG
                </p>
                <div className="d-flex">
                  <div className="form-info-group">
                    <input
                      type="text"
                      placeholder="H??? v?? t??n"
                      id="buyer-name"
                      name="user_info[name]"
                      onChange={onChangeInputName}
                      value={nameUser}
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      id="buyer-email"
                      name="user_info[email]"
                      onChange={onChangeInputEmail}
                      value={emailUser}
                    />
                    <input
                      type="text"
                      placeholder="S??? ??i???n tho???i"
                      id="buyer-tel"
                      name="user_info[tel]"
                      onChange={onChangeInputPhone}
                      value={phoneUser}
                    />
                    <select name="user_info[province]" id="buyer-province">
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
                    <input
                      type="text"
                      placeholder="Qu???n/Huy???n"
                      id="buyer-district"
                      name="user_info[district]"
                      onChange={onChangeInputDistrict}
                      value={districtUser}
                    ></input>
                    <input
                      type="text"
                      placeholder="To?? nh??, T??n ???????ng..."
                      id="buyer-address"
                      name="user_info[address]"
                      onChange={onChangeInputAddress}
                      value={addressUser}
                    ></input>
                  </div>
                  <div className="form-info-group clearfix">
                    <textarea
                      placeholder="Nh???p ghi ch?? cho ch??ng t??i"
                      name="user_info[note]"
                      id="buyer-note"
                      onChange={onChangeNote}
                      value={note}
                    ></textarea>
                    <div className="cart-btn-form">
                      <button type="submit">
                        <i className="bi bi-card-image"></i> T???I ???NH ????N H??NG{" "}
                      </button>
                      <button type="submit">
                        <i className="bi bi-file-earmark-excel"></i> T???I FILE
                        EXCEL
                      </button>
                      <button type="submit">
                        <i className="bi bi-printer me-2"></i>
                        IN B??O GI??
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customer-right">
                <div className="customer-right-title">
                  <i className="bi bi-credit-card"></i>
                  H??NH TH???C THANH TO??N
                </div>
                <div className="payment">
                  <label className="label-container">
                    <input
                      onClick={() => setPaymentDetail(false)}
                      type="radio"
                      id="pay-method-1"
                      name="pay-method"
                      value={1}
                    />
                    <span className="checkmark"></span>
                    <span>Thanh to??n ti???n m???t khi nh???n h??ng</span>
                  </label>
                  <label className="label-container">
                    <input
                      onClick={() => setPaymentDetail(true)}
                      type="radio"
                      id="pay-method-2"
                      name="pay-method"
                      value={2}
                    />
                    <span className="checkmark"></span>
                    <span>Thanh to??n qua chuy???n kho???n</span>
                    {paymentDetail && (
                      <div className="payment-detail">
                        - STK: 104604866879 <br />
                        - Ch??? Tk: Tr???n Vi???t L??m <br />- Chi nh??nh: ?????ng Nai
                      </div>
                    )}
                  </label>
                </div>
                <div className="cart-total-price">
                  T???ng ti???n h??ng (
                  <span className="text-danger">
                    {dataCart.totalQuantity} s???n ph???m
                  </span>
                  ):
                  <b className="text-danger text-total-price">
                    <span>{numberWithCommas(dataCart.totalPrice)} ??</span>
                  </b>
                </div>
                <div className="cart-btn-buy clearfix">
                  <button
                    type="submit"
                    className="w-100 font-weight-bold btn-buy-now"
                  >
                    ?????T MUA NGAY
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
