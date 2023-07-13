import type { Component } from "solid-js";

import "./header.scss";

import ProfilePic from "../../assets/profile.png";
import NotifyPic from "../../assets/notify.svg";
import SearchPic from "../../assets/search.svg";

const Header: Component = () => {
  return (
    <div class="header">
      <span class="header__title">Dashboard</span>
      <div class="header__utilities">
        <div class="header__utilities__search">
          <input type="search" placeholder="Search.." />
          <img src={SearchPic} />
        </div>
        <span>
          <img src={NotifyPic} />
        </span>
        <span>
          <img src={ProfilePic} />
        </span>
      </div>
    </div>
  );
};

export default Header;
