import React, { useEffect } from "react";
import { link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentHubTitle, setCurrentHubName } from "../data/hubsDataSlice";
import { FetchHikingList } from "./FetchHikingList";
import { FetchWaterfallsList } from "./FetchWaterfallsList";

export const ResourceList = ({ hubName }) => {
  const { resourceType } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (hubName === "nicoyastacruz") {
      dispatch(setCurrentHubTitle("Nicoya / Santa Cruz"));
      dispatch(setCurrentHubName(hubName));
    }
    if (hubName === "jacoherradura") {
      dispatch(setCurrentHubTitle("Jacó / Herradura"));
      dispatch(setCurrentHubName(hubName));
    }
  }, [dispatch]);

  if (resourceType === "hiking") {
    return (
      <>
        <div>ResourceList {resourceType} </div>
        <FetchHikingList resourceType={resourceType} />
      </>
    );
  }
  if (resourceType === "waterfalls") {
    return (
      <>
        <div>ResourceList {resourceType} </div>
        <FetchWaterfallsList resourceType={resourceType} />
      </>
    );
  }
};
