import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { setCurrentHubTitle, setCurrentHubName } from "../data/hubsDataSlice";
import { FetchPics } from "./FetchPics";

export const CahuitaPtoViejo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentHubTitle("Cahuita / Puerto Viejo"));
    dispatch(setCurrentHubName("cahuitaptoviejo"));
  }, [dispatch]);
  return (
    <>
      <FetchPics searchTerm={"cahuita"} />
    </>
  );
}
