import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadHikingList } from '../data/hubsDataSlice';

export const HikingList = () => {
const dispatch = useDispatch();
const hikingList = useSelector(loadHikingList);

useEffect(() => {
  dispatch(loadHikingList());
}, [dispatch]);

  return (
    <div>HikingList {hikingList} </div>
  )
}
