import React from "react";
import "./NavBarStyle.css";
import notification from "../../assets/notification.png";
import NavbarRightSide from "./navbar-right-side";
import NavbarCenter from "./navbar-center";

function Navbar() {
  return (
    <nav className="NavBar">
      <div className="nav-left">
      <NavbarLeftSide/>
        <NavbarCenter/>
      </div>
      <div className="nav-right">
        <NavbarRightSide/>
      <NavbarRightSide/>
}

export default Navbar;
