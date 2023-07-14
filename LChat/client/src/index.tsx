import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/home/component/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function main() {
  const root = createRoot(document.querySelector("#app"));

  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

main();
