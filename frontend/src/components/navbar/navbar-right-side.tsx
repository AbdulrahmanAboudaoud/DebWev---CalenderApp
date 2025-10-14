import React from "react";
import "./NavBarStyle.css";
import notification from "../../assets/notification.png";

function NavbarRightSide() {
  return (
<div className="nav-right">
        <p className={"UsersName"}>John Doe</p>
        <a href={"#"} className={"NotificationBell"}>
          <img className="bell" src={notification} alt="Notification Bell" />
        </a>
        <button className="logoutButton">Log Out</button>
      </div>
  );
}

export default NavbarRightSide;
