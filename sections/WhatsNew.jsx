"use client";

import { motion } from "framer-motion";
import { NewFeatures, TitleText, TypingText } from "../components";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section
    className={`${styles.padding} relative z-10 pt-14 mb-24 ml-5`}
    id='studies'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'>
        <TypingText title='| Studies' />
        <TitleText title={<>Where do I acquire my knowledge?</>} />
        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}>
        <img
          src='/whats-new.png'
          alt='whats-new'
          className='w-[60%] h-[60%] sm:w-[90%] sm:h-[90%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
