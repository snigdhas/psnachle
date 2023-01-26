import Classes from "./components/Classes";
import ContactUs from "./components/ContactUs";
import Events from "./components/Events";
import Home from "./components/Home";
import Layout from "./components/Layout";
import OurStory from "./components/OurStory";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<OurStory />} path="ourstory" />
            <Route element={<Classes />} path="classes" />
            <Route element={<Events />} path="events" />
            <Route element={<ContactUs />} path="contact-us" />
            <Route element={<Home />} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
