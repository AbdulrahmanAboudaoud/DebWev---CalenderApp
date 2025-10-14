import React from "react";
import logo from "../../assets/cute-calendar-sticker-free-png-4225752480.png";
import "./NavBarStyle.css";

function NavbarLeftSide() {
  return (
      <div className="nav-left">
        <img className="logo" src={logo} alt="Calendar Logo" />
        <a href={"/"} className={"site-title"}>
          Calendify
        </a>
      </div>
  );
}

export default NavbarLeftSide;
