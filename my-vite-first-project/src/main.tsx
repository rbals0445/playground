import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);
