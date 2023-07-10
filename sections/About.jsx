"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} realtive z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title=' | About quest.' textStyles='text-center' />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
        " Verily, as a devoted
        <span className='font-extrabold text-white'> Front-end Knight</span>, my
        quest doth revolve around fashioning wondrous and
        <span className='font-extrabold text-white'>
          {" "}
          adaptive web interfaces{" "}
        </span>
        that doth captivate the eye and engage the senses. With meticulous care,
        I doth hone and refine the code to enhance its prowess, ensuring
        seamless
        <span className='font-extrabold text-white'>
          {" "}
          compatibility across all browsers{" "}
        </span>
        in the realm. Ever vigilant and receptive to the emergence of new
        technologies, I doth consistently deliver exceptional experiences unto
        the users, transporting them to realms beyond imagination. Pray,
        continue thy journey by scrolling henceforth, that thou mayest unravel
        more of this epic saga. "
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 1.5, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
