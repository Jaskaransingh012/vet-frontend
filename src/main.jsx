import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Login.jsx";
import DocVideo from "./pages/DocVideo.jsx";
import DocChat from "./pages/DocChat.jsx";
import AiDoctor from "./pages/AiDoctor.jsx";
import Signup from "./pages/Signup.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="trader" element={<Trader />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="aiDoctor" element={<AiDoctor />} />
        <Route path="/doctor/chat" element={<DocChat />} />
        <Route path="/doctor/video" element={<DocVideo />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
