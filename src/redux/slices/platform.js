import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";
const baseUrl2 = "https://iti-freelancing-hub-server.vercel.app/dashboard/";

export const countries = createAsyncThunk(
  "countries/get",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");

      const filteredCountries = response.data
        .filter((country) => country.name.common !== "Israel")
        .map((country) => ({
          name: country.name.common,
          flag: country.flags?.svg || country.flags?.png || "",
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      return filteredCountries;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to fetch countries");
    }
  }
);

export const getStudents = createAsyncThunk(
  "students/get",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        baseUrl2 + "Track/" + localStorage.getItem("trackID"),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
          },
        }
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to fetch countries");
    }
  }
);

export const addPlatform = createAsyncThunk(
  "platformJob/post",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(baseUrl + "platformJob", body, {
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

export const updatePlatform = createAsyncThunk(
  "job/put",
  async (body, thunkAPI) => {
    try {
      const { id, jobData } = body;

      const response = await axios.put(baseUrl + `platformJob/${id}`, jobData, {
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

export const platFormSlice = createSlice({
  name: "platform",
  initialState: {
    countries: [],
    students: [],
    loading: false,
    jobToEdit: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(countries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });

    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.students = action.payload.filter(
        (std) => std._id !== localStorage.getItem("studentId")
      );
    });

    builder
      .addCase(addPlatform.fulfilled, (state, action) => {
        action.payload;
        state.loading = false;
      })
      .addCase(addPlatform.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addPlatform.rejected, (state, action) => {
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
      .addCase(updatePlatform.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updatePlatform.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatePlatform.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });
  },
});

const platFormReducer = platFormSlice.reducer;
export default platFormReducer;
