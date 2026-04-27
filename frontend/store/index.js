import { configureStore } from "@reduxjs/toolkit";
import assetsReducer from "@/features/assets/assetsSlice";
import uiReducer from "@/features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    assets: assetsReducer,
    ui: uiReducer
  }
});
