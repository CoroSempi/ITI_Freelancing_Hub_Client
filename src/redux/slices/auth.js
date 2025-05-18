import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";

export const tokenExpiration = createAsyncThunk(
  "auth/tokenExpiration",
  async (body, thunkAPI) => {
    try {
      const response = await axios.get(baseUrl + "checkToken", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
        },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (body, thunkAPI) => {
    try {
      console.log(localStorage.getItem("AccessToken"));
      const response = await axios.patch(baseUrl + "changePassword", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
        },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    signOut: (state) => {
      state.token = null;
      localStorage.removeItem("AccessToken");
      localStorage.removeItem("studentData");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(tokenExpiration.fulfilled, (state, action) => {
        state.token = true;
      })
      .addCase(tokenExpiration.rejected, (state, action) => {
        state.token = false;
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("studentData");
      });

    builder.addCase(changePassword.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { signOut } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
