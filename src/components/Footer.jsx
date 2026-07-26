import { Link } from "react-router-dom";
import {
  FaArrowUp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Logo } from "./Navbar";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/team", label: "Our Team" },
    { to: "/events", label: "Events" },
    { to: "/fossfridays", label: "FOSS Fridays" },
    { to: "/contact", label: "Contact Us" },
  ];

  const socials = [
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/foss_club_mpstme/" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/company/mpstmefoss/posts/?feedView=all" },
    { name: "GitHub Organisation", icon: FaGithub, href: "https://github.com/FOSS-Club-MPSTME" },
  ];

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <div className="footer__brand">
            <Logo size={32} />
            <h3>FOSS Club MPSTME</h3>
          </div>
          <img
            src="/foss-logos/foss-fork-buddies.png"
            alt="FOSS Club MPSTME — Fork Buddies"
            className="footer__badge"
          />
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <div className="footer__contact-line">
            <FaMapMarkerAlt size={15} />
            <div>
              <p className="strong">MPSTME, NMIMS, Mumbai</p>
              <p>Bhakti Vedant Marg, opp. Cooper Hospital, Navpada, Suvarna Nagar, Vile Parle West, Mumbai, Maharashtra 400056</p>
            </div>
          </div>
          <div className="footer__contact-line">
            <FaEnvelope size={15} />
            <a href="mailto:fossmpstme@gmail.com">fossmpstme@gmail.com</a>
          </div>
          <div className="footer__contact-line">
            <FaPhoneAlt size={15} />
            <a href="tel:+917900093744">+91 79000 93744</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Follow Us</h4>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <a
            className="footer__external"
            href="https://fossunited.org/c/mpstme-nmims"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOSS United MPSTME →
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 FOSS Club MPSTME. All rights reserved.</p>
        <button onClick={scrollToTop} className="footer__top-btn">
          <FaArrowUp size={14} /> Back to top
        </button>
      </div>
    </footer>
  );
}