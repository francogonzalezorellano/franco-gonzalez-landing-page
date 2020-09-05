import styles from './home.module.css'
import MotionAnimation from '../motion_animation/motion_animation'
import WebAnimation from '../web_animation/web_animation'
import { motion } from 'framer-motion';
import { getWindowWidth, getWindowHeight } from '../../window/window_dimensions.js';
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'
import ParallaxMousemove from 'react-parallax-mousemove'

const Frame = dynamic( () => import('framer').then((mod) => mod.Frame), { ssr: false } );

const easing = [0.6, -0.05, 0.01, 0.99];

const animationName = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: 0,
    },
  },
  exit: { 
    x: 0,
    opacity: 0
  }
}

const animationMotion = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: 0.2,
    },
  },
  exit: { 
    x: 0,
    opacity: 0
  }
}

const animationWeb = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
      delay: 0.4,
    },
  },
  exit: { 
    x: 0,
    opacity: 0
  }
}

const animationBG = {
  initial: {
    scale: 1.2,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: easing
    }
  },
  exit: { 
    scale: 0.95,
    opacity: 0
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home({ children, home }) {
    
  return (
    <div>
     
      <div 
        className={styles.contaner_fix_pos}
      >

        <div 
          className={styles.home}
        >
          <motion.div
            variants={stagger}
            animate='animate'
          >
            <motion.div 
            exit='exit'
            initial='initial'
            animate='animate'
            variants={animationName}
            className={styles.title}
            >
                <h2 className={styles.title_regular}>I,m </h2>
                <h1 className={styles.title_bold}>Franco</h1>
                <h1 className={styles.title_bold}>Gonzalez</h1>
                <h2 className={styles.title_regular}> .</h2>
            </motion.div>

            <motion.div
              exit='exit'
              initial='initial'
              animate='animate'
              variants={animationMotion}
            >
              <MotionAnimation/>
            </motion.div>

            <motion.div
              exit='exit'
              initial='initial'
              animate='animate'
              variants={animationWeb}
            >
              <WebAnimation/>
            </motion.div>

          </motion.div>
        </div>
      </div>

    </div>
    )
  }