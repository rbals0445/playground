import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/home/component/App";
import "../app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatRoom from "@chat/pages/ChatRoom";
import Layout from "@home/component/Layout";

function main() {
  const root = createRoot(document.querySelector("#app"));

  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/chat" element={<ChatRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

main();
