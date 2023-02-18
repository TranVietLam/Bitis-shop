import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";

const ModalConfirm = ({ show, handleClose, handleConfirm }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="modal-header flex-column">
            <div className="icon-box">
            <i className="bi bi-x-lg meterial-icons"></i>
            </div>
            <h4 className="modal-title w-100">Are you sure?</h4>
            <button type="button" className="close" onClick={handleClose}>
              ×
            </button>
          </div>
          <div className="modal-body">
            <p>
              Bạn có chắc rằng bạn muốn xóa sản phẩm không ? <br/>
              Nếu xóa sản phẩm sẽ không thể hoàn tác!!!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirm;
