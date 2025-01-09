import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
      console.log("Updated state:", state.tasks);
    },
    removeTask: (state, { payload }) => {
      state.tasks.filter((item) => item.id !== payload);
    },
    updataStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, updataStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
