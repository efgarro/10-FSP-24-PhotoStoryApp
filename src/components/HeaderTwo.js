import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import logo from "../img/logo.jpg";

export const HeaderTwo = () => {
  return (
    <header className="header-box layout-flexCol">
      <div className="header-wrapper layout-flexRow  header-flexRow">
        <Link to={"/"}><img src={logo} className="header--logo" /></Link>
        <SearchForm />
      </div>
    </header>
  );
};

export default HeaderTwo;
