import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

/* The `SectionWrapper` function is a higher-order component (HOC) that takes a component and returns  a new component that wraps the original component in a `motion.section` component. The `motion.section` component is used to animate the section when it comes into view using the `framer-motion` library. The `SectionWrapper` component also applies some styling classes to the section element. */
export default SectionWrapper;
