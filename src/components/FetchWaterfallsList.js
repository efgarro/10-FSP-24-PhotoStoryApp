import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWaterfallsList, loadWaterfallsList } from "../data/hubsDataSlice";
import { ResourceCards } from "./ResourceCards";
// import { generateLayoutLg } from "./generateLayoutLg";

export const FetchWaterfallsList = ( { resourceType }) => {
  const dispatch = useDispatch();
  const [layoutLg, setLayoutLg] = useState({});
  const resourceList = useSelector(selectWaterfallsList);
  
  useEffect(() => {
    dispatch(loadWaterfallsList());
  }, [dispatch]);

  useEffect(() => {
    console.log(`inside useEffect`);
    const generateLayoutLg = () => {
      return resourceList.map((item, index) => {
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
  }, [resourceList]);

  if (resourceList.length > 0) {
    return (
      <>
        {/* {console.log("Fetch Hiking List Render")}
        {console.log(resourceList)}
        {console.log(layoutLg)} */}
        <ResourceCards resourceList={resourceList} layoutLg={layoutLg} />
      </>
    );
  }
};
