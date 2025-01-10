import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "samya roy",
  email: "samyaroy@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
