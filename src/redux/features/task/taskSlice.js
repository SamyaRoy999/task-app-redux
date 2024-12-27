import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: {
    tasks: [],
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = tasksSlice.actions;

export default tasksSlice.reducer;
