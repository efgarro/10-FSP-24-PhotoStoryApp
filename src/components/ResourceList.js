import React from "react";
import { link, useParams } from "react-router-dom";
import { HikingList } from "./HikingList";

export const ResourceList = () => {
  const { resourceId } = useParams();
  return (
    <>
      <div>ResourceList {resourceId} </div>
      <HikingList />
    </>
  );
};
