import React from "react";
import "./style.css";
import Logo from "../../Assets/images/logo.png";

//acordition
import Accordion from "react-bootstrap/Accordion";

const Footer = () => {
  return (
    <>
      <div className="footer-info-group bg-white mt-4 mb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <a href="/" className="footer-logo d-block">
                <img src={Logo} alt="Logo" className="footer-img" />
              </a>
              <p className="footer-address-item">
                <i className="icon-map me-2"></i>
                <a
                  href="https://maps.app.goo.gl/jY682zFD6E5ZUYKB6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Địa chỉ : 47/1 Khu Phố : 5A P.Tân Biên - Biên Hòa - Đồng Nai
                </a>
              </p>
              <p className="footer-address-item">
                <i className="icon-phone"></i>
                <a href="tel:0879259755">0879259755</a>
              </p>
              <p className="footer-address-item">
                <i className="icon-email"></i>
                <a href="mailto:tranvietlam25051998@gmail.com">
                  tranvietlam25051998@gmail.com
                </a>
              </p>
              <div className="footer-social-media">
                <a
                  href="https://www.facebook.com/bitisthustore"
                  className="icon-footer-facebook me-2"
                ></a>
                <a
                  href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F100044646572165"
                  className="icon-messenger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-messenger"></i>
                </a>
                <a href="tel:0879259755" className="icon-phone-cirle"></a>
              </div>
            </div>
            <div className="accordion-mobile mt-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="footer-title">
                    HỖ TRỢ KHÁCH HÀNG
                  </Accordion.Header>
                  <Accordion.Body className="footer-info-list">
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Hướng dẫn mua hàng trực tuyến
                    </a>
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Hướng dẫn thanh toán
                    </a>
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Gửi yêu cầu bảo hành
                    </a>
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Góp ý, Khiếu nại
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="footer-title">
                    CHÍNH SÁCH CHUNG
                  </Accordion.Header>
                  <Accordion.Body>
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Chính sách, quy định chung
                    </a>
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Chính sách vận chuyển
                    </a>
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Chính sách bảo hành
                    </a>
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Chính sách đổi trả và hoàn tiền
                    </a>
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Chính sách xử lý khiếu nại
                    </a>
                    <a href="/">
                      <i className="bi bi-circle-fill"></i>
                      Bảo mật thông tin khách hàng
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-3 footer-info-item">
              <p className="footer-title">HỖ TRỢ KHÁCH HÀNG</p>
              <div className="footer-info-list">
                <a href="/">
                  <i className="bi bi-circle-fill"></i>
                  Hướng dẫn mua hàng trực tuyến
                </a>
                <a href="/">
                  <i className="bi bi-circle-fill"></i>
                  Hướng dẫn thanh toán
                </a>
                <a href="/">
                  <i className="bi bi-circle-fill"></i>
                  Gửi yêu cầu bảo hành
                </a>
                <a href="/">
                  <i className="bi bi-circle-fill"></i>
                  Góp ý, Khiếu nại
                </a>
              </div>
            </div>
            <div className="col-3 footer-info-item">
              <p className="footer-title">CHÍNH SÁCH CHUNG</p>
              <a href="/">
                <i className="bi bi-circle-fill"></i>
                Chính sách, quy định chung
              </a>
              <a href="/">
                <i className="bi bi-circle-fill"></i>
                Chính sách vận chuyển
              </a>
              <a href="/">
                <i className="bi bi-circle-fill"></i>
                Chính sách bảo hành
              </a>
              <a href="/">
                <i className="bi bi-circle-fill"></i>
                Chính sách đổi trả và hoàn tiền
              </a>
              <a href="/">
                <i className="bi bi-circle-fill"></i>
                Chính sách xử lý khiếu nại
              </a>
              <a href="/">
                <i className="bi bi-circle-fill"></i>
                Bảo mật thông tin khách hàng
              </a>
            </div>
            <div className="col-3 footer-info-item">
              <p className="footer-title">FANPAGE FACEBOOK</p>
              <div className="footer-info-list">
                <iframe
                  title="fanpage"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbitisthustore&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=492715174604716"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-end">
      © 2022 Cửa Hàng Bitis's Thu <br/>
      Địa chỉ : 47/5 Khu Phố 5B, Phường Tân Biên, Biên Hòa, Đồng Nai <br/>
      GPDKKD số 47A8080472 do UBND TP.Biên Hòa cấp ngày 04/10/2022
      </div>
    </>
  );
};

export default Footer;
