import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";

export const addCertificate = createAsyncThunk(
  "certificate/post",
  async (body, thunkAPI) => {
    console.log(body);
    try {
      const response = await axios.post(baseUrl + "certificate", body.data, {
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

export const getCertificate = createAsyncThunk(
  "certificate/get",
  async (body, thunkAPI) => {
    try {
      console.log(body);
      const response = await axios.get(baseUrl + `certificate/${body}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
        },
      });

      return response.data.jobData;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to get");
    }
  }
);

export const updateCertificate = createAsyncThunk(
  "certificate/put",
  async (body, thunkAPI) => {
    try {
      const { id, certificateData } = body;
      console.log(body);
      const response = await axios.put(
        baseUrl + `certificate/${id}`,
        certificateData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
          },
        }
      );

      console.log(response);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to update");
    }
  }
);

export const certificateFormSlice = createSlice({
  name: "certificate",
  initialState: {
    loading: false,
    certificateToEdit: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addCertificate.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
      })
      .addCase(addCertificate.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addCertificate.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });

    builder
      .addCase(getCertificate.fulfilled, (state, action) => {
        state.certificateToEdit = action.payload;
        state.loading = false;
      })
      .addCase(getCertificate.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCertificate.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });

    builder
      .addCase(updateCertificate.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateCertificate.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateCertificate.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });
  },
});

const certificateFormReducer = certificateFormSlice.reducer;
export default certificateFormReducer;
