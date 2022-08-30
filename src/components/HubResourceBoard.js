import React from "react";
import { NavLink, Link } from "react-router-dom";

export const HubResourceBoard = () => {
  return (
    <section className="layout-wrapper">
      <div className="hubBoard-box layout-flexCol">
        <div>
          <h1 className="hubBoard--title">Hub Name</h1>
        </div>
        <div className="header--navbar">
          <nav>
            <ul className=" layout-flexRow navbar--menu">
              <li>
                <NavLink to="/nicoyastacruz">Hiking</NavLink>
              </li>
              <li>
                <NavLink to="/jacoherradura">Waterfalls</NavLink>
              </li>
              <li>
                <NavLink to="/monteverde">Lodging</NavLink>
              </li>
              <li>
                <NavLink to="/lafortuna">Restaurants</NavLink>
              </li>
              <li>
                <NavLink to="/cahuitaptoviejo">Tours</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
