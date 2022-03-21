import React from "react";

import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import product1Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import product2Thumbnail from "../assets/image-product-2-thumbnail.jpg";
import product3Thumbnail from "../assets/image-product-3-thumbnail.jpg";
import product4Thumbnail from "../assets/image-product-4-thumbnail.jpg";

const Section = () => {
  return (
    <div className="section">
      <div className="left">
        <div className="product-display">
          <img src={product1} alt="main-product-display" />
        </div>
        <div className="thumnails">
          <img src={product1Thumbnail} alt="thumnail1" />
          <img src={product2Thumbnail} alt="thumnail2" />
          <img src={product3Thumbnail} alt="thumnail3" />
          <img src={product4Thumbnail} alt="thumnail4" />
        </div>
      </div>
      <div className="right">right</div>
    </div>
  );
};

export default Section;
