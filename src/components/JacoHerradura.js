import React, { useEffect } from "react";
import { FetchPics } from "./FetchPics";
import { useDispatch } from "react-redux";
import { setCurrentHubTitle, setCurrentHubName } from "../data/hubsDataSlice";

export const JacoHerradura = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentHubTitle("Jacó / Herradura"));
    dispatch(setCurrentHubName("jacoherradura"));
  }, [dispatch]);
  return (
    <>
      <FetchPics searchTerm={"jaco"} />
    </>
  );
};

export default JacoHerradura;
