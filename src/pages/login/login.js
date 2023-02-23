import React from "react";
import "./login.css";

import "./login.css";
import Breadcrumb from "./../../components/BreadcrumbTitle/index";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Breadcrumb page="Đăng Ký Tài Khoản Thành Viên" />
      <div className="bg-white p-3">
        <div className="container">
          <div className="row login-page">
            <div className="col-lg-6 col-sm-12">
              <p className="login-title">
                <b>Thông tin khách hàng đăng nhập hệ thống</b>
              </p>
              <table cellPadding={5}>
                <tbody>
                  <tr>
                    <td>Email đăng nhập</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        size={25}
                        name="email"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mật khẩu</td>
                    <td>
                      <input
                        type="password"
                        className="form-control"
                        size={25}
                        name="password"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <div className="login-button-group">
                      <button type="submit" className="login-btn">
                        Đăng Nhập
                      </button>
                      <a href="/" className="forget-password">
                        Quên mật khẩu?
                      </a>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 col-sm-12">
              <p className="login-register-title">
                <b>Bạn chưa là thành viên ?</b>
              </p>
              <p>
                Đăng ký là thành viên để hưởng nhiều lợi ích và đặt mua hàng dễ
                dàng hơn.
              </p>
              <p>
                <Link to="/register" title="Click đăng ký tài khoản miễn phí" className="register-link">
                  <b>Đăng ký tài khoản</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
