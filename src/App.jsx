import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/about";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import FossFridaysPage from "./pages/FossFridaysPage";
import NewsletterPage from "./pages/NewsletterPage";
import ScrollToTop from "./components/ScrollToTop";

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/fossfridays" element={<FossFridaysPage />} />
        <Route path="/fossfridays/:issueId" element={<NewsletterPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}