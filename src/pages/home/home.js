import React from "react";
import "./home.css";
import Banner from "./../../components/banner/banner";

// icon
import Collection from "../../Assets/images/icon-img/collections.jpg";
import Boots from "../../Assets/images/icon-img/boots.jpg";
import HighHeel from "../../Assets/images/icon-img/highheel.jpg";
import SportShoe from "../../Assets/images/icon-img/sportshoe.jpg";
const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Container Content Section */}
      <div className="section-content">
        <div className="row align-content-center icon-select">
          <div className="col icon-select-left col-md-12 col-sm-12 col-lg-6">
            <div className="col-inner-left">
              <div className="row overflow-hidden row-solid">
                <div className="col col-md-3 col-sm-6 col-lg-3">
                  <div className="item-select">
                    <img src={Collection} alt="" />
                  </div>
                  <div className="icon-box-text">
                    <h5>Bộ Sưu Tập</h5>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-6 col-lg-3 before-after">
                  <div className="item-select">
                    <img src={Boots} alt="" />
                  </div>
                  <div className="icon-box-text">
                    <h5>Boots</h5>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-6 col-lg-3">
                  <div className="item-select">
                    <img src={HighHeel} alt="" />
                  </div>
                  <div className="icon-box-text">
                    <h5>Cao Gót</h5>
                  </div>
                </div>
                <div className="col col-md-3 col-sm-6 col-lg-3">
                  <div className="item-select">
                    <img src={SportShoe} alt="" />
                  </div>
                  <div className="icon-box-text">
                    <h5>Thể Thao</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
