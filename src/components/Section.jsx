import React from "react";
import LeftSection from "./LeftSection";
import { ReactComponent as IconCart } from "../assets/icon-cart.svg";
import { ReactComponent as IconMinus } from "../assets/icon-minus.svg";
import { ReactComponent as IconPlus } from "../assets/icon-plus.svg";

const Section = () => {
  return (
    <div className="section">
      <LeftSection />
      <div className="right">
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price-container">
          <div className="price-inline">
            <h2 className="price-tag">$125.00</h2>
            <h5 className="discount-tag">50%</h5>
          </div>
          <div>
            <h5 className="before-discount">$250.00</h5>
          </div>
        </div>
        <div className="cart-container">
          <div className="counter">
            <div className="decrement">
              <IconMinus />
            </div>
            <div className="number">0</div>
            <div className="increment">
              <IconPlus />
            </div>
          </div>
          <div className="addToCartBtn">
            <button>
              <IconCart className="btn-cart-svg" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
