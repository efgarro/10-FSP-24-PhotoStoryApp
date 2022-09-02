import { createSlice } from "@reduxjs/toolkit";
import { hubsData } from "./hubsData";

const initialState = {
  currentHubTitle: "",
  currentHubName: "",
  hiking: [],
  waterfalls: [],
};

const hubsDataSlice = createSlice({
  name: "hubsData",
  initialState,
  reducers: {
    setCurrentHubTitle: (state, action) => {
      state.currentHubTitle = action.payload;
    },
    setCurrentHubName: (state, action) => {
      state.currentHubName = action.payload;
    },
    loadHikingList: (state) => {
      state.hiking = hubsData.hiking;
    },
    loadWaterfallsList: (state) => {
      state.waterfalls = hubsData.waterfalls;
    },
    // loadWaterfallsList: (state) => {
    //   state.waterfalls = hubsData.waterfalls;
    // },
  },
});

export const selectCurrentHubTitle = (state) => state.hubsData.currentHubTitle;
export const selectCurrentHubName = (state) => state.hubsData.currentHubName;
export const selectHikingList = (state) => state.hubsData.hiking;
export const selectWaterfallsList = (state) => state.hubsData.waterfalls;
export const {
  setCurrentHubTitle,
  setCurrentHubName,
  loadHikingList,
  loadWaterfallsList,
} = hubsDataSlice.actions;
export default hubsDataSlice.reducer;
