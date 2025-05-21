import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";

export const addRemote = createAsyncThunk(
  "remoteJob/post",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(baseUrl + "remoteJob", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
        },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to add");
    }
  }
);

export const getJob = createAsyncThunk("job/get", async (body, thunkAPI) => {
  try {

    const response = await axios.get(baseUrl + `jobs/${body}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
      },
    });

    return response.data.jobData;
  } catch (err) {
    return thunkAPI.rejectWithValue("Failed to get");
  }
});

export const updateRemote = createAsyncThunk(
  "remoteJob/put",
  async (body, thunkAPI) => {
    try {
      const { id, jobData } = body;
    
      const response = await axios.put(baseUrl + `remoteJob/${id}`, jobData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
        },
      });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to update");
    }
  }
);

export const remoteFormSlice = createSlice({
  name: "remote",
  initialState: {
    countries: [],
    loading: false,
    jobToEdit: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addRemote.fulfilled, (state, action) => {
    
        state.loading = false;
      })
      .addCase(addRemote.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addRemote.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });

    builder
      .addCase(getJob.fulfilled, (state, action) => {
        state.jobToEdit = action.payload;
        state.loading = false;
      })
      .addCase(getJob.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getJob.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });

    builder
      .addCase(updateRemote.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateRemote.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateRemote.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });
  },
});

const remoteFormReducer = remoteFormSlice.reducer;
export default remoteFormReducer;
