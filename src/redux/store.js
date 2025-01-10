import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/task/taskSlice";
import userSlice from "./features/user/userSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    userSlice: userSlice,
  },
});
