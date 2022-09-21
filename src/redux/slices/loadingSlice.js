import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: 'isLoading',
  initialState: {
    value: false,
  },
  reducers: {
    setTrue: (state) => {
      state.value = true
    },
    setFalse: (state) => {
      state.value = false;
    }
  }
})

export const { setTrue, setFalse } = loadingSlice.actions;
export const selectLoading = state => state.isLoading.value;
export default loadingSlice.reducer