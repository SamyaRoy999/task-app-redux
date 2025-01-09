import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/task/taskSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer, 
  },
});
