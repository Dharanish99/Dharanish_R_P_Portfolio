"use client";

import { useId, useState } from "react";
import styles from "./SystemsStudio.module.css";

const studies = [
  {
    id: "knowledge",
    label: "Knowledge",
    discipline: "Retrieval-augmented generation",
    steps: ["Documents", "Retrieve", "Grounded response"],
    caption: "Bring the right context into the answer.",
    description:
      "Connect documents, retrieval, and language models so a response can be traced back to its source.",
    note: "Context → reasoning",
  },
  {
    id: "perception",
    label: "Perception",
    discipline: "Computer vision",
    steps: ["Image", "Understand", "Useful signal"],
    caption: "Turn what a camera sees into something useful.",
    description:
      "Connect visual input to a focused task, then make the model’s output understandable to the person using it.",
    note: "Observation → understanding",
  },
  {
    id: "edge",
    label: "Edge",
    discipline: "On-device intelligence",
    steps: ["Device", "Local inference", "Action"],
    caption: "Put intelligence closer to where it is needed.",
    description:
      "Explore how local models, device constraints, and clear feedback can work together in a practical system.",
    note: "Intelligence → interaction",
  },
] as const;

type StudyKind = (typeof studies)[number]["id"];

function InputDrawing({ kind }: { kind: StudyKind }) {
  if (kind === "knowledge") {
    return (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M22 24H68V82H22Z" opacity=".4" />
        <path d="M29 18H75V76H29Z" opacity=".65" />
        <path d="M36 12H69L82 25V70H36Z" className={styles.solidPaper} />
        <path d="M69 12V25H82M46 37H71M46 45H71M46 53H61" />
        <path d="M22 89H82" opacity=".3" />
      </svg>
    );
  }

  if (kind === "perception") {
    return (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <rect x="18" y="19" width="64" height="62" rx="2" opacity=".45" />
        <path d="M12 31V13H30M70 13H88V31M88 69V87H70M30 87H12V69" />
        <circle cx="62" cy="37" r="7" />
        <path d="M24 70L40 49L54 63L62 53L77 72M18 50H82" opacity=".65" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <rect x="27" y="12" width="46" height="76" rx="6" />
      <path d="M42 19H58M33 71H67" opacity=".6" />
      <circle cx="50" cy="79" r="2" />
      <rect x="39" y="35" width="22" height="22" rx="1" />
      <path
        d="M44 30V35M50 30V35M56 30V35M44 57V62M50 57V62M56 57V62M34 40H39M34 46H39M34 52H39M61 40H66M61 46H66M61 52H66"
        opacity=".7"
      />
    </svg>
  );
}

function EngineDrawing({ kind }: { kind: StudyKind }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true">
      <circle cx="80" cy="80" r="72" opacity=".14" />
      <circle cx="80" cy="80" r="55" strokeDasharray="2 7" opacity=".5" />
      <path d="M8 80H28M132 80H152M80 8V28M80 132V152" opacity=".45" />
      <circle cx="80" cy="80" r="36" className={styles.engineCore} />
      {kind === "knowledge" ? (
        <>
          <path d="M61 67L80 57L99 67L80 77Z M61 79L80 89L99 79M61 91L80 101L99 91" />
          <circle cx="80" cy="25" r="3" className={styles.dotFill} />
          <circle cx="128" cy="108" r="3" className={styles.dotFill} />
          <circle cx="32" cy="108" r="3" className={styles.dotFill} />
        </>
      ) : kind === "perception" ? (
        <>
          <path d="M55 80C63 65 72 60 80 60S97 65 105 80C97 95 88 100 80 100S63 95 55 80Z" />
          <circle cx="80" cy="80" r="11" />
          <circle cx="80" cy="80" r="3" className={styles.dotFill} />
          <path
            d="M41 41L51 51M119 41L109 51M119 119L109 109M41 119L51 109"
            opacity=".6"
          />
        </>
      ) : (
        <>
          <rect x="65" y="65" width="30" height="30" rx="2" />
          <path d="M73 55V65M87 55V65M73 95V105M87 95V105M55 73H65M55 87H65M95 73H105M95 87H105" />
          <path d="M85 71L75 82H84L77 91" />
          <circle cx="25" cy="80" r="3" className={styles.dotFill} />
          <circle cx="135" cy="80" r="3" className={styles.dotFill} />
        </>
      )}
    </svg>
  );
}

function OutputDrawing({ kind }: { kind: StudyKind }) {
  if (kind === "knowledge") {
    return (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M18 21H82V67H44L30 80V67H18Z" />
        <path d="M29 34H69M29 44H61M29 54H48" opacity=".65" />
        <path d="M65 73L72 80L86 65" />
      </svg>
    );
  }

  if (kind === "perception") {
    return (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M15 77H85M15 23V77" opacity=".4" />
        <path d="M22 59H33L42 36L54 68L64 47H82" />
        <circle cx="64" cy="47" r="4" className={styles.solidPaper} />
        <path d="M64 20V35M57 27H71" opacity=".5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="29" opacity=".35" />
      <path d="M50 13V25M50 75V87M13 50H25M75 50H87" opacity=".7" />
      <path d="M35 50H65M54 39L65 50L54 61" />
    </svg>
  );
}

export default function SystemsStudio({
  motionEnabled,
}: {
  motionEnabled: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelId = useId();
  const headingId = useId();
  const study = studies[activeIndex];

  return (
    <section
      id="approach"
      className={styles.section}
      data-motion={motionEnabled}
      aria-labelledby={headingId}
    >
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span>
            <span className={styles.sectionNumber}>02</span> The way I think
          </span>
          <span className={styles.headerAside}>Connections, with intent.</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.editorial}>
            <h2 id={headingId} className={styles.heading}>
              Different pieces.
              <br />
              <em>
                One useful
                <br className={styles.desktopBreak} /> system.
              </em>
            </h2>
            <p className={styles.intro}>
              I’m interested in what happens between the model and the real
              world. The context. The constraints. The person using it.
            </p>
            <div className={styles.principle}>
              <span className={styles.principleMark} aria-hidden="true">
                ↗
              </span>
              <div>
                <span className={styles.microLabel}>A simple principle</span>
                <p>
                  Start with the problem.
                  <br />
                  Make the pieces work together.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.explorer}>
            <div
              className={styles.switcher}
              role="group"
              aria-label="Explore a system approach"
            >
              {studies.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={styles.studyButton}
                  aria-pressed={index === activeIndex}
                  aria-controls={panelId}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className={styles.buttonNumber}>0{index + 1}</span>
                  {item.label}
                  <span className={styles.selectionDot} aria-hidden="true" />
                </button>
              ))}
            </div>

            <figure
              id={panelId}
              className={styles.figure}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className={styles.diagramHeader}>
                <span>{study.discipline}</span>
                <span className={styles.figureNumber}>
                  Fig. 0{activeIndex + 1}
                </span>
              </div>
              <div className={styles.diagram} key={study.id}>
                <div className={styles.connectionLine} aria-hidden="true">
                  <span />
                  <span />
                </div>
                <div className={styles.diagramNode}>
                  <div className={styles.outerDrawing}>
                    <InputDrawing kind={study.id} />
                  </div>
                  <span className={styles.nodeStep}>01 / INPUT</span>
                  <span className={styles.nodeLabel}>{study.steps[0]}</span>
                </div>
                <div className={styles.diagramNode}>
                  <div className={styles.engineDrawing}>
                    <EngineDrawing kind={study.id} />
                  </div>
                  <span className={styles.nodeStep}>02 / PROCESS</span>
                  <span className={styles.nodeLabel}>{study.steps[1]}</span>
                </div>
                <div className={styles.diagramNode}>
                  <div className={styles.outerDrawing}>
                    <OutputDrawing kind={study.id} />
                  </div>
                  <span className={styles.nodeStep}>03 / OUTPUT</span>
                  <span className={styles.nodeLabel}>{study.steps[2]}</span>
                </div>
              </div>
              <figcaption className={styles.caption}>
                <h3>{study.caption}</h3>
                <p>{study.description}</p>
              </figcaption>
              <div className={styles.figureFooter}>
                <span>Conceptual system study</span>
                <span>{study.note}</span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
