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
  FaMicrophone,
  FaChalkboardTeacher,
  FaTrophy,
  FaLaptopCode,
  FaPodcast,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

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

const whatWeDoItems = [
  {
    icon: FaMicrophone,
    title: "Speaker Sessions",
    description:
      "Sessions with industry experts and open source contributors sharing real-world insights and experiences.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Technical Workshops",
    description:
      "Hands-on workshops on open source tools and technologies to build practical, real-world skills.",
  },
  {
    icon: FaTrophy,
    title: "National Level Hackathons",
    description:
      "Large-scale hackathons bringing together students from across the country to build and innovate.",
  },
  {
    icon: FaLaptopCode,
    title: "FOSS Projects",
    description:
      "Helping our team members learn and build real-life, CV-worthy projects through open source contribution.",
  },
  {
    icon: FaPodcast,
    title: "Podcasts",
    description:
      "Conversations with technologists and open source enthusiasts exploring ideas, careers, and community.",
  },
];

function WhatWeDoSection() {
  return (
    <section className="what-we-do">
      <motion.div
        className="what-we-do__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">// how we bring it to life</span>
        <h2>What We Do</h2>

        <div className="what-we-do__grid">
          {whatWeDoItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="what-we-do-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="what-we-do-card__icon">
                  <Icon size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <Link to="/events" className="what-we-do__cta">
          Explore more <FaArrowRight size={13} />
        </Link>
      </motion.div>
    </section>
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
      <WhatWeDoSection />
      <Footer />
    </div>
  );
}