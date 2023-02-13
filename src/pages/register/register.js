import React from "react";
import Breadcrumb from "../../components/BreadcrumbTitle";
import "./register.css";

const Register = () => {
  return (
    <div>
      <Breadcrumb page="Đăng Ký Tài Khoản Thành Viên" />
      <div className="container mt-5">
        <div className="box-register">
          <div className="register-title text-center">
            Tạo tài khoản khách hàng cá nhân
          </div>
          <div className="box-register-form">
            <div className="box-register-content-left">
              <form method="post">
                <div className="form-group">
                  <label>Email đăng ký*</label>
                  <div className="label-for">
                    <input type="text" className="inputText" size={50} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Tên</label>
                  <div className="label-for">
                    <input type="text" className="inputText" size={50} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Số điện thoại*</label>
                  <div className="label-for">
                    <input type="text" className="inputText" size={20} />
                  </div>
                </div>
                <div className="form-group gioitinh">
                  <label>Giới tính</label>
                  <div className="label-for">
                    <input
                      type="radio"
                      name="sex"
                      readOnly
                      value="Nam"
                      className="sex-input"
                    />
                    Nam
                    <input
                      type="radio"
                      name="sex"
                      readOnly
                      value="Nữ"
                      className="sex-input female"
                    />
                    Nữ
                  </div>
                </div>
                <div className="form-group birthday">
                  <label>Ngày sinh</label>
                  {/* Ngày */}
                  <select name="info[birthday]" className="select-birthday">
                    <option value={0}>- Ngày - </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                  </select>
                  {/* Tháng */}
                  <select name="info[birthmonth]" className="select-month">
                    <option value={0}>- Tháng - </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>
                  {/* Năm */}
                  <select name="info[birthyear]" className="select-year">
                    <option value={0}>Năm</option>
                    <option value={2020}>2020</option>{" "}
                    <option value={2019}>2019</option>{" "}
                    <option value={2018}>2018</option>{" "}
                    <option value={2017}>2017</option>{" "}
                    <option value={2016}>2016</option>{" "}
                    <option value={2015}>2015</option>{" "}
                    <option value={2014}>2014</option>{" "}
                    <option value={2013}>2013</option>{" "}
                    <option value={2012}>2012</option>{" "}
                    <option value={2011}>2011</option>{" "}
                    <option value={2010}>2010</option>{" "}
                    <option value={2009}>2009</option>{" "}
                    <option value={2008}>2008</option>{" "}
                    <option value={2007}>2007</option>{" "}
                    <option value={2006}>2006</option>{" "}
                    <option value={2005}>2005</option>{" "}
                    <option value={2004}>2004</option>{" "}
                    <option value={2003}>2003</option>{" "}
                    <option value={2002}>2002</option>{" "}
                    <option value={2001}>2001</option>{" "}
                    <option value={2000}>2000</option>{" "}
                    <option value={1999}>1999</option>{" "}
                    <option value={1998}>1998</option>{" "}
                    <option value={1997}>1997</option>{" "}
                    <option value={1996}>1996</option>{" "}
                    <option value={1995}>1995</option>{" "}
                    <option value={1994}>1994</option>{" "}
                    <option value={1993}>1993</option>{" "}
                    <option value={1992}>1992</option>{" "}
                    <option value={1991}>1991</option>{" "}
                    <option value={1990}>1990</option>{" "}
                    <option value={1989}>1989</option>{" "}
                    <option value={1988}>1988</option>{" "}
                    <option value={1987}>1987</option>{" "}
                    <option value={1986}>1986</option>{" "}
                    <option value={1985}>1985</option>{" "}
                    <option value={1984}>1984</option>{" "}
                    <option value={1983}>1983</option>{" "}
                    <option value={1982}>1982</option>{" "}
                    <option value={1981}>1981</option>{" "}
                    <option value={1980}>1980</option>{" "}
                    <option value={1979}>1979</option>{" "}
                    <option value={1978}>1978</option>{" "}
                    <option value={1977}>1977</option>{" "}
                    <option value={1976}>1976</option>{" "}
                    <option value={1975}>1975</option>{" "}
                    <option value={1974}>1974</option>{" "}
                    <option value={1973}>1973</option>{" "}
                    <option value={1972}>1972</option>{" "}
                    <option value={1971}>1971</option>{" "}
                    <option value={1970}>1970</option>{" "}
                    <option value={1969}>1969</option>{" "}
                    <option value={1968}>1968</option>{" "}
                    <option value={1967}>1967</option>{" "}
                    <option value={1966}>1966</option>{" "}
                    <option value={1965}>1965</option>{" "}
                    <option value={1964}>1964</option>{" "}
                    <option value={1963}>1963</option>{" "}
                    <option value={1962}>1962</option>{" "}
                    <option value={1961}>1961</option>{" "}
                    <option value={1960}>1960</option>{" "}
                    <option value={1959}>1959</option>{" "}
                    <option value={1958}>1958</option>{" "}
                    <option value={1957}>1957</option>{" "}
                    <option value={1956}>1956</option>{" "}
                    <option value={1955}>1955</option>{" "}
                    <option value={1954}>1954</option>{" "}
                    <option value={1953}>1953</option>{" "}
                    <option value={1952}>1952</option>{" "}
                    <option value={1951}>1951</option>{" "}
                    <option value={1950}>1950</option>{" "}
                    <option value={1949}>1949</option>{" "}
                    <option value={1948}>1948</option>{" "}
                    <option value={1947}>1947</option>{" "}
                    <option value={1946}>1946</option>{" "}
                    <option value={1945}>1945</option>{" "}
                    <option value={1944}>1944</option>{" "}
                    <option value={1943}>1943</option>{" "}
                    <option value={1942}>1942</option>{" "}
                    <option value={1941}>1941</option>{" "}
                    <option value={1940}>1940</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Mật khẩu*</label>
                  <div className="label-for">
                    <input
                      type="password"
                      className="inputText"
                      size={50}
                      name="info[password]"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Nhập lại mật khẩu*</label>
                  <div className="label-for">
                    <input
                      type="password"
                      className="inputText"
                      size={20}
                      name="info[password1]"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Địa chỉ*</label>
                  <div className="label-for">
                    <input
                      type="text"
                      className="inputText"
                      size={50}
                      name="info[address]"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Tỉnh/TP</label>
                  <div className="label-for">
                    <select
                      className="form-control mb-2"
                      id="ship_to_province"
                      name="info[province]"
                    >
                      <option value=""> Chọn tỉnh/Thành phố</option>

                      <option value="1"> Hà Nội </option>

                      <option value="2"> TP HCM </option>

                      <option value="5"> Hải Phòng </option>

                      <option value="4"> Đà Nẵng </option>

                      <option value="6"> An Giang </option>

                      <option value="7"> Bà Rịa-Vũng Tàu </option>

                      <option value="13"> Bình Dương </option>

                      <option value="15"> Bình Phước </option>

                      <option value="16"> Bình Thuận </option>

                      <option value="14"> Bình Định </option>

                      <option value="8"> Bạc Liêu </option>

                      <option value="10"> Bắc Giang </option>

                      <option value="9"> Bắc Kạn </option>

                      <option value="11"> Bắc Ninh </option>

                      <option value="12"> Bến Tre </option>

                      <option value="18"> Cao Bằng </option>

                      <option value="17"> Cà Mau </option>

                      <option value="3"> Cần Thơ </option>

                      <option value="24"> Gia Lai </option>

                      <option value="25"> Hà Giang </option>

                      <option value="26"> Hà Nam </option>

                      <option value="27"> Hà Tĩnh </option>

                      <option value="30"> Hòa Bình </option>

                      <option value="28"> Hải Dương </option>

                      <option value="29"> Hậu Giang </option>

                      <option value="31"> Hưng Yên </option>

                      <option value="32"> Khánh Hòa </option>

                      <option value="33"> Kiên Giang </option>

                      <option value="34"> Kon Tum </option>

                      <option value="35"> Lai Châu </option>

                      <option value="38"> Lào Cai </option>

                      <option value="36"> Lâm Đồng </option>

                      <option value="37"> Lạng Sơn </option>

                      <option value="39"> Long An </option>

                      <option value="40"> Nam Định </option>

                      <option value="41"> Nghệ An </option>

                      <option value="42"> Ninh Bình </option>

                      <option value="43"> Ninh Thuận </option>

                      <option value="44"> Phú Thọ </option>

                      <option value="45"> Phú Yên </option>

                      <option value="46"> Quảng Bình </option>

                      <option value="47"> Quảng Nam </option>

                      <option value="48"> Quảng Ngãi </option>

                      <option value="49"> Quảng Ninh </option>

                      <option value="50"> Quảng Trị </option>

                      <option value="51"> Sóc Trăng </option>

                      <option value="52"> Sơn La </option>

                      <option value="53"> Tây Ninh </option>

                      <option value="56"> Thanh Hóa </option>

                      <option value="54"> Thái Bình </option>

                      <option value="55"> Thái Nguyên </option>

                      <option value="57"> Thừa Thiên-Huế </option>

                      <option value="58"> Tiền Giang </option>

                      <option value="59"> Trà Vinh </option>

                      <option value="60"> Tuyên Quang </option>

                      <option value="61"> Vĩnh Long </option>

                      <option value="62"> Vĩnh Phúc </option>

                      <option value="63"> Yên Bái </option>

                      <option value="19"> Đắk Lắk </option>

                      <option value="22"> Đồng Nai </option>

                      <option value="23"> Đồng Tháp </option>

                      <option value="21"> Điện Biên </option>

                      <option value="20"> Đăk Nông </option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label></label>
                  <div className="label-for">
                    <input
                      type="button"
                      value="Đăng ký"
                      className="submit-register"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
