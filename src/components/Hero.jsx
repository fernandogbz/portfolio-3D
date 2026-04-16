import { motion } from "framer-motion";

import { styles } from "../styles";
import BlurText from "../utils/BlurText";

import { fotofer } from "../assets";

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row align-middle items-start gap-5`}
        >
          <picture className="w-[20%] overflow-hidden object-contain rounded-full border-4 border-[#915eff] sm:block hidden">
            <img src={fotofer} alt="foto-fernando" />
          </picture>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div className="flex align-center gap-10">
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                <BlurText
                  as="span"
                  text="Hola, soy Fernando"
                  animateBy="words"
                  delay={95}
                  className="inline-flex"
                  highlightWords={["Fernando"]}
                  highlightClassName="text-[#915eff]"
                />
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white`}>
                <BlurText
                  as="span"
                  text="Desarrollo interfaces de usuario"
                  animateBy="words"
                  delay={70}
                  className="inline-flex"
                />
                <br className="sm:block hidden" />
                <BlurText
                  as="span"
                  text="y aplicaciones web"
                  animateBy="words"
                  delay={70}
                  className="inline-flex"
                />
              </p>
            </div>
          </div>
        </div>
        <ComputersCanvas />
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
