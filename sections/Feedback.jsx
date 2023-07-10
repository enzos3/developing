"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => {
  return (
    <section className={`${styles.paddings}`} id='contact'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative'>
          <div className='feedback-gradient' />
          <div>
            <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white'>
              Enzo Fiol says:
            </p>
          </div>

          <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white'>
            “As the final curtain falls on this vast universe, I, a weary yet
            triumphant developer, bid farewell. Together, we've traversed
            realms, conquering challenges and witnessing wonders. Our adventures
            shall be legendary, inspiring new heroes on untrodden paths. May
            destiny guide you to new horizons. Adieu, and may your spirit
            forever shine bright.”
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='relative flex-1 flex justify-center items-center'>
          <img
            src='/planet-09.png'
            alt='planet-09'
            className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
