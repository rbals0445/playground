import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import Navigation from "./components/Navigation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/excel" element={<div>Excel</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
