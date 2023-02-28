import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register-container">
        <div className="register">
          <div className="form sign-up">
            <h2>Đăng Ký</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <i className="bi bi-person-fill"></i>
              <span>Tên Đăng Nhập*</span>
            </div>
            <div className="inputBox">
              <input type="text" required="required" />
              <i className="bi bi-envelope-fill"></i>
              <span>Địa Chỉ Email*</span>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <i className="bi bi-key-fill"></i>
              <span>Tạo Mật Khẩu*</span>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <i className="bi bi-key-fill"></i>
              <span>Xác Nhận Mật Khẩu*</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Tạo Tài Khoản" />
            </div>
            <p>
              Bạn đã có tài khoản thành viên ?{" "}
              <Link to="/login" className="login">
                Đăng Nhập
              </Link>
            </p>
          </div>
          <div className="form sign-in"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
