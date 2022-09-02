import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLodgingList,
  loadLodgingList,
} from "../data/hubsDataSlice";
import { ResourceCards } from "./ResourceCards";

export const FetchLodgingList = ({ resourceType }) => {
  const dispatch = useDispatch();
  const [layoutLg, setLayoutLg] = useState({});
  const resourceList = useSelector(selectLodgingList);

  useEffect(() => {
    dispatch(loadLodgingList());
  }, [dispatch]);

  useEffect(() => {
    const generateLayoutLg = () => {
      return resourceList.map((item, index) => {
        return {
          x: ((index + 3) % 3) * 4,
          y: 0,
          w: 4,
          h: item.photo.orientation === "lan" ? 5 : 8.5,
          i: item.id,
        };
      });
    }; // endof generateLayout
    setLayoutLg({ lg: generateLayoutLg() });
  }, [resourceList]);

  if (resourceList.length > 0) {
    return (
      <>
        <ResourceCards resourceList={resourceList} layoutLg={layoutLg} />
      </>
    );
  }
};
