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

import { useRef, useState } from "react";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

import { experiences } from "../constants";

import { SectionWrapper } from "../hoc";

import BlurText from "../utils/BlurText";
import BorderGlow from "../utils/BorderGlow";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const cardRef = useRef(null);
  const [activeProgress, setActiveProgress] = useState(0);

  const { scrollYProgress: cardScrollProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "end 35%"],
  });

  useMotionValueEvent(cardScrollProgress, "change", (latest) => {
    const centered = 1 - Math.abs(latest - 0.5) / 0.5;
    const clamped = Math.max(0, Math.min(1, centered));
    setActiveProgress(clamped * clamped);
  });

  return (
    <VerticalTimelineElement
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
          glowRadius={18}
          glowIntensity={0.18}
          hoverEnabled
          activeProgress={activeProgress * 0.7}
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

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 35%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "", "sm:px-16 px-6 sm:py-10 py-8");
