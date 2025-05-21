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
import Home from "./pages/Home/Home.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import ChooseJob from "./pages/ChooseJob/ChooseJob.jsx";
import JobDetails from "./pages/JobDetails/JobDetails.jsx";
import CertificateDetails from "./pages/CertificateDetails/CertificateDetails.jsx";
import DeleteModal from "./components/ModalDelete/ModalDelete.jsx";
import NewJob from "./pages/NewJob/NewJob.jsx";
import Certificate from "./components/NewJob/Certificate/Certificate.jsx";
import AI from "./pages/Ai/AI.jsx";

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
        <Route path="jobDetails/:jobId" element={<JobDetails />} />
        <Route path="choosejob" element={<ChooseJob />} />
        <Route path="addNewJob/:type" element={<NewJob />} />
        <Route path="editJob/:type/:id" element={<NewJob />} />
        <Route path="addCertificate" element={<Certificate />} />
        <Route path="editCertificate/:id" element={<Certificate />} />
        <Route path="certificateDetails/:id" element={<CertificateDetails />} />
        <Route path="delete" element={<DeleteModal />} />
        <Route path="learnMore" element={<LearnMore />} />
        <Route path="ai" element={<AI />} />
        <Route path="notFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notFound" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
