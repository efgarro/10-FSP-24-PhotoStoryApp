import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHikingList, loadHikingList } from "../data/hubsDataSlice";
import { ResourceCards } from "./ResourceCards";

export const FetchHikingList = () => {
  const dispatch = useDispatch();
  const hikingList = useSelector(selectHikingList);
  const [layoutLg, setLayoutLg] = useState({});

  useEffect(() => {
    dispatch(loadHikingList());
  }, [dispatch]);

  useEffect(() => {
    console.log(`inside useEffect`);
    const generateLayoutLg = () => {
      return hikingList.map((item, index) => {
        return {
          x: ((index + 3) % 3) * 4,
          y: 0,
          w: 4,
          h: item.photo.orientation === "lan" ? 3 : 5,
          i: item.id,
        };
      });
    }; // endof generateLayout
    setLayoutLg({ lg: generateLayoutLg() });
  }, [hikingList]);

  if (hikingList.length > 0) {
    return (
      <>
        {console.log("Fetch Hiking List Render")}
        {console.log(hikingList)}
        {console.log(layoutLg)}
        <ResourceCards resourceList={hikingList} layoutLg={layoutLg} />
      </>
    );
  }
};
