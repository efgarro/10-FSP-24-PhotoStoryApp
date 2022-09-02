import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderOne } from "../components/HeaderOne";
import { FetchPics } from "../components/FetchPics";

export const HomePage = () => {

  return (
    <>
      <HeaderOne />
      <FetchPics searchTerm={'costa rica'}/>
      <Outlet />
    </>
  );
};

export default HomePage;
