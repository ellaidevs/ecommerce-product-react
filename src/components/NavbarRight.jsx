import React from "react";
import { ReactComponent as IconCart } from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";

const NavbarRight = () => {
  return (
    <div className="navbar-right">
      <div className="svg-cart">
        <IconCart />
      </div>
      <div className="avatar">
        <img src={Avatar} alt="profile-picture" />
      </div>
    </div>
  );
};

export default NavbarRight;
