import * as Sentry from "@sentry/react";

import Classes from "./components/Classes";
import ContactUs from "./components/ContactUs";
import Events from "./components/Events";
import Home from "./components/Home";
import Layout from "./components/Layout";
import OurStory from "./components/OurStory";

import { HashRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

Sentry.init({
  dsn: "https://df1827e239b82c0d2560a6a16a5bc0ef@o4504532816560128.ingest.us.sentry.io/4506006109224960",
});
<script
  crossOrigin="anonymous"
  src="https://js.sentry-cdn.com/d5d402bf10704e198bfe7a0076903c36.min.js"
/>;
const App = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<OurStory />} path="our-story" />
            <Route element={<Classes />} path="classes" />
            <Route element={<Events />} path="events" />
            <Route element={<ContactUs />} path="contact-us" />
            <Route element={<Home />} path="*" />
            <Route element={<Home />} path="/" />
          </Route>
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
