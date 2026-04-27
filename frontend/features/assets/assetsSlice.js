import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  verification: null,
  verifyLoading: false
};

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    addAsset(state, action) {
      state.items.unshift(action.payload);
    },
    setVerification(state, action) {
      state.verification = action.payload;
    },
    setVerifyLoading(state, action) {
      state.verifyLoading = action.payload;
    }
  }
});

export const { addAsset, setVerification, setVerifyLoading } = assetsSlice.actions;
export default assetsSlice.reducer;
