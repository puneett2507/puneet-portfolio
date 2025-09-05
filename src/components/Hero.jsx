import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="hero-pattern relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* violet pattern */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-20 sm:h-80 violet-gradient" />
        </div>

        {/* text area */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Puneet </span>
          </h1>
          <p className={`${styles.heroSubText}text-white-100`}>
            I'm a <span className="text-[#915eff]">Full Stack Developer.</span>
            <br className="sm:block hidden" />I develop user interfaces and web
            applications.
          </p>
        </div>
      </div>
      {/* computer canvas */}
      <ComputersCanvas />

      {/* scrolling */}
      <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.25,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-3 w-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
