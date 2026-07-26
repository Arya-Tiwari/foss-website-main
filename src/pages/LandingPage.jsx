import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaCode,
  FaChalkboardTeacher,
  FaTrophy,
  FaLaptopCode,
  FaArrowRight,
  FaArrowUp,
  FaPlay,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./LandingPage.css";

const JOIN_FORM_LINK = "https://executiverecruitment.fossmpstme.com";
const FOSS_FRIDAYS_EP1_LINK = "https://www.instagram.com/reel/XXXXXXXXXXX/"; // replace with actual reel link

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

function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">// open source, unlocked</span>
          <h1 className="hero__title">
            FOSS Club
            <br />
            <span className="hero__title--accent">MPSTME</span>
          </h1>
          <p className="hero__subtitle">
            A community of builders, tinkerers and open-source enthusiasts at MPSTME,
            NMIMS — learning, shipping, and shipping some more.
          </p>
          <div className="hero__actions">
            <a
              href={JOIN_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Join us <FaArrowRight size={14} />
            </a>
            <Link to="/events" className="btn btn--ghost">
              See our events
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero__logo-frame">
            <Logo size={280} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-brief">
      <div className="about-brief__grid">
        <motion.div
          className="about-brief__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">// who we are</span>
          <h2>About the club</h2>
          <p>
            The FOSS Club at MPSTME is a community of students who build, break, and
            open-source things together — from hackathons to weekly workshops. We believe in the power of open source software to democratize technology and create solutions that benefit everyone. We believe in hands-on experience and practical learning that prepares students for real-world challenges.
          </p>
          <Link to="/about" className="about-brief__link">
            Read more about us <FaArrowRight size={13} />
          </Link>
        </motion.div>

        <motion.div
          className="about-brief__photos"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/about-photo-1.jpeg"
            alt="FOSS Club members at a hackathon"
            className="about-brief__photo-slot"
          />
          <img
            src="/about-photo-2.jpeg"
            alt="FOSS Club members in action"
            className="about-brief__photo-slot about-brief__photo-slot--offset"
          />
        </motion.div>
      </div>
    </section>
  );
}

const events = [
  {
    title: "FOSS Unlocked 2.0",
    type: "Club Orientation",
    date: "30th July, 2026",
    location: "MPSTME, Vile Parle",
    participants: "100+ Freshers",
    description:
      "The official welcome for first-years — club projects showcase, technical games, and an intro to the FOSS community.",
    icon: FaChalkboardTeacher,
    status: "upcoming",
    exploreLink: "https://fossunlocked.fossmpstme.com",
  },
  {
    title: "Hackathon Readiness Workshop",
    type: "Workshop",
    date: "To be Announced",
    location: "MPSTME, Vile Parle",
    participants: "Open to all",
    description:
      "A two-day hands-on primer for first hackathons — Git, GitHub, MVP planning, and a guided mini hackathon.",
    icon: FaLaptopCode,
    status: "upcoming",
  },
  {
    title: "COMMIT 2.0",
    type: "National Hackathon",
    date: "To be Announced",
    location: "MPSTME, Vile Parle",
    participants: "Open to all",
    description:
      "The next edition of our flagship hackathon — bigger tracks, national reach, and real mentorship from industry pros.",
    icon: FaTrophy,
    status: "upcoming",
  },
  {
    title: "FOSS Unlocked 1.0",
    type: "Club Orientation",
    date: "29th July, 2025",
    location: "MPSTME, Vile Parle",
    participants: "100+ Freshers",
    description:
      "The club's official welcome for first-years — technical games, open discussions, and an intro to what we build.",
    icon: FaChalkboardTeacher,
    status: "completed",
  },
  {
    title: "COMMIT 1.0",
    type: "Hackathon · Flagship",
    date: "6th - 13th September 2025",
    location: "MPSTME, Vile Parle",
    participants: "Cybersecurity · Sustainability · FinTech",
    description:
      "Our flagship multi-round hackathon across three tracks, with a ₹18,000 prize pool and a 7-hour build phase.",
    icon: FaTrophy,
    status: "completed",
  },
  {
    title: "Code Forge 2026",
    type: "Hackathon",
    date: "27th March, 2026",
    location: "MPSTME, Vile Parle",
    participants: "52 teams",
    description:
      "A high-intensity engineering competition with Taqneeq 18.0 — debugging, optimizing, and shipping real codebases.",
    icon: FaCode,
    status: "completed",
  },
];

function EventsSection() {
  return (
    <section className="events">
      <div className="section-head">
        <span className="eyebrow">// what we've shipped, what's next</span>
        <h2>Events</h2>
      </div>

      <div className="events__grid">
        {events.map((e, i) => {
          const Icon = e.icon;
          const isUpcoming = e.status === "upcoming";
          return (
            <motion.article
              key={e.title}
              className="event-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="event-card__top">
                <div className="event-card__icon">
                  <Icon size={20} />
                </div>
                <span
                  className={`event-card__badge ${
                    isUpcoming ? "event-card__badge--upcoming" : "event-card__badge--done"
                  }`}
                >
                  {isUpcoming ? "Upcoming" : "Completed"}
                </span>
              </div>
              <span className="event-card__type">{e.type}</span>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              <div className="event-card__meta">
                <span><FaRegCalendarAlt size={13} /> {e.date}</span>
                <span><FaMapMarkerAlt size={13} /> {e.location}</span>
                <span><FaUsers size={13} /> {e.participants}</span>
              </div>
              {e.exploreLink && (
                <a
                  href={e.exploreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-card__explore"
                >
                  Explore more <FaArrowRight size={12} />
                </a>
              )}
            </motion.article>
          );
        })}
      </div>

      <div className="events__footer-link">
        <Link to="/events" className="events__explore-all">
          Explore more events <FaArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}

function FossFridaysSection() {
  return (
    <section className="foss-fridays">
      <div className="foss-fridays__grid">
        <motion.div
          className="foss-fridays__copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">// weekly dose of open source</span>
          <h2>FOSS Fridays</h2>
          <p>
            FOSS Fridays is our weekly newsletter-meets-reel day — every Friday,
            our members put together short, punchy reels breaking down open-source
            projects, tools, and tech news for the community. Quick to watch,
            easy to learn from, and made entirely by students, for students.
          </p>
          <div className="foss-fridays__meta">
            <span><FaRegCalendarAlt size={13} /> Every Friday</span>
            <span><FaUsers size={13} /> Hosted by club members</span>
          </div>
          <Link to="/fossfridays" className="about-brief__link">
            Explore FOSS Fridays <FaArrowRight size={13} />
          </Link>
        </motion.div>

        <motion.div
          className="foss-fridays__player"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a
            href={FOSS_FRIDAYS_EP1_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="reel-player"
            aria-label="Watch FOSS Fridays Episode 1 on Instagram"
          >
            <img
              src="/foss-fridays-thumb.jpeg"
              alt="FOSS Fridays Episode 1"
              className="reel-player__thumb"
            />
            <div className="reel-player__overlay">
              <span className="reel-player__play-btn">
                <FaPlay size={20} />
              </span>
              <span className="reel-player__label">
                <FaInstagram size={12} /> Episode 01
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const team = [
  { name: "Bhavya Shah", position: "Advisory", photo: "/team/bhavya-shah.png" },
  { name: "Sonal Aggarwal", position: "Chairperson", photo: "/team/sonal-aggarwal.png" },
  { name: "Prathamesh Mahadik", position: "Vice Chairperson", photo: "/team/prathamesh-mahadik.png" },
  { name: "Preet Agarwal", position: "Vice Chairperson", photo: "/team/preet-agarwal.png" },
  { name: "Jash Vakharia", position: "Secretary", photo: "/team/jash-vakharia.png" },
];

function TeamSection() {
  return (
    <section className="team">
      <div className="section-head">
        <span className="eyebrow">// the people behind it</span>
        <h2>Meet Our Team</h2>
      </div>

      <div className="team__grid">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            className="team-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <span className="team-card__position">{m.position}</span>
            <div className="team-card__photo-wrap">
              <img src={m.photo} alt={m.name} className="team-card__photo" />
            </div>
            <h3 className="team-card__name">{m.name}</h3>
          </motion.div>
        ))}
      </div>

      <div className="team__footer-link">
        <Link to="/team" className="events__explore-all">
          See our entire team <FaArrowRight size={13} />
        </Link>
      </div>
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

export default function LandingPage() {
  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
      <FossFridaysSection />
      <TeamSection />
      <Footer />
    </div>
  );
}