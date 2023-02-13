import React from "react";
import "./home.css";
import BannerHomePage from "./../../components/BannerHomePage/index";
import ProductSection from "../../components/ProductSection";
import TrendingProduct from "../../components/TrendingProduct";
import HomeBoxSlider from "../../components/HomeBoxSlider";

const Home = () => {
  return (
    <>
      <div className="container">
        <BannerHomePage />
        <ProductSection />
        <TrendingProduct />
        <HomeBoxSlider />
      </div>
    </>
  );
};

export default Home;
