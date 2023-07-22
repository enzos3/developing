"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { InsightCard, TitleText, TypingText } from "../components";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import React from "react";
import WorldCard from "../components/WorldCard1";
import WorldCard2 from "../components/WorldCard2";
import WorldCard3 from "../components/WorldCard3";

const World = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);

  const handleSectionClick = (id) => {
    document.startViewTransition(() => setIsCardVisible(id));
  };

  const handleCardClose = () => {
    document.startViewTransition(() => setIsCardVisible(false));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsCardVisible(true);
      }
      console.log("useEffect");
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section
      className={`${styles.padding} relative z-10 pt-14 mb-24`}
      id='experience'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title='| Experience' textStyles='text-center' />
        <TitleText
          title={<>The best fights and works I've been in</>}
          textStyles='text-center'
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className='relative mt-[68px] flex w-full h-[550px]'>
          <img
            src='/map.png'
            alt='map'
            className='w-[500px] h-[200px] sm:w-full sm:h-full object-cover'
          />

          <div className='absolute sm:bottom-20 sm:right-20 top-40 right-2 sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]'>
            <img src='people-01.png' alt='people' className='w-full h-full' />
          </div>
          <div className='absolute sm:bottom-20 sm:left-52 sm:w-[70px] sm:h-[70px] top-32 left-8 w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]'>
            <img src='people-02.png' alt='people' className='w-full h-full' />
          </div>
          <div className='absolute sm:bottom-20 sm:left-32 sm:w-[70px] sm:h-[70px] top-30 left-32 w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]'>
            <img src='people-03.png' alt='people' className='w-full h-full' />
          </div>
          <img
            src='/workBlur3.png'
            className='absolute sm:right-[17px] sm:bottom-[10vh] sm:h-[200px] sm:w-[250px] right-[17px] bottom-[10vh] h-[200px] w-[250px]'
          />
          <img
            src='/workBlur3.png'
            className='absolute sm:left-[6vw] sm:bottom-[10vh] sm:h-[200px] sm:w-[280px] left-[10vw] bottom-[10vh] h-[200px] w-[280px]'
          />
          <img
            src='/workBlur3.png'
            className='absolute sm:left-[0vw] sm:bottom-[10vh] sm:h-[200px] sm:w-[200px] left-[0vw] bottom-[10vh] h-[200px] w-[200px]'
          />
          <div
            onClick={() => handleSectionClick(1)}
            className='absolute sm:bottom-40 sm:left-20 sm:w-[120px] sm:h-[90px] bottom-40 left-5 w-[120px] h-[90px] p-[6px] '>
            <img src='/workBg3.png' className='rounded-lg cursor-pointer' />
            <p className='text-white absolute bottom-1 right-2 text-xs text-center'>
              More...
            </p>
            <h2 className='absolute bottom-6 text-white font-semibold text-sm right-[40px]'>
              Home
            </h2>
          </div>
          <div
            onClick={() => handleSectionClick(2)}
            className='absolute sm:bottom-40 sm:left-52 sm:w-[120px] sm:h-[90px] bottom-40 left-64 w-[120px] h-[90px] p-[6px]'>
            <img src='/workBg3.png' className='rounded-lg cursor-pointer ' />
            <p className='text-white absolute bottom-0 right-2 text-xs text-center'>
              More...
            </p>
            <h2 className='absolute bottom-4 right-2 text-white font-semibold text-sm'>
              Beauty Planner
            </h2>
          </div>
          <div
            onClick={() => handleSectionClick(3)}
            className='absolute bottom-40 sm:right-20 right-[135px] w-[120px] h-[90px] p-[6px]'>
            <img src='/workBg2.png' className='rounded-lg cursor-pointer' />
            <p className='text-white absolute bottom-1 right-2 text-xs text-center'>
              More...
            </p>
            <h2 className='absolute bottom-6 text-white text-sm font-semibold right-[10px]'>
              Pump Haircare
            </h2>
          </div>

          {isCardVisible == 1 && <WorldCard onClose={handleCardClose} />}
          {isCardVisible == 2 && <WorldCard2 onClose={handleCardClose} />}
          {isCardVisible == 3 && <WorldCard3 onClose={handleCardClose} />}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
