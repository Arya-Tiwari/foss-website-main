import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaUsers,
  FaHandshake,
  FaMicrophone,
  FaCommentDots,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactPage.css";

const EMAIL = "fossmpstme@gmail.com";
const PHONE_DISPLAY = "+91 79000 93744";
const PHONE_TEL = "+917900093744";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: EMAIL,
    description: "Send us an email for general inquiries.",
    actionLabel: "Send email",
    action: `mailto:${EMAIL}`,
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: PHONE_DISPLAY,
    description: "Reach out to us directly for quick questions.",
    actionLabel: "Call us",
    action: `tel:${PHONE_TEL}`,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "MPSTME, NMIMS",
    description: "Mukesh Patel School of Technology Management & Engineering, Mumbai.",
    actionLabel: null,
    action: null,
  },
];

const socialLinks = [
  {
    icon: FaInstagram,
    name: "Instagram",
    description: "Follow our latest updates, reels, and event drops.",
    href: "https://www.instagram.com/foss_club_mpstme/",
  },
  {
    icon: FaGithub,
    name: "GitHub Organisation",
    description: "Check out our repos and join the org to contribute.",
    href: "https://github.com/FOSS-Club-MPSTME",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    description: "Connect with us and the club's alumni network professionally.",
    href: "https://www.linkedin.com/company/mpstmefoss/",
  },
];

const reasons = [
  {
    icon: FaUsers,
    title: "Join the Club",
    description:
      "We run speaker sessions, technical workshops, national-level hackathons, and podcasts, all year round. Come be part of the community running them, not just attending.",
  },
  {
    icon: FaHandshake,
    title: "Collaborate on Projects",
    description:
      "From FOSS Fridays to full-blown hackathons like COMMIT, our members build real, CV-worthy projects together. If you like building things, there's a seat for you.",
  },
  {
    icon: FaMicrophone,
    title: "Speak or Mentor",
    description:
      "Have something worth sharing? Members and alumni regularly host our workshops and speaker sessions — once you've learned it, you can be the one teaching it next.",
  },
  {
    icon: FaCommentDots,
    title: "Just Say Hi",
    description:
      "Curious about FOSS, our events, or how to get involved but not sure where to start? That's a good enough reason to reach out — we'll point you in the right direction.",
  },
];

function ContactHero() {
  return (
    <section className="contact-hero">
      <motion.div
        className="contact-hero__inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">// let's talk</span>
        <h1>Contact Us</h1>
        <p className="contact-hero__subtitle">
          Ready to join our community or have a question? We'd love to hear
          from you.
        </p>
      </motion.div>
    </section>
  );
}

function ContactInfoSection() {
  return (
    <section className="contact-info">
      <div className="section-head">
        <span className="eyebrow">// reach out</span>
        <h2>Get in Touch</h2>
      </div>

      <div className="contact-info__grid">
        {contactInfo.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.title}
              className="contact-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="contact-card__icon">
                <Icon size={20} />
              </div>
              <h3>{c.title}</h3>
              <p className="contact-card__value">{c.value}</p>
              <p className="contact-card__desc">{c.description}</p>
              {c.action && (
                <a href={c.action} className="contact-card__action">
                  {c.actionLabel} <FaArrowRight size={12} />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function FollowSection() {
  return (
    <section className="follow">
      <div className="section-head">
        <span className="eyebrow">// stay connected</span>
        <h2>Follow Us</h2>
      </div>

      <div className="follow__grid">
        {socialLinks.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="social-card__icon">
                <Icon size={22} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <span className="social-card__cta">
                Follow us <FaArrowRight size={12} />
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

function WhyJoinSection() {
  return (
    <section className="why-join">
      <div className="section-head section-head--center">
        <span className="eyebrow">// why get involved</span>
        <h2>Why Join Us</h2>
        <p className="why-join__intro">
          We're a community of builders, tinkerers, and open-source
          enthusiasts — and every event we run was built by members who once
          just reached out, the same way you're about to.
        </p>
      </div>

      <div className="why-join__grid">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.title}
              className="reason-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="reason-card__icon">
                <Icon size={20} />
              </div>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="why-join__cta">
        <a href={`mailto:${EMAIL}`} className="btn btn--primary">
          Get in touch <FaArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="landing">
      <Navbar />
      <ContactHero />
      <ContactInfoSection />
      <FollowSection />
      <WhyJoinSection />
      <Footer />
    </div>
  );
}