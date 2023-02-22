import React from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";

const ModalSuccess = ({ show }) => {
  return (
    <>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="content-container">
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
            <div className="content-text">
              Thêm sản phẩm vào giỏ hàng thành công !!!
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSuccess;
