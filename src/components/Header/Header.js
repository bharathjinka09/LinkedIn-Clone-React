import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { withCookies } from "react-cookie";
import { Link } from "react-router-dom";

import React, { Component } from "react";

class Header extends Component {
  removeToken = () => {
    this.props.cookies.remove("auth-token");
  };
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
            alt="linkedin logo"
          />

          <div className="header__search">
            <SearchIcon style={{ color: "black" }} />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <Link to={"/"}>
            <HeaderOption
              avatar={true}
              title="Log Out"
              onClick={this.removeToken}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default withCookies(Header);
