import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const normalizeWord = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((step) => Object.keys(step)),
  ]);

  const keyframes = {};

  keys.forEach((key) => {
    keyframes[key] = [from[key], ...steps.map((step) => step[key])];
  });

  return keyframes;
};

const BlurText = ({
  text = "",
  delay = 120,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOut",
  onAnimationComplete,
  stepDuration = 0.35,
  as = "p",
  highlightWords = [],
  highlightClassName = "",
}) => {
  const segments =
    animateBy === "words" ? text.split(" ") : Array.from(text);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const Tag = as;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, index) =>
    stepCount === 1 ? 0 : index / (stepCount - 1)
  );
  const normalizedHighlights = useMemo(
    () => new Set(highlightWords.map((word) => normalizeWord(word))),
    [highlightWords]
  );

  return (
    <Tag ref={ref} className={`blur-text flex flex-wrap ${className}`}>
      {segments.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const isHighlighted =
          animateBy === "words" &&
          normalizedHighlights.has(normalizeWord(segment));

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={`${segment}-${index}`}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={{
              duration: totalDuration,
              times,
              delay: (index * delay) / 1000,
              ease: easing,
            }}
            onAnimationComplete={
              index === segments.length - 1 ? onAnimationComplete : undefined
            }
          >
            <span className={isHighlighted ? highlightClassName : ""}>
              {segment === " " ? "\u00A0" : segment}
            </span>
            {animateBy === "words" && index < segments.length - 1
              ? "\u00A0"
              : ""}
          </motion.span>
        );
      })}
    </Tag>
  );
};

export default BlurText;
