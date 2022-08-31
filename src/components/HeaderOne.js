import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import logo from "../img/logo.jpg";

export const HeaderOne = () => {
  return (
    <header
      className="header-box layout-flexCol" /* elastic box with header items in cols */
    >
      <div
        className="header-wrapper layout-flexRow header-flexRow" /* elastic band with items in a row  */
      >
        <Link to={"/"}>
          <img src={logo} className="header--logo" />
        </Link>
        <SearchForm />
      </div>
      <nav className="header-wrapper " /* elastic band */>
        <ul className="layout-flexRow header-flexRow navbar--menu">
          <li>
            <NavLink to="/nicoyastacruz">Nicoya / Santa Cruz</NavLink>
          </li>
          <li>
            <NavLink to="/jacoherradura">Jacó / Herradura</NavLink>
          </li>
          <li>
            <NavLink to="/monteverde">Monteverde</NavLink>
          </li>
          <li>
            <NavLink to="/lafortuna">La Fortuna</NavLink>
          </li>
          <li>
            <NavLink to="/cahuitaptoviejo">Cahuita / Puerto Viejo</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderOne;
