import React, { useEffect, useState } from "react";
import "./home.css";
import BannerHomePage from "./../../components/BannerHomePage/index";
import ProductSection from "../../components/ProductSection";
import TrendingProduct from "../../components/TrendingProduct";
import HomeBoxSlider from "../../components/HomeBoxSlider";
import SocialConnect from "../../components/SocialConnect";
import { useDispatch } from "react-redux";
import { fectApi } from "../../redux/actions/actions";

//LoadingPage
import HashLoader from "react-spinners/HashLoader";
const override = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
};

const Home = () => {
  // loadingPage
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);

    // loadingPage
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  return (
    <>
      {isLoading ? (
        <HashLoader
          color={"#ff7d00"}
          cssOverride={override}
          loading={isLoading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="container">
          <BannerHomePage />
          <ProductSection />
          <TrendingProduct />
          <HomeBoxSlider />
          <SocialConnect />
        </div>
      )}
    </>
  );
};

export default Home;
