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
  dsn: "https://6b155a61a689f29aaaa40963cb06bdfb@o4507154197774336.ingest.de.sentry.io/4507386230472785",
});

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
