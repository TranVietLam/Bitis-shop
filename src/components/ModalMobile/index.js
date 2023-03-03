import React from "react";
import "./style.css";

import Modal from "react-bootstrap/Modal";

const ModalMobile = (props) => {
  return (
    <>
      <Modal show={props.isShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="header-mobile-modal">
            <div className="mobile-modal-title">
              <p>BITIS THU</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="global-menu-container">
            <div className="col-left"></div>
            <div className="col-right"></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalMobile;
