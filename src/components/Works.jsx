import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mi trabajo</p>
        <h2 className={styles.sectionHeadText}>Proyectos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Los siguientes proyectos muestran mis habilidades y experiencia a
          través de ejemplos reales de mi trabajo. Cada proyecto se describe
          brevemente con enlaces a repositorios de código y demostraciones en
          vivo. Refleja mi capacidad para resolver problemas complejos, trabajar
          con diferentes tecnologías y gestionar proyectos de manera eficaz.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
