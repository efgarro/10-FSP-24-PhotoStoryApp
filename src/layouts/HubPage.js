import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HeaderTwo } from "../components/HeaderTwo";
import { HubResourceBoard } from "../components/HubResourceBoard";

export const HubPage = () => {
  return (
    <>
      <HeaderTwo />;
      <HubResourceBoard/>
      <Outlet />
    </>
  );
};

export default HubPage;
