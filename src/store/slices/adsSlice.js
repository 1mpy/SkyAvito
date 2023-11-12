import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adsList: [],
  selectedAds: {},
  adsComments: [],
};

export const adsSlice = createSlice({
  name: "adsSlice",
  initialState,
  reducers: {
    setAdsList: (state, action) => {
      state.adsList = action.payload;
    },
    setSelectedAds: (state, action) => {
      state.selectedAds = action.payload;
    },
    setAdsComments: (state, action) => {
      state.adsComments = action.payload;
    },
  },
});

export const { setAdsList, setSelectedAds, setAdsComments } = adsSlice.actions;

export default adsSlice.reducer;
