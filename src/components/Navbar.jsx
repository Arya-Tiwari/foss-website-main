import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export function Logo({ size = 40, className = "" }) {
  return (
    <img
      src="/foss-logos/foss-logo.jpeg"
      alt="FOSS Club MPSTME"
      className={`logo-img ${className}`}
      style={{ height: size, width: "auto" }}
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    setOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/team", label: "Our Team" },
    { to: "/events", label: "Events" },
    { to: "/fossfridays", label: "FOSS Fridays" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <button
        type="button"
        className="navbar__brand"
        onClick={goHome}
        aria-label="Go to home page"
      >
        <Logo size={38} />
        <span>FOSS MPSTME</span>
      </button>

      <nav className={`navbar__links ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="navbar__link" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </nav>

      <button
        className="navbar__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}