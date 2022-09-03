import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHikingList, loadHikingList } from "../data/hubsDataSlice";
import { ResourceCards } from "./ResourceCards";

export const FetchHikingList = ({ resourceType }) => {
  const dispatch = useDispatch();
  const [layout, setLayout] = useState({});
  const resourceList = useSelector(selectHikingList);

  useEffect(() => {
    dispatch(loadHikingList());
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
    }; // endof generateLayoutLg

    const generateLayoutSm = () => {
      return resourceList.map((item, index) => {
        return {
          x: ((index + 2) % 2) * 3,
          y: 0,
          w: 3,
          h: item.photo.orientation === "lan" ? 5 : 8.5,
          i: item.id,
        };
      });
    }; // endof generateLayoutSm
    setLayout({
      lg: generateLayoutLg(resourceList),
      sm: generateLayoutSm(resourceList),
    });
  }, [resourceList]);

  if (resourceList.length > 0) {
    return (
      <>
        <ResourceCards resourceList={resourceList} layout={layout} />
      </>
    );
  }
};
