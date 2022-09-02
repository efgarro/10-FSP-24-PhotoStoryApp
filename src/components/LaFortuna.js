import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentHubTitle, setCurrentHubName } from "../data/hubsDataSlice";
import { FetchPics } from "./FetchPics";

export const LaFortuna = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentHubTitle("La Fortuna"));
    dispatch(setCurrentHubName("lafortuna"));
  }, [dispatch]);
  return (
    <>
      <FetchPics searchTerm={"la fortuna"} />
    </>
  );
};
