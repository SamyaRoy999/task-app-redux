import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./features/task/taskSlice";
export default configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});
