import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QrState {
  value: any;
}

const initialState: QrState = {
  value: 0,
};

export const qrSlice = createSlice({
  name: "QrState",
  initialState,
  reducers: {
    updateQrValue: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { updateQrValue } = qrSlice.actions

export default qrSlice.reducer