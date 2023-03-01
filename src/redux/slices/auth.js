import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let fetchUserData = null;
axios
  .post("auth/fetchUserData", async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  })
  .then((res) => (fetchUserData = res));

const initialState = {
  data: null,
  status: "loading",
};

const authSilce = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchUserData.pending]: (state, action) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchUserData.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const authReducer = authSilce.reducer;
