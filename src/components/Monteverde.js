import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentHubTitle, setCurrentHubName } from "../data/hubsDataSlice";
import { FetchPics } from "./FetchPics";

export const Monteverde = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentHubTitle("Monteverde"));
    dispatch(setCurrentHubName("monteverde"));
  }, [dispatch]);
  return (
    <>
      <FetchPics searchTerm={"monteverde"} />
    </>
  );
};
