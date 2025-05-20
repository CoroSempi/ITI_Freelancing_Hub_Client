import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";

export const changeAvatar = createAsyncThunk(
  "avatar/patch",
  async (body, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", body);
      const response = await axios.patch(baseUrl + "changeAvatar", formData, {
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

export const StudentData = createAsyncThunk(
  "studentData/get",
  async (body, thunkAPI) => {
    try {
      const response = await axios.get(baseUrl + "data", {
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

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    studentData: {},
    loading: false,
    avatarState: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(changeAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.avatarState = !state.avatarState;
        state.error = null;
      })
      .addCase(changeAvatar.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });

    builder
      .addCase(StudentData.fulfilled, (state, action) => {
        state.loading = false;
        state.studentData = action.payload;
        state.error = null;

        localStorage.setItem("trackID", action.payload.trackID);
        localStorage.setItem("studentId", action.payload._id);
      })
      .addCase(StudentData.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

const profileReducer = profileSlice.reducer;
export default profileReducer;
