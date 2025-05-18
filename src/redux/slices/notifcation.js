import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";

export const getNotifcation = createAsyncThunk(
  "notifcation/get",
  async (body, thunkAPI) => {
    try {
      const response = await axios.get(baseUrl + "notifications", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
        },
      });
      return response.data.notifications;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const seeNotifcation = createAsyncThunk(
  "notifcation/see",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        baseUrl + "notifications/" + body,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
          },
        }
      );
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const notifcationSlice = createSlice({
  name: "notifcation",
  initialState: {
    notifcation: [],
    loading: false,
    error: null,
    counter: 0,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getNotifcation.fulfilled, (state, action) => {
        let myCounter = 0;
        state.notifcation = action.payload;
        state.notifcation.forEach((item) => {
          if (!item.seen) {
            myCounter++;
          }
        });
        state.counter = myCounter;
        state.loading = false;
        state.error = null;
      })
      .addCase(getNotifcation.rejected, (state, action) => {
        state.notifcation = [];
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getNotifcation.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

const notifcationReducer = notifcationSlice.reducer;
export default notifcationReducer;
