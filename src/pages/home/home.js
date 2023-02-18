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
        {/* {/* <iframe
          title="fanpage"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbitisthustore&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=492715174604716"
          width={340}
          height={500}
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder={0}
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        /> */}
      </div>
    </>
  );
};

export default Home;
