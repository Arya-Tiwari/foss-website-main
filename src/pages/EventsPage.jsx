import { motion } from "framer-motion";
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { upcomingEvents, pastEvents } from "../data/events";
import "./EventsPage.css";

// Drop photos into public/events/ and update paths below.
// size controls the frame's footprint on the wall: "tall" | "wide" | "lg" | "sm"
// Drop photos into public/events/ and update paths below.
// size controls the frame's footprint on the wall: "tall" | "wide" | "lg" | "sm" | "xl"
const galleryPhotos = [
  { src: "/events/gallery-1.jpeg", alt: "FOSS Unlocked orientation crowd", size: "tall" },
  { src: "/events/gallery-2.jpeg", alt: "COMMIT hackathon team building", size: "tall" },
  { src: "/events/gallery-3.jpeg", alt: "Workshop hands-on session", size: "sm" },
  { src: "/events/gallery-6.jpeg", alt: "Code Forge finalists on stage", size: "lg" },
  { src: "/events/gallery-5.jpeg", alt: "Speaker session Q&A", size: "sm" },
  { src: "/events/gallery-8.jpeg", alt: "Team celebrating a win", size: "xl" },
  { src: "/events/gallery-4.jpeg", alt: "Workshop group discussion", size: "lg" },
];

function EventsHero() {
  return (
    <section className="events-hero">
      <motion.div
        className="events-hero__inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">// what we've shipped, what's next</span>
        <h1>Events</h1>
        <p className="events-hero__subtitle">
          Workshops, hackathons and everything in between — here's where the
          FOSS Club has been, and where we're headed next.
        </p>
      </motion.div>
    </section>
  );
}

function UpcomingSection() {
  return (
    <section className="upcoming">
      <div className="section-head">
        <span className="eyebrow">// mark your calendars</span>
        <h2>Upcoming Events</h2>
      </div>

      <div className="events__grid">
        {upcomingEvents.map((e, i) => {
          const Icon = e.icon;
          return (
            <motion.article
              key={e.id}
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
                <span className="event-card__badge event-card__badge--upcoming">
                  Upcoming
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
    </section>
  );
}

function PastSection() {
  return (
    <section className="past">
      <div className="section-head">
        <span className="eyebrow">// where we've been</span>
        <h2>Past Events</h2>
      </div>

      <div className="past__grid">
        {pastEvents.map((e, i) => {
          const Icon = e.icon;
          return (
            <motion.article
              key={e.id}
              className="past-event-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="past-event-card__top">
                <div className="past-event-card__icon">
                  <Icon size={18} />
                </div>
                <span className="event-card__badge event-card__badge--done">
                  Completed
                </span>
              </div>
              <span className="event-card__type">{e.type}</span>
              <h3>{e.title}</h3>
              <p>{e.summary}</p>
              <span className="past-event-card__date">
                <FaRegCalendarAlt size={12} /> {e.date}
              </span>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="gallery">
      <div className="section-head section-head--center">
        <span className="eyebrow">// moments</span>
        <h2>Gallery</h2>
      </div>

      <div className="gallery__wall">
        {galleryPhotos.map((photo, i) => (
          <motion.div
            key={photo.src}
            className={`gallery-item gallery-item--${photo.size}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          >
            <div className="gallery-frame">
              <div className="gallery-frame__mat">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <div className="landing">
      <Navbar />
      <EventsHero />
      <UpcomingSection />
      <PastSection />
      <GallerySection />
      <Footer />
    </div>
  );
}