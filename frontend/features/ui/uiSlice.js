import { createSlice, nanoid } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    toasts: []
  },
  reducers: {
    pushToast: {
      reducer(state, action) {
        state.toasts.push(action.payload);
      },
      prepare(payload) {
        return {
          payload: {
            id: nanoid(),
            type: payload.type || "info",
            title: payload.title,
            message: payload.message
          }
        };
      }
    },
    dismissToast(state, action) {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
    }
  }
});

export const { pushToast, dismissToast } = uiSlice.actions;
export default uiSlice.reducer;
