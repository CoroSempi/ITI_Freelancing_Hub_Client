import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";

export const getChat = createAsyncThunk("chat/get", async (body, thunkAPI) => {
  try {
    const response = await axios.get(baseUrl + "getChat", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
      },
    });

    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const sendMessage = createAsyncThunk(
  "chat/post",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        baseUrl + "sendMessage",
        { content: body },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
          },
        }
      );

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatRoom: [],
    loading: false,
    error: null,
    counter: 0,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getChat.fulfilled, (state, action) => {
        state.chatRoom = action.payload.ChatRoom;
        state.loading = false;
        state.error = null;
      })
      .addCase(getChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getChat.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });

    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.chatRoom = action.payload.ChatRoom;
    });
  },
});

const chatReducer = chatSlice.reducer;
export default chatReducer;
