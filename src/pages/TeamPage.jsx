import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supercore, departments } from "../data/teamMembers";
import "./TeamPage.css";

// Generates a simple initials avatar as a data-URI SVG so cards never break
// if a photo is missing — no network dependency.
function initialsAvatar(name) {
  const initials = (name || "?")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
    <rect width='100%' height='100%' fill='#1b1b1b'/>
    <text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle'
      font-family='Arial, sans-serif' font-size='96' fill='#4ecb74'>${initials}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function handleImgError(e, name) {
  e.currentTarget.onerror = null; // prevent loop if the fallback also 404s
  e.currentTarget.src = initialsAvatar(name);
}

function TeamCard({ member: m }) {
  const { name, position, photo, description, socials } = m;

  return (
    <div className="team-card-wrap">
      <div className="team-card">
        {/* Front face — always visible, sets the card's natural size */}
        <div className="team-card__front">
          <span className="team-card__position">{position}</span>
          <div className="team-card__photo-wrap">
            <img
              src={photo}
              alt={name}
              className="team-card__photo"
              loading="lazy"
              onError={(e) => handleImgError(e, name)}
            />
          </div>
          <h4 className="team-card__name">{name}</h4>
        </div>

        {/* Back face — slides up from the bottom, fully contained in the
            card's own box, so it can never spill outside the row/frame. */}
        <div className="team-card__back">
          <span className="team-card__back-position">{position}</span>
          <h4 className="team-card__back-name">{name}</h4>
          <p className="team-card__desc">{description}</p>
          <div className="team-card__socials">
            {socials?.github && (
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label={`${name} on GitHub`}>
                <FaGithub />
              </a>
            )}
            {socials?.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label={`${name} on LinkedIn`}>
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSection({ title, members, className }) {
  return (
    <section className={`team-section${className ? ` ${className}` : ""}`}>
      <motion.h2
        className="team-section__title"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <div className="team-grid team-grid--row">
        {members.map((m) => (
          <TeamCard key={m.id} member={m} />
        ))}
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <div className="landing">
      <Navbar />

      <section className="team-hero">
        <motion.div
          className="team-hero__inner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">// the people behind foss</span>
          <h1>Our Team</h1>
          <p className="team-hero__subtitle">
            Meet the students who plan, build, and run everything the FOSS
            Club does.
          </p>
        </motion.div>
      </section>

      <TeamSection title="Supercore" members={supercore.members} />

      {departments.map((dept, i) => (
        <TeamSection
          key={dept.title}
          title={dept.title}
          members={dept.members}
          className={i === 0 ? "team-section--first-dept" : undefined}
        />
      ))}

      <Footer />
    </div>
  );
}