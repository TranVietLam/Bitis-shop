import React from "react";
import "./cart.css";
import Breadcrumb from "./../../components/BreadcrumbTitle/index";
import { Link } from "react-router-dom";
import CartMobile from "../../components/CartMobileResponsive";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/actions/actions";
import { onAddToCart } from "./../../redux/actions/actions";

const Cart = () => {
  //product
  const { dataCart } = useSelector((state) => {
    return { dataCart: state.cartStore };
  });

  const dispatch = useDispatch();
  const handleRemoveProducts = (infoProduct) => {
    dispatch(deleteProduct(infoProduct));
  };

  const onChangeQuantity = (e, item) => {
    item.quantity = e.target.value;
    dispatch(onAddToCart(item));
  };
  // const [paymentDetail, setPaymentDetail] = useState(false);
  return (
    <>
      <Breadcrumb page="Thông tin giỏ hàng" />
      <CartMobile />
      <div className="container cart-page">
        <div className="cart-items-container">
          <div className="cart-items-header">
            <div className="item-header-title">
              <p className="m-0"> THÔNG TIN GIỎ HÀNG </p>
              <div>
                <Link to="/home" className="goHome d-inline-block">
                  <i className="bi bi-caret-left-fill"></i>
                  CHỌN TIẾP SẢN PHẨM KHÁC
                </Link>
                <button> XÓA GIỎ HÀNG </button>
              </div>
            </div>

            <div className="products-header">
              <div className="cart-col-1">Sản phẩm</div>
              <div className="cart-col-2">Đơn giá</div>
              <div className="cart-col-3">Số lượng</div>
              <div className="cart-col-4">Số tiền</div>
              <div className="cart-col-5">Thao tác</div>
            </div>
          </div>
          {dataCart.product.map((item, id) => (
            <div className="cart-items-body">
              <div className="shopping-cart-items cart-col-row">
                <div key={id} className="cart-col-1">
                  <a
                    href="/"
                    className="item-img"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.image}
                      alt="Products"
                    />
                  </a>
                  <div className="item-text">
                    <a href="/" className="d-inline-block font-700">
                     {item.name}
                    </a>
                    <p className="d-block item-code">Mã sản phẩm: {item.code}</p>
                  </div>
                </div>

                <div className="cart-col-2">
                  <p className="item-price">{item.price} đ</p>
                </div>

                <div className="cart-col-3 clearfix">
                  <button className="quantity-change"> - </button>
                  <input className="quantity-input" type="text" value={1} onChange={(e) => onChangeQuantity(e,item)} />
                  <button className="quantity-change"> + </button>
                </div>

                <div className="cart-col-4 text-danger">
                  <span className="item-price">{item.price} đ</span>
                </div>

                <div className="cart-col-5">
                  <button type="button" onClick={() => handleRemoveProducts(item)}>
                    <i className="bi bi-trash"></i>
                    Xoá
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
              ĐỊA CHỈ NHẬN HÀNG
            </p>
            <div className="d-flex">
              <div className="form-info-group">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  id="buyer-name"
                  name="user_info[name]"
                />
                <input
                  type="text"
                  placeholder="Email"
                  id="buyer-email"
                  name="user_info[email]"
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  id="buyer-tel"
                  name="user_info[tel]"
                />
                <select name="user_info[province]" id="buyer-province">
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
                <input
                  type="text"
                  placeholder="Quận/Huyện"
                  id="buyer-district"
                  name="user_info[district]"
                ></input>
                <input
                  type="text"
                  placeholder="Toà nhà, Tên đường..."
                  id="buyer-address"
                  name="user_info[address]"
                ></input>
              </div>
              <div className="form-info-group clearfix">
                <textarea
                  placeholder="Nhập ghi chú cho chúng tôi"
                  name="user_info[note]"
                  id="buyer-note"
                ></textarea>
                <div className="cart-btn-form">
                  <button type="submit">
                    <i className="bi bi-card-image"></i> TẢI ẢNH ĐƠN HÀNG{" "}
                  </button>
                  <button type="submit">
                    <i className="bi bi-file-earmark-excel"></i> TẢI FILE EXCEL
                  </button>
                  <button type="submit">
                    <i className="bi bi-printer me-2"></i>
                    IN BÁO GIÁ
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="customer-right">
            <div className="customer-right-title">
              <i className="bi bi-credit-card"></i>
              HÌNH THỨC THANH TOÁN
            </div>
            <div className="payment">
              <label className="label-container">
                <input
                  type="radio"
                  id="pay-method-1"
                  name="pay-method"
                  value={1}
                  checked
                />
                <span className="checkmark"></span>
                <span>Thanh toán tiền mặt khi nhận hàng</span>
              </label>
              <label className="label-container">
                <input
                  type="radio"
                  id="pay-method-2"
                  name="pay-method"
                  value={2}
                />
                <span className="checkmark"></span>
                <span>Thanh toán qua chuyển khoản</span>
                <div className="payment-detail">
                  - STK: 104604866879 <br />
                  - Chủ Tk: Trần Viết Lãm <br />- Chi nhánh: Đồng Nai
                </div>
              </label>
            </div>
            <div className="cart-total-price">
              Tổng tiền hàng (<span className="text-danger">1 sản phẩm</span>
              ):
              <b className="text-danger text-total-price">
                <span>390.000đ</span>
              </b>
            </div>
            <div className="cart-btn-buy clearfix">
              <button
                type="submit"
                className="w-100 font-weight-bold btn-buy-now"
              >
                ĐẶT MUA NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
