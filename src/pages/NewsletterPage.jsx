import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegCalendarAlt,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { newsletters, getNewsletterById } from "../data/newsletters";
import "./NewsletterPage.css";

export default function NewsletterPage() {
  const { issueId } = useParams();
  const newsletter = getNewsletterById(issueId);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [issueId]);

  if (!newsletter) {
    return <Navigate to="/fossfridays" replace />;
  }

  const currentIndex = newsletters.findIndex((n) => n.id === newsletter.id);
  const prevIssue = newsletters[currentIndex - 1];
  const nextIssue = newsletters[currentIndex + 1];

  return (
    <div className="newsletter-page">
      <Navbar />

      <section className="nl-hero">
        <div className="nl-hero__inner">
          <Link to="/fossfridays" className="nl-back">
            <FaArrowLeft size={12} /> All issues
          </Link>
          <span className="eyebrow">// foss fridays</span>
        </div>
      </section>

      <section className="nl-body">
        <motion.article
          className="nl-frame"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="nl-frame__heading">{newsletter.issue}</h1>
          <div className="nl-frame__rule" />

          <h2 className="nl-frame__title">{newsletter.title}</h2>

          <div className="nl-frame__meta">
            <span className="nl-frame__date">
              <FaRegCalendarAlt size={13} /> {newsletter.date}
            </span>
            {newsletter.topics && newsletter.topics.length > 0 && (
              <div className="nl-frame__topics">
                {newsletter.topics.map((t) => (
                  <span key={t} className="nl-frame__topic">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="nl-frame__body">
            {newsletter.content.map((item, i) =>
              item.type === "question" ? (
                <h3 key={i} className="nl-frame__question">
                  {item.text}
                </h3>
              ) : (
                <p key={i} className="nl-frame__line">
                  {item.text}
                </p>
              )
            )}
          </div>

          <div className="nl-frame__nav">
            {prevIssue ? (
              <Link to={`/fossfridays/${prevIssue.id}`} className="nl-frame__nav-link">
                <FaArrowLeft size={12} /> {prevIssue.issue}
              </Link>
            ) : (
              <span />
            )}
            {nextIssue ? (
              <Link
                to={`/fossfridays/${nextIssue.id}`}
                className="nl-frame__nav-link nl-frame__nav-link--next"
              >
                {nextIssue.issue} <FaArrowRight size={12} />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </motion.article>
      </section>

      <Footer />
    </div>
  );
}