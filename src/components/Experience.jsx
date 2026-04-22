import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

import { experiences } from "../constants";

import { SectionWrapper } from "../hoc";

import BlurText from "../utils/BlurText";
import BorderGlow from "../utils/BorderGlow";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({
  experience,
  side,
  activeProgress,
  sweepProgress,
  cardRef,
}) => {
  const preferredAngle = side === "left" ? 90 : 270;
  const scrollAngle = side === "left"
    ? 45 + sweepProgress * 90
    : 315 - sweepProgress * 90;

  return (
    <VerticalTimelineElement
      position={side}
      contentStyle={{
        background: "transparent",
        color: "#fff",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div
        className="experience-icon-glow-wrap"
        style={{ ["--iconGlow"]: activeProgress }}
      >
        <span className="experience-icon-glow" />
      </div>

      <motion.div ref={cardRef}>
        <BorderGlow
          className="bg-[#1d1836]"
          backgroundColor="#1d1836"
          borderRadius={28}
          padding={0}
          edgeSensitivity={24}
          glowRadius={17}
          glowIntensity={0.3}
          coneSpread={18}
          hoverEnabled
          activeProgress={activeProgress}
          preferredAngle={preferredAngle}
          scrollAngle={scrollAngle}
          showFill={false}
        >
          <div className="px-6 py-7">
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {experience.title}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {experience.company_name}
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className="text-white-100 text-[14px] pl-1 pr-1.5 tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </BorderGlow>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const timelineRef = useRef(null);
  const cardElementsRef = useRef([]);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [cardRanges, setCardRanges] = useState([]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 35%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setTimelineProgress(Math.max(0, Math.min(1, latest)));
  });

  const setCardElement = useCallback((index, node) => {
    cardElementsRef.current[index] = node;
  }, []);

  useEffect(() => {
    const computeCardRanges = () => {
      const timelineEl = timelineRef.current;
      if (!timelineEl) return;

      const timelineRect = timelineEl.getBoundingClientRect();
      const timelineHeight = Math.max(timelineRect.height, 1);

      const nextRanges = experiences.map((_, index) => {
        const cardEl = cardElementsRef.current[index];
        if (!cardEl) return null;

        const cardRect = cardEl.getBoundingClientRect();
        const top = cardRect.top - timelineRect.top;
        const bottom = top + cardRect.height;

        const start = Math.max(0, Math.min(1, top / timelineHeight));
        const end = Math.max(0, Math.min(1, bottom / timelineHeight));

        return { start, end };
      });

      setCardRanges(nextRanges);
    };

    computeCardRanges();

    const resizeObserver = new ResizeObserver(() => computeCardRanges());

    if (timelineRef.current) resizeObserver.observe(timelineRef.current);
    cardElementsRef.current.forEach((cardEl) => {
      if (cardEl) resizeObserver.observe(cardEl);
    });

    window.addEventListener("resize", computeCardRanges);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", computeCardRanges);
    };
  }, []);

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const cardStates = useMemo(() => {
    const totalCards = experiences.length;
    if (totalCards === 0) return [];

    const hasMeasuredRanges = cardRanges.some((range) => range);
    if (!hasMeasuredRanges) {
      if (totalCards === 1) return [1];

      const step = 1 / (totalCards - 1);
      const influence = step * 1.3;

      return experiences.map((_, index) => {
        const center = index * step;
        const distance = Math.abs(timelineProgress - center);
        const raw = 1 - distance / influence;
        const clamped = Math.max(0, Math.min(1, raw));
        return { active: Math.pow(clamped, 1.1), sweep: clamped };
      });
    }

    return experiences.map((_, index) => {
      const range = cardRanges[index];
      if (!range) return { active: 0, sweep: 0 };

      const span = Math.max(range.end - range.start, 0.001);
      const enterLead = index === 0 ? range.start : span * 0.2;
      const exitTail = span * 0.2;

      const enterStart = Math.max(0, range.start - enterLead);
      const holdStart = range.start;
      const holdEnd = range.end;
      const exitEnd = Math.min(1, range.end + exitTail);

      let value = 0;

      if (timelineProgress < enterStart) value = 0;
      else if (timelineProgress < holdStart) {
        const t = (timelineProgress - enterStart) / Math.max(holdStart - enterStart, 0.0001);
        value = t;
      } else if (timelineProgress <= holdEnd) {
        value = 1;
      } else if (timelineProgress <= exitEnd) {
        const t = (timelineProgress - holdEnd) / Math.max(exitEnd - holdEnd, 0.0001);
        value = 1 - t;
      }

      const localSweep = Math.max(
        0,
        Math.min(1, (timelineProgress - range.start) / span)
      );

      return {
        active: Math.pow(Math.max(0, Math.min(1, value)), 0.95),
        sweep: localSweep,
      };
    });
  }, [cardRanges, timelineProgress]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mi camino</p>
        <BlurText
          as="h2"
          text="Formación"
          animateBy="words"
          className={styles.sectionHeadText}
        />
      </motion.div>
      <div ref={timelineRef} className="mt-8 relative flex flex-col text-pretty">
        <div className="experience-scroll-line hidden md:block" />
        <motion.div
          className="experience-scroll-line-fill hidden md:block"
          style={{ height: lineHeight }}
        />

        <VerticalTimeline className="experience-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              side={index % 2 === 0 ? "left" : "right"}
              activeProgress={cardStates[index]?.active ?? 0}
              sweepProgress={cardStates[index]?.sweep ?? 0}
              cardRef={(node) => setCardElement(index, node)}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "", "sm:px-16 px-6 sm:py-10 py-8");
