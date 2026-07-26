import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/about";
import EventsPage from "./pages/EventsPage";

// Stub pages — swap these out as you build the real ones.
function Placeholder({ title }) {
  return (
    <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", fontFamily: "Inter, sans-serif" }}>
      <h1>{title} — coming soon</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Placeholder title="Our Team" />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/fossfridays" element={<Placeholder title="FOSS Fridays" />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
      </Routes>
    </BrowserRouter>
  );
}