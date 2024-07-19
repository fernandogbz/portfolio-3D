import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Sobre mí</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Soy un desarrollador web con más de 2 años de experiencia en JavaScript
        y Java, utilizando frameworks como React y Three.js para el desarrollo
        de aplicaciones web. Me encanta aprender nuevas tecnologías y trabajar
        en proyectos desafiantes, para crear soluciones eficientes, escalables e
        innovadoras que resuelvan problemas reales. Trabajemos juntos para darle
        vida a tus ideas.
      </motion.p>
    </>
  );
};

export default About;
