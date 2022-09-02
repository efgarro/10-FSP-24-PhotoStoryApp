import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentHubTitle, selectCurrentHubName } from "../data/hubsDataSlice";

export const HubResourceBoard = () => {
  const currentHubTitle = useSelector(selectCurrentHubTitle);
  const currentHubName = useSelector(selectCurrentHubName);
  return (
    <section className="layout-wrapper" /* full-width clamped band */>
      <div
        className="hubBoard-box layout-flexCol" /* box with items in columns */
      >
        <div /* box with hub title */>
          <h1 className="hubBoard--title">{currentHubTitle}</h1>
        </div>
        <div /* Nav Bar */>
          <nav>
            <ul className=" layout-flexRow navbar--menu">
              <li>
                <NavLink to={`/${currentHubName}/hiking`}>Hiking</NavLink>
              </li>
              <li>
                <NavLink to={`/${currentHubName}/waterfalls`}>Waterfalls</NavLink>
              </li>
              <li>
                <NavLink to="/monteverde/lodging">Lodging</NavLink>
              </li>
              <li>
                <NavLink to="/lafortuna/restaurants">Restaurants</NavLink>
              </li>
              <li>
                <NavLink to="/cahuitaptoviejo/tours">Tours</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
