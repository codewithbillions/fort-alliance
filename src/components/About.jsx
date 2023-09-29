import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import aboutUs from "./../utils/aboutUs.pdf";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const openPdf = () => {
        window.open(aboutUs, "_blank");
      }; 
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`styles.sectionSubText` }>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Fort Alliance Transnational Limited is in the construction company business with a policy, to continously reshape the built environment by ensuring that our clientele are optimally serviced and satisfied with top notch global practice standards.

Our Long chain of project in various parts of the country depicts our high level of qualitative delivery, competence and professionalism.
      </motion.p>
      <a href="" onClick={openPdf}>read more...</a>

     
    </>
  );
};

export default SectionWrapper(About, "about");
