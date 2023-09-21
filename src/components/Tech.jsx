import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-xl">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I Know</p>
          <h2 className={styles.sectionHeadText}>My Skills.</h2>
        </motion.div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-32 h-32 relative flex items-center justify-center overflow-hidden group" key={technology.name}>
            <style>
              {`
                @keyframes rotationAnimation {
                  0% {
                    filter: hue-rotate(0deg);
                  }
                  100% {
                    filter: hue-rotate(360deg);
                  }
                }
              `}
            </style>
            <div
              className="w-32 h-32 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Center-align the white hexagon
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundColor: '#0f0', // Colored hexagon background
                animation: 'rotationAnimation 5s linear infinite',
                zIndex: 1, // Ensure the colored hexagon is below the white hexagon
              }}
            >
              <div
                className="w-28 h-28 flex items-center justify-center bg-black" // Adjust the size here
                style={{
                  clipPath: 'polygon(50% 0%, 99% 24%, 99% 76%, 50% 100%, 1% 76%, 1% 24%)',
                  zIndex: 2, // Ensure the white hexagon is above the colored hexagon
                }}
              ></div>
            </div>
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-20 h-20 object-cover transform transition-transform scale-100 group-hover:scale-110 z-10 relative"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');
