import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, livepreview } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import BlurText from "../utils/BlurText";
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
      <CardContainer className="sm:w-[360px] w-full">
        <CardBody className="bg-tertiary p-5 rounded-2xl w-full border border-white/10">
          <CardItem translateZ={90} className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl group-hover/card:shadow-xl"
            />

            <div className="absolute inset-0 z-20 flex flex-col justify-start items-end m-3 gap-1 card-img_hover pointer-events-none">
              {/* Github */}
              {source_code_link && (
                <CardItem
                  as="button"
                  type="button"
                  translateZ={95}
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient pointer-events-auto !w-12 !h-12 !min-w-12 !min-h-12 rounded-full !inline-flex items-center justify-center shrink-0 cursor-pointer border border-white/10 shadow-md overflow-hidden p-0"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-6 h-6 object-contain block pointer-events-none"
                  />
                </CardItem>
              )}
              {/* Live Preview */}
              <CardItem
                as="button"
                type="button"
                translateZ={95}
                onClick={() => window.open(live_preview, "_blank")}
                className="black-gradient pointer-events-auto !w-12 !h-12 !min-w-12 !min-h-12 rounded-full !inline-flex items-center justify-center shrink-0 cursor-pointer border border-white/10 shadow-md overflow-hidden p-0"
              >
                <img
                  src={livepreview}
                  alt="live preview"
                  className="w-6 h-6 object-contain block pointer-events-none"
                />
              </CardItem>
            </div>
          </CardItem>

          <div className="mt-5">
            <CardItem
              as="h3"
              translateZ={65}
              className="text-white font-bold text-[24px] text-balance"
            >
              {name}
            </CardItem>
            <CardItem
              as="p"
              translateZ={45}
              className="text-secondary mt-2 text-[14px] text-pretty"
            >
              {description}
            </CardItem>
          </div>

          <CardItem translateZ={35} className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                {tag.name}
              </p>
            ))}
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>¿Qué he hecho hasta ahora?</p>
        <BlurText
          as="h2"
          text="Proyectos"
          animateBy="words"
          className={styles.sectionHeadText}
        />
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

export default SectionWrapper(Works, "work", "sm:px-16 px-6 pt-0 pb-10");
