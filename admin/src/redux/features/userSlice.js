import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const user = JSON.parse(localStorage.getItem("items"));
//console.log("user", user);

const initialState = {
  user: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, { rejectWithValue }) => {
    //console.log("userData", userData);
    try {
      const response = await axios.get(`${base_url}/users`, {
        headers: {
          Authorization: "Bearer " + user?.accessToken,
        },
      });
      // toast("User Login successfully");
      return response.data;
    } catch (error) {
      //console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
      state.user = null;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = false;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default userSlice.reducer;
