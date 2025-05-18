import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Auth from "./pages/auth/Auth.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import NotFound from "./pages/NotFound.jsx";
import LearnMore from "./pages/learnMore/LearnMore.jsx";
import ForgetPassword from "./pages/auth/ForgetPassword.jsx";
import VerifyCode from "./pages/auth/VerifyCode.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import Home from "./pages/home/Home.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import Settings from "./pages/Settings/Settings.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="auth" element={<Auth />}>
          <Route path="signIn" element={<SignIn />} />
          <Route path="forgetPassword" element={<ForgetPassword />} />
          <Route path="verifyCode/:email" element={<VerifyCode />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Route>
        <Route path="learnMore" element={<LearnMore />} />
        <Route path="notFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notFound" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
