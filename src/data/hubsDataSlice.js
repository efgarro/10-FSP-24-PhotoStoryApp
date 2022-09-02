import { createSlice } from "@reduxjs/toolkit";
import { hubsData } from "./hubsData";

const initialState = {
  currentHubTitle: "",
  currentHubName: "",
  hiking: [],
  waterfalls: [],
  restaurants: [],
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
    loadRestaurantsList: (state) => {
      state.restaurants = hubsData.restaurants;
    },
    
  },
});

export const selectCurrentHubTitle = (state) => state.hubsData.currentHubTitle;
export const selectCurrentHubName = (state) => state.hubsData.currentHubName;
export const selectHikingList = (state) => state.hubsData.hiking;
export const selectWaterfallsList = (state) => state.hubsData.waterfalls;
export const selectRestaurantsList = (state) => state.hubsData.restaurants;
export const {
  setCurrentHubTitle,
  setCurrentHubName,
  loadHikingList,
  loadWaterfallsList,
  loadRestaurantsList,
} = hubsDataSlice.actions;
export default hubsDataSlice.reducer;
