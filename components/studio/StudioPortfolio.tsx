"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type PointerEvent,
} from "react";
import SystemsStudio from "./SystemsStudio";
import { siteConfig } from "@/lib/constants/site";

type Work = {
  id: string;
  name: string;
  category: string;
  description: string;
  focus: string[];
  artwork?: string;
  premise: string;
};

const works: Work[] = [
  {
    id: "01",
    name: "Document intelligence",
    category: "LOCAL LLMS / RETRIEVAL",
    description: "A conversation with your knowledge.",
    focus: ["Local LLMs", "Vector databases", "RAG pipelines"],
    artwork: "/images/studio/knowledge-art.png",
    premise:
      "Exploring local language models, vector databases, and retrieval pipelines for document intelligence. The project brings these ideas together around a simple question: how can a language model work with the knowledge in our documents?",
  },
  {
    id: "02",
    name: "Reunify",
    category: "COMPUTER VISION / HUMAN CONNECTION",
    description: "Intelligence in service of connection.",
    focus: ["Facial recognition", "Disaster response", "Family reunification"],
    artwork: "/images/studio/reunify-art.png",
    premise:
      "A lost-person identification project using facial recognition and disaster-response workflows. Its focus is the connection between visual identification and the human need to find missing loved ones.",
  },
  {
    id: "03",
    name: "Microplastic detection",
    category: "PORTABLE AI / CONCEPT",
    description: "Small particles. A bigger question.",
    focus: [
      "Microplastic detection",
      "Portable AI concept",
      "Spectroscopy-inspired exploration",
    ],
    premise:
      "A portable AI system concept exploring microplastic detection. Spectroscopy-inspired visuals express the idea of revealing what is difficult to see; the concept is an exploration, not a validated sensing device.",
  },
  {
    id: "04",
    name: "Prompt So Good",
    category: "LANGUAGE / EXPERIMENTATION",
    description: "Exploring the space between a prompt and a useful response.",
    focus: ["Prompt design", "AI responses", "LLM experimentation"],
    premise:
      "An exploration of prompt engineering and language-model responses, focused on the relationship between the way a question is framed and the response it produces.",
  },
  {
    id: "05",
    name: "Smart Bin",
    category: "IOT / CONCEPT",
    description: "An IoT-inspired approach to smarter waste management.",
    focus: ["Sensors", "IoT signals", "Smart city automation"],
    premise:
      "A smart waste-management concept exploring sensors, connected signals, and city automation. The project considers how everyday infrastructure could become more responsive through connected devices.",
  },
  {
    id: "06",
    name: "Traffic Accident Dashboard",
    category: "DATA / VISUALIZATION",
    description: "Making traffic-accident insights easier to explore.",
    focus: ["Data visualization", "Road networks", "Analytics dashboard"],
    premise:
      "A dashboard project for exploring traffic-accident insights through data visualization and road-network context. Its central focus is making information easier to inspect and understand.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M30 0c2 22 8 28 30 30-22 2-28 8-30 30C28 38 22 32 0 30 22 28 28 22 30 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const readMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const serverMotion = () => false;

function ParticleStudy() {
  return (
    <div className="particle-study" aria-hidden="true">
      <svg viewBox="0 0 680 440" fill="none">
        <defs>
          <radialGradient id="lens" cx=".3" cy=".25" r=".9">
            <stop stopColor="#fffef7" stopOpacity=".85" />
            <stop offset=".4" stopColor="#c2d7cb" stopOpacity=".45" />
            <stop offset=".8" stopColor="#628d7c" stopOpacity=".6" />
            <stop offset="1" stopColor="#244d40" stopOpacity=".9" />
          </radialGradient>
          <radialGradient id="lens-shadow">
            <stop stopColor="#244d40" stopOpacity=".2" />
            <stop offset="1" stopColor="#244d40" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="lens-rim"
            x1="180"
            x2="510"
            y1="80"
            y2="340"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fffdf1" />
            <stop offset=".5" stopColor="#829e8e" />
            <stop offset="1" stopColor="#f8f6dc" />
          </linearGradient>
        </defs>
        <ellipse cx="350" cy="372" rx="210" ry="46" fill="url(#lens-shadow)" />
        {[70, 110, 150, 190, 230, 270, 310, 350].map((y) => (
          <path
            key={y}
            d={`M0 ${y}Q160 ${y - 40} 340 ${y}T680 ${y}`}
            stroke="#446b59"
            strokeOpacity=".15"
          />
        ))}
        <g className="lens-object">
          <circle
            cx="340"
            cy="218"
            r="151"
            fill="url(#lens)"
            stroke="url(#lens-rim)"
            strokeWidth="5"
          />
          <circle
            cx="340"
            cy="218"
            r="140"
            stroke="#f7f7e9"
            strokeOpacity=".65"
          />
          <path
            d="M226 170a125 125 0 0 1 150-72"
            stroke="#fff"
            strokeOpacity=".75"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {[
            [270, 185, 7],
            [345, 135, 4],
            [385, 245, 9],
            [305, 288, 5],
            [403, 175, 4],
            [255, 250, 3],
            [350, 225, 3],
            [333, 180, 5],
          ].map(([x, y, r], i) => (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={r + 7}
                stroke="#254f3e"
                strokeOpacity=".22"
              />
              <circle
                cx={x}
                cy={y}
                r={r}
                fill={i % 2 ? "#f4efe0" : "#476e56"}
              />
            </g>
          ))}
          <path
            d="M282 202h-17v-17m108 52h17v17"
            stroke="#315a46"
            strokeWidth="1.5"
          />
        </g>
        <path
          d="M490 158h83m-82 6v-12M190 298h-80m80 6v-12"
          stroke="#476e56"
          strokeOpacity=".6"
        />
        <circle cx="575" cy="158" r="3" fill="#476e56" />
        <circle cx="108" cy="298" r="3" fill="#476e56" />
      </svg>
      <span className="study-caption">A STUDY IN SEEING THE UNSEEN</span>
    </div>
  );
}

export default function StudioPortfolio() {
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    readMotion,
    serverMotion,
  );
  const [paused, setPaused] = useState(false);
  const motionEnabled = !paused && !reducedMotion;
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [copyState, setCopyState] = useState("Copy email");
  const root = useRef<HTMLDivElement>(null);
  const portrait = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!motionEnabled || !root.current) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animations.push(
            entry.target.animate(
              [
                { opacity: 0.15, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 800,
                easing: "cubic-bezier(.2,.7,.2,1)",
                fill: "none",
              },
            ),
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    root.current
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [motionEnabled]);

  useEffect(() => {
    if (!menuOpen) return;
    root.current
      ?.querySelector<HTMLAnchorElement>("#main-navigation a")
      ?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (selectedWork) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedWork]);

  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
      document.body.style.overflow = "";
    },
    [],
  );

  function movePortrait(event: PointerEvent<HTMLDivElement>) {
    if (!motionEnabled || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    portrait.current?.style.setProperty("--portrait-x", `${x * 8}px`);
    portrait.current?.style.setProperty("--portrait-y", `${y * 6}px`);
  }
  function resetPortrait() {
    portrait.current?.style.setProperty("--portrait-x", "0px");
    portrait.current?.style.setProperty("--portrait-y", "0px");
  }
  function openProject(work: Work) {
    setSelectedWork(work);
  }
  function closeProject() {
    dialog.current?.close();
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyState("Email copied");
    } catch {
      setCopyState("Please use the email link");
    }
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyState("Copy email"), 3000);
  }

  return (
    <div
      ref={root}
      className="studio"
      data-motion={motionEnabled ? "on" : "off"}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Dharanish, home">
          <Star />
          dharanish<span>.</span>
        </a>
        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Selected work
          </a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>
            Approach
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="motion-button"
            aria-label={
              reducedMotion
                ? "Reduced motion follows your device setting"
                : motionEnabled
                  ? "Pause animations"
                  : "Enable animations"
            }
            aria-pressed={!motionEnabled}
            disabled={reducedMotion}
            onClick={() => {
              setPaused(!paused);
              resetPortrait();
            }}
            title={motionEnabled ? "Pause animations" : "Motion paused"}
          >
            <span aria-hidden="true">{motionEnabled ? "Ⅱ" : "▷"}</span>
            <span className="motion-label">Motion</span>
          </button>
          <a href="#contact" className="header-contact">
            Let’s talk <Arrow diagonal />
          </a>
          <button
            ref={menuButton}
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        <section
          className="hero page-width"
          id="home"
          aria-labelledby="hero-heading"
        >
          <div className="hero-copy">
            <p className="eyebrow hero-enter">
              <span className="tiny-dot" /> AI & MACHINE LEARNING ENGINEER
            </p>
            <h1 id="hero-heading" className="hero-enter">
              Intelligence,
              <br />
              <em>with intent.</em>
              <Star className="headline-star" />
            </h1>
            <p className="hero-description hero-enter">
              I’m <strong>Dharanish.</strong> I build practical AI systems for
              the world beyond the notebook.
            </p>
            <div className="hero-actions hero-enter">
              <a className="button button-dark" href="#work">
                Explore selected work <Arrow diagonal />
              </a>
              <a className="text-link" href="#about">
                A little about me <span>↓</span>
              </a>
            </div>
            <div className="hero-footnote hero-enter">
              <span className="small-cross">+</span>
              <span>
                HUMAN CURIOSITY.
                <br />
                ENGINEERED POSSIBILITIES.
              </span>
            </div>
          </div>
          <div
            ref={portrait}
            className="portrait-scene"
            onPointerMove={movePortrait}
            onPointerLeave={resetPortrait}
          >
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-backdrop" aria-hidden="true">
              <svg viewBox="0 0 440 500" fill="none">
                {Array.from({ length: 12 }, (_, i) => (
                  <path
                    key={i}
                    d={`M${-120 + i * 26} 520C${-70 + i * 23} 200 ${190 + i * 20} 370 ${280 + i * 23} -40`}
                    stroke="#bdd2b6"
                    strokeOpacity=".2"
                  />
                ))}
                <circle
                  cx="316"
                  cy="126"
                  r="50"
                  stroke="#bdd2b6"
                  strokeOpacity=".28"
                />
                <circle
                  cx="316"
                  cy="126"
                  r="81"
                  stroke="#bdd2b6"
                  strokeOpacity=".15"
                />
              </svg>
            </div>
            <span className="portrait-note">
              a human behind
              <br />
              <em>the intelligence.</em>
              <svg
                width="70"
                height="45"
                viewBox="0 0 70 45"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 7c38-8 52 3 49 29m-8-8 8 9 8-9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </span>
            <div className="portrait-person">
              <Image
                src="/images/profile.png"
                alt="Dharanish, in a warm green and sepia cutout portrait"
                width={941}
                height={1672}
                sizes="(max-width: 600px) 440px, 600px"
                preload
              />
            </div>
            <div className="portrait-nameplate">
              <span className="nameplate-mark">
                <Star />
              </span>
              <div>
                <strong>Dharanish R P</strong>
                <span>CURIOUS MIND. PRACTICAL BUILDER.</span>
              </div>
              <Arrow diagonal />
            </div>
            <span className="portrait-index" aria-hidden="true">
              FIG. 01 — THE ENGINEER
            </span>
          </div>
        </section>

        <div className="discipline-strip">
          <div className="page-width">
            <span>THE SPACES I EXPLORE</span>
            <p>
              Edge AI <Star /> Local LLMs <Star /> Computer Vision <Star /> RAG
              Systems
            </p>
          </div>
        </div>

        <section
          className="work-section page-width"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="section-kicker">
            <span>01 / SELECTED EXPLORATIONS</span>
            <span>IDEAS → SYSTEMS → POSSIBILITIES</span>
          </div>
          <div className="section-intro" data-reveal>
            <h2 id="work-heading">
              Built with curiosity.
              <br />
              <em>Made to matter.</em>
            </h2>
            <p>
              A collection of projects and concepts connecting artificial
              intelligence to the things that make us human.
            </p>
          </div>
          <div className="featured-grid">
            {works.slice(0, 2).map((work) => (
              <article
                className={`project project-${work.id}`}
                key={work.id}
                data-reveal
              >
                <button
                  className="project-cover"
                  aria-label={`Explore ${work.name}`}
                  onClick={() => openProject(work)}
                >
                  <Image
                    src={work.artwork!}
                    alt={
                      work.id === "01"
                        ? "Sculptural paper and glass connected by a brass thread"
                        : "Ivory and forest-green arches connected by a brass filament"
                    }
                    fill
                    loading="eager"
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span className="cover-index">{work.id} / SELECTED WORK</span>
                  <span className="cover-action">
                    <Arrow diagonal />
                  </span>
                  <span className="cover-word">
                    {work.id === "01"
                      ? "Knowledge, connected."
                      : "Closer, together."}
                  </span>
                </button>
                <div className="project-meta">
                  <p className="eyebrow">{work.category}</p>
                  <button
                    className="project-title"
                    onClick={() => openProject(work)}
                  >
                    {work.name}
                    <Arrow diagonal />
                  </button>
                  <p>{work.description}</p>
                </div>
              </article>
            ))}
          </div>
          <article className="project micro-project" data-reveal>
            <button
              className="micro-cover"
              onClick={() => openProject(works[2])}
              aria-label="Explore Microplastic detection"
            >
              <ParticleStudy />
              <span className="cover-index">03 / CONCEPT EXPLORATION</span>
              <span className="cover-action">
                <Arrow diagonal />
              </span>
            </button>
            <div className="micro-copy">
              <p className="eyebrow">{works[2].category}</p>
              <h3>
                Seeing what
                <br />
                <em>we leave behind.</em>
              </h3>
              <p>
                A portable AI concept exploring one of our smallest
                environmental challenges.
              </p>
              <button
                className="text-link"
                onClick={() => openProject(works[2])}
              >
                Explore the concept <Arrow diagonal />
              </button>
            </div>
          </article>
          <div className="project-index" data-reveal>
            <p className="eyebrow">MORE FROM THE WORKBENCH</p>
            {works.slice(3).map((work) => (
              <button
                key={work.id}
                className="index-row"
                onClick={() => openProject(work)}
              >
                <span className="index-number">{work.id}</span>
                <span className="index-name">{work.name}</span>
                <span className="index-category">{work.category}</span>
                <Arrow diagonal />
              </button>
            ))}
          </div>
        </section>

        <SystemsStudio motionEnabled={motionEnabled} />

        <section
          className="about-section page-width"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="section-kicker">
            <span>03 / A LITTLE ABOUT ME</span>
            <span>ALWAYS A WORK IN PROGRESS</span>
          </div>
          <div className="about-grid" data-reveal>
            <div className="about-title">
              <Star className="about-star" />
              <h2 id="about-heading">
                An engineer’s mind.
                <br />
                <em>A maker’s instinct.</em>
              </h2>
            </div>
            <div className="about-story">
              <p className="lead">
                I’m drawn to the engineering around the model.
              </p>
              <p>
                The interface. The retrieval pipeline. The device. And, most
                importantly, the person using it.
              </p>
              <p>
                My work spans computer vision, language systems, and full-stack
                AI. Hackathons are where I test ideas quickly; curiosity is what
                keeps them moving.
              </p>
              <a
                className="text-link"
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
              >
                Find me on GitHub <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="recognition">
            <div className="recognition-label">
              <span className="eyebrow">MOMENTS ALONG THE WAY</span>
              <span>
                A little recognition.
                <br />A lot of building.
              </span>
            </div>
            <div className="recognition-list">
              <div>
                <span className="award-icon" aria-hidden="true">
                  ✳
                </span>
                <h3>
                  Createathon <em>2024</em>
                </h3>
                <span>WINNER</span>
              </div>
              <div>
                <span className="award-icon" aria-hidden="true">
                  ✳
                </span>
                <h3>AI Art Biennale</h3>
                <span>ORGANIZER</span>
              </div>
            </div>
          </div>
          <div className="toolbox" data-reveal>
            <span className="eyebrow">TOOLS FOR THE THINKING</span>
            <p>
              Python <span>/</span> Machine Learning <span>/</span> FastAPI{" "}
              <span>/</span> React <span>/</span> Next.js <span>/</span>{" "}
              Computer Vision <span>/</span> RAG
            </p>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="page-width">
            <div className="section-kicker">
              <span>04 / THE NEXT CONVERSATION</span>
              <span>GOOD THINGS START WITH A HELLO</span>
            </div>
            <div className="contact-main" data-reveal>
              <h2 id="contact-heading">
                Have an idea?
                <br />
                <em>Let’s make it real.</em>
              </h2>
              <a
                className="contact-circle"
                href={`mailto:${siteConfig.email}`}
                aria-label="Email Dharanish"
              >
                <Arrow diagonal />
              </a>
            </div>
            <div className="contact-bottom">
              <div className="email-group">
                <a className="email-link" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="copy-button"
                  aria-live="polite"
                >
                  {copyState}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="5"
                      y="5"
                      width="9"
                      height="9"
                      rx="1"
                      stroke="currentColor"
                    />
                    <path d="M10 3V2H2v8h1" stroke="currentColor" />
                  </svg>
                </button>
              </div>
              <div className="social-links">
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  GitHub <Arrow diagonal />
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <Arrow diagonal />
                </a>
              </div>
            </div>
            <footer>
              <a className="wordmark" href="#home">
                <Star />
                dharanish.
              </a>
              <p>BUILT WITH CURIOSITY. ALWAYS EVOLVING.</p>
              <a href="#home" className="back-top">
                Back to top ↑
              </a>
            </footer>
          </div>
        </section>
      </main>

      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="dialog-title"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            "button:not([disabled]), a[href]",
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          }
          if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProject();
        }}
        onClose={() => {
          document.body.style.overflow = "";
          setSelectedWork(null);
        }}
      >
        <div className="dialog-content">
          <div className="dialog-top">
            <span className="eyebrow">PROJECT NOTES / {selectedWork?.id}</span>
            <button
              className="dialog-close"
              onClick={closeProject}
              aria-label="Close project details"
              autoFocus
            >
              ×
            </button>
          </div>
          {selectedWork && (
            <>
              <p className="eyebrow">{selectedWork.category}</p>
              <h2 id="dialog-title">{selectedWork.name}</h2>
              <p className="dialog-lead">{selectedWork.description}</p>
              {selectedWork.artwork && (
                <div className="dialog-art">
                  <Image
                    src={selectedWork.artwork}
                    alt="Conceptual project artwork"
                    fill
                    sizes="(max-width: 700px) 90vw, 700px"
                  />
                </div>
              )}
              <h3>The idea</h3>
              <p>{selectedWork.premise}</p>
              <h3>Areas of exploration</h3>
              <ul className="focus-list">
                {selectedWork.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {selectedWork.id === "01" && (
                <p className="original-title">
                  Full project name: Local LLM Document Intelligence System.
                </p>
              )}
              <p className="art-note">
                {selectedWork.artwork
                  ? "Concept artwork illustrates the idea; it is not a product screenshot."
                  : "These notes describe the project’s focus and concept."}
              </p>
              <a
                className="text-link"
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Let's talk about ${selectedWork.name}`)}`}
              >
                Let’s talk about this project <Arrow diagonal />
              </a>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
}
