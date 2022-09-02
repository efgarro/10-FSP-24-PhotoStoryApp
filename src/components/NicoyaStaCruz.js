import React, { useEffect } from "react";
import { FetchPics } from "./FetchPics";
import { useDispatch } from "react-redux";
import { setCurrentHubTitle, setCurrentHubName } from "../data/hubsDataSlice";

export const NicoyaStaCruz = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentHubName("nicoyastacruz"));
    dispatch(setCurrentHubTitle("Nicoya / Santa Cruz"));
  }, [dispatch]);

  return (
    <>
      <FetchPics searchTerm={"nicoya"} />
    </>
  );
};
