import React, { useState } from "react";
import "./style.css";


const ProductGallery = ({dataProduct}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleImage = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <div className="big-image-holder">
        <img
          src={dataProduct[activeIndex]?.image}
          alt={dataProduct[activeIndex]?.name}
        />
      </div>
      <div className="under-image-holder">
        {dataProduct.map((item, index) => (
          <img
            onClick={() => handleImage(index)}
            className={activeIndex === index ? "active" : ""}
            key={index.toString()}
            src={item.image}
            alt={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default ProductGallery;
