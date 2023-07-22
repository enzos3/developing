"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 mb-24`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className='flex justify-center items-center flex-col z-10'>
        <motion.h1 variants={textVariant(1.2)} className={styles.heroHeading}>
          Welcome to
        </motion.h1>
        <motion.div
          variants={textVariant(1.8)}
          className='flex justify-center items-center z-99'>
          <h1 className={styles.heroHeading}>My World!</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='relative w-full md:-mt-[20px] -mt-[12px]'>
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
        <img
          src='/cover.png'
          alt='cover'
          className='w-[500px] sm:w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
