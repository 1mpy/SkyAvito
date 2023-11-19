import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adsList: [],
  selectedAds: {},
  adsComments: [],
  shouldUpdate: false,
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
    setShouldUpdate: (state, action) => {
      state.shouldUpdate = action.payload;
    },
  },
});

export const { setAdsList, setSelectedAds, setAdsComments, setShouldUpdate } =
  adsSlice.actions;

export default adsSlice.reducer;
