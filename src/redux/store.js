import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/task/taskSlice";
import userSlice from "./features/user/userSlice";
import baseApi from "./features/api/baseApi";
export default configureStore({
  reducer: {
    tasks: tasksReducer,
    userSlice: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
