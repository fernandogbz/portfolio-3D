import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, livepreview } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Add the tech, github link and demo link to the project object
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_preview,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex flex-col justify-start items-end m-3 gap-1 card-img_hover">
            {/* Github */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-7 h-7 object-contain"
              />
            </div>
            {/* Live Preview */}
            <div
              onClick={() => window.open(live_preview, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            >
              <img
                src={livepreview}
                alt="live preview"
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] text-balance">
            {name}
          </h3>
          <p className="text-secondary mt-2 text-[14px] text-pretty">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>¿Qué he hecho hasta ahora?</p>
        <h2 className={styles.sectionHeadText}>Proyectos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] text-pretty max-w-3xl leading-[30px]"
        >
          Los siguientes proyectos muestran mis habilidades y experiencia a
          través de ejemplos reales de mi trabajo. Cada proyecto se describe
          brevemente con enlaces a repositorios de código y demostraciones en
          vivo. Refleja mi capacidad para resolver problemas complejos, trabajar
          con diferentes tecnologías y gestionar proyectos de manera eficaz.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
