import { createSlice } from "@reduxjs/toolkit";
import { hubsData } from "./hubsData";

const initialState = {
  hiking: [],
  waterfalls: [],
  };

const hubsDataSlice = createSlice({
  name: "hubsData",
  initialState,
  reducers: {
    loadHikingList: (state) => {
      state.hiking = hubsData.hiking;
    },
    // loadWaterfallsList: (state) => {
    //   state.waterfalls = hubsData.waterfalls;
    // },
  },
});

export const selectHikingList = (state) => state.hubsData.hiking;
export const { loadHikingList } = hubsDataSlice.actions;
export default hubsDataSlice.reducer;
