import React from "react";
import "./home.css";
import BannerHomePage from './../../components/BannerHomePage/index';
import ProductSection from "../../components/ProductSection";

const Home = () => {
  return (
    <>
     <BannerHomePage />
     <ProductSection />
    </>
  );
};

export default Home;
