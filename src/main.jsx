import React from "react";
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
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";  // Fixed import
import DocVideo from "./pages/DocVideo.jsx";
import DocChat from "./pages/DocChat.jsx";
import AiDoctor from "./pages/AiDoctor.jsx";
import Signup from "./pages/Signup.jsx";
import MarketPlace from "./pages/MarketPlace.jsx";
import veterinarySupport from "./pages/veterinarySupport.jsx";
import Products from "./pages/Products.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>{/* Use 'index' for default route */}
      <Route path="" element={<About />} /> {/* Consistent naming */}
      <Route path="/marketplace" >
        <Route index element={<MarketPlace />} />
        <Route path=":id" element={<ProductPage />} />
      </Route>
      <Route path="/veterinary-support" element={<veterinarySupport />} />
      <Route path='/Products' element={<Products />} />
      <Route path="profile" element={<Profile />} />
      <Route path="aiDoctor" element={<AiDoctor />} />
      <Route path="doctor/chat" element={<DocChat />} /> {/* Fixed path */}
      <Route path="doctor/video" element={<DocVideo />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
