import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: "Syed Tutul",
    email: 'syedtutul@gmail.com',
    userTasks: [],
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});


export default userSlice.reducer;