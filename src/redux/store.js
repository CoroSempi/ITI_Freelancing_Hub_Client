import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import notifcationReducer from "./slices/notifcation";
import profileReducer from "./slices/profile";
import chatReducer from "./slices/chats";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notifcations: notifcationReducer,
    profile: profileReducer,
    chat: chatReducer,
  },
});
