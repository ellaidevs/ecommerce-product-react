import React from "react";
import Categories from "./Categories";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <h1 className="nav-title">sneakers</h1>
        <Categories />
        <NavbarRight />
      </div>
    </div>
  );
};

export default Navbar;
