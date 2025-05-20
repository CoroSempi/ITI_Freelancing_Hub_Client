import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import notifcationReducer from "./slices/notifcation";
import profileReducer from "./slices/profile";
import chatReducer from "./slices/chats";
import platFormReducer from "./slices/platform";
import directFormReducer from "./slices/direct";
import remoteFormReducer from "./slices/remote";
import certificateFormReducer from "./slices/certificate";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notifcations: notifcationReducer,
    profile: profileReducer,
    chat: chatReducer,
    platform: platFormReducer,
    direct: directFormReducer,
    remote: remoteFormReducer,
    certificate: certificateFormReducer,
  },
});
