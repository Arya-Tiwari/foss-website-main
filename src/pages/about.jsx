import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCode,
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaHeart,
  FaBullseye,
  FaArrowRight,
  FaArrowUp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./About.css";

function Logo({ size = 40, className = "" }) {
  return (
    <img
      src="/foss-logo.jpeg"
      alt="FOSS Club MPSTME"
      className={`logo-img ${className}`}
      style={{ height: size, width: "auto" }}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
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
      <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
        <Logo size={38} />
        <span>FOSS MPSTME</span>
      </Link>

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

function AboutHero() {
  return (
    <section className="about-hero">
      <motion.div
        className="about-hero__inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">// our story</span>
        <h1>About Us</h1>
        <p className="about-hero__subtitle">
          Learn more about our journey, mission, and the values that drive our
          community forward.
        </p>
      </motion.div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="who-we-are__grid">
        <motion.div
          className="who-we-are__copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">// who we are</span>
          <h2>Who Are We?</h2>
          <p>
            The FOSS Club at MPSTME, Mumbai, is a vibrant community of students
            passionate about Free and Open Source Software. As part of the
            larger FOSS United movement, we bring together learners, creators,
            and innovators who believe in the transformative power of open
            source technology.
          </p>
          <p>
            Established with the vision of democratizing technology education,
            our club serves as a bridge between theoretical knowledge and
            practical application. We're not just a student organization —
            we're a movement that's reshaping how technology is learned,
            shared, and created on our campus.
          </p>
          <p>
            From organizing workshops and hackathons to contributing to major
            open source projects, our members are actively involved in
            building the future of technology.
          </p>
        </motion.div>

        <motion.div
          className="who-we-are__visual"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/about-page-photo.jpg"
            alt="FOSS Club Meeting"
            className="who-we-are__photo"
          />
          <h3>Our Community in Action</h3>
          <p>
            Bringing together passionate students to learn, collaborate, and
            grow through Free and Open Source Software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const missionPillars = [
  {
    icon: FaCode,
    title: "Educate",
    description:
      "Provide hands-on learning experiences with open source technologies and development practices.",
  },
  {
    icon: FaUsers,
    title: "Connect",
    description:
      "Build bridges between students, industry professionals, and the global FOSS community.",
  },
  {
    icon: FaLightbulb,
    title: "Innovate",
    description:
      "Encourage creative problem-solving and contribution to projects that make a positive impact.",
  },
];

function MissionSection() {
  return (
    <section className="mission">
      <motion.div
        className="mission__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">// what drives us</span>
        <h2>Our Mission</h2>

        <div className="mission__terminal">
          <span className="mission__terminal-label">/* our mission */</span>
          <p>
            To cultivate a thriving ecosystem of open source enthusiasts at
            MPSTME who are equipped with the knowledge, skills, and mindset to
            contribute meaningfully to the global FOSS community while
            solving real-world problems through collaborative innovation.
          </p>
        </div>

        <div className="mission__grid">
          {missionPillars.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                className="mission-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="mission-card__icon">
                  <Icon size={20} />
                </div>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

const values = [
  {
    icon: FaCode,
    title: "Open Source First",
    description:
      "We believe in the power of open source software to democratize technology and create solutions that benefit everyone.",
  },
  {
    icon: FaUsers,
    title: "Collaboration Over Competition",
    description:
      "We foster an environment where sharing knowledge and working together leads to better outcomes for all.",
  },
  {
    icon: FaLightbulb,
    title: "Learning by Doing",
    description:
      "We believe in hands-on experience and practical learning that prepares students for real-world challenges.",
  },
  {
    icon: FaGlobe,
    title: "Accessibility & Inclusion",
    description:
      "We strive to make technology accessible to everyone, regardless of their background or resources.",
  },
  {
    icon: FaHeart,
    title: "Community First",
    description:
      "We prioritize building a supportive community where everyone feels valued and empowered to contribute.",
  },
  {
    icon: FaBullseye,
    title: "Purpose-Driven",
    description:
      "We focus on creating technology that serves the common good and addresses real-world problems.",
  },
];

function ValueCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      className="value-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div className="value-card__icon">
        <Icon size={20} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.div>
  );
}

function ValuesSection() {
  return (
    <section className="values">
      <div className="section-head section-head--center">
        <span className="eyebrow">// what we stand for</span>
        <h2>Our Values</h2>
        <p className="values__intro">
          These core values guide everything we do and shape the culture of
          our community.
        </p>
      </div>

      <div className="values__grid">
        {values.map((v, i) => (
          <ValueCard key={v.title} item={v} index={i} />
        ))}
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="vision">
      <motion.div
        className="vision__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">// looking ahead</span>
        <h2>Our Vision</h2>
        <div className="vision__quote-card">
          <FaGlobe size={30} />
          <p className="vision__quote">
            "Our vision is to build a vibrant, inclusive community where
            students come together to learn, share, and grow through Free and
            Open Source Software. As a part of FOSS United, we believe in the
            power of collaboration over competition, learning by doing, and
            creating technology that's open, accessible, and built for the
            common good."
          </p>
          <p className="vision__quote">
            "We imagine a campus where every student feels empowered to
            contribute to meaningful projects, explore the world of open
            source, and be part of something bigger than themselves — a
            movement rooted in freedom, transparency, and shared knowledge."
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
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
          <p>
            Building a vibrant, inclusive community where students learn, share, and grow
            through Free and Open Source Software.
          </p>
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

export default function About() {
  return (
    <div className="landing">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <MissionSection />
      <ValuesSection />
      <VisionSection />
      <Footer />
    </div>
  );
}