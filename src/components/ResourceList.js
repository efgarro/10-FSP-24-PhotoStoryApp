import React from "react";
import { link, useParams } from "react-router-dom";
import { FetchHikingList } from "./FetchHikingList";

export const ResourceList = () => {
  const { resourceId } = useParams();
  return (
    <>
      <div>ResourceList {resourceId} </div>
      <FetchHikingList />
    </>
  );
};
