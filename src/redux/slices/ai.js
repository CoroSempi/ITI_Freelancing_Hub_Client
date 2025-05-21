import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleGenAI } from "@google/genai";

const API_KEY = "AIzaSyD3pEoh9VNsnYFH4wKaSLLvSzu6gU-tkEg";
const MODEL_NAME = "gemma-3-1b-it";

export const sendMessagetoAI = createAsyncThunk(
  "certificate/post",
  async (body, thunkAPI) => {
    if (!API_KEY) {
      console.error("Missing API key");
      return { ai: "API key is missing.", user: body };
    }

    const ai = new GoogleGenAI({ apiKey: API_KEY });

    try {
      const response = await ai.models.generateContent({
        model: MODEL_NAME,
        contents: [
          {
            role: "user",
            parts: [{ text: body }],
          },
        ],
        config: {
          responseMimeType: "text/plain",
        },
      });

      return { ai: response.text, user: body };
    } catch (error) {
      console.error("Gemini API error:", error);
      return { ai: "Error communicating with Gemini.", user: body };
    }
  }
);

const aiSlice = createSlice({
  name: "ai",
  initialState: {
    loading: false,
    chatRoom: [],
  },
  reducers: {
    clearChat: (state) => {
      state.chatRoom = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessagetoAI.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessagetoAI.fulfilled, (state, action) => {
        state.loading = false;

        state.chatRoom.push({
          received: false,
          content: action.payload.user,
          timestamp: Date.now(),
        });
        state.chatRoom.push({
          received: true,
          content: action.payload.ai,
          timestamp: Date.now(),
        });
      })
      .addCase(sendMessagetoAI.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearChat } = aiSlice.actions;
export default aiSlice.reducer;
