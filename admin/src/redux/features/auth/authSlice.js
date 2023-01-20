import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_url } from "../../../utils/baseUrl";
import axios from "axios";

const initialState = {
  user: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ userData, navigate }, { rejectWithValue }) => {
    //console.log("userData", userData);
    try {
      const response = await axios.post(`${base_url}/auth/login`, userData);
      navigate("/admin");
      return response.data;
    } catch (error) {
      //console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.user = null;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = false;
      localStorage.setItem("items", JSON.stringify(action.payload));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
