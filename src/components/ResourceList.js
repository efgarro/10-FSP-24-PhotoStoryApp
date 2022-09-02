import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentHubTitle, setCurrentHubName } from "../data/hubsDataSlice";
import { FetchHikingList } from "./FetchHikingList";
import { FetchWaterfallsList } from "./FetchWaterfallsList";
import { FetchLodgingList } from "./FetchLodgingList";
import { FetchRestaurantsList } from "./FetchRestaurantsList";
import { FetchToursList } from "./FetchToursList";

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
    if (hubName === "monteverde") {
      dispatch(setCurrentHubTitle("Monteverde"));
      dispatch(setCurrentHubName(hubName));
    }
    if (hubName === "lafortuna") {
      dispatch(setCurrentHubTitle("La Fortuna"));
      dispatch(setCurrentHubName(hubName));
    }
    if (hubName === "cahuitaptoviejo") {
      dispatch(setCurrentHubTitle("Cahuita / Puerto Viejo"));
      dispatch(setCurrentHubName(hubName));
    }
  }, [dispatch]);

  if (resourceType === "hiking") {
    return <FetchHikingList />;
  }
  if (resourceType === "waterfalls") {
    return <FetchWaterfallsList />;
  }
  if (resourceType === "lodging") {
    return <FetchLodgingList />;
  }
  if (resourceType === "restaurants") {
    return <FetchRestaurantsList />;
  }
  if (resourceType === "tours") {
    return <FetchToursList />;
  }
};
