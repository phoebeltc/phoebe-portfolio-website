import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useCycle, useScroll, useTransform } from "framer-motion";

import logo from './images/phoebe-logo.svg'; 

import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

import './sass/main.scss'; 

const firstSpanVariants = {
  open: { 
    rotate: 45,
    y: 5
  }, 
  closed: {
    rotate: 0, 
    y: 0
  }
}

const lastSpanVariants = {
  open: { 
    rotate: -45,
    y: -2
  }, 
  closed: {
    rotate: 0, 
    y: 0
  }
}


function App() {

  //cursor 
  // const [cursorXY, setCursorXY] = useState({ x: 0, y: 0})
  // console.log(cursorXY);

  // useEffect(() => {
  //   const moveCursor = (e) => {
  //     setCursorXY({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }
  //   window.addEventListener('mousemove', moveCursor)
  //   return () => {
  //     window.removeEventListener('mousemove', moveCursor)
  //   }
  // }, [])

  // const variants = {
  //   default: {
  //     x: cursorXY.x,
  //     y: cursorXY.y
  //   }
  // }

  //Toggle menu icon 
  const [open, cycleOpen] = useCycle(false, true);

  const home = useRef(null);
  const works = useRef(null); 
  const about = useRef(null); 
  const contact = useRef(null); 

  
  return <>
  {/* <motion.div 
    className="cursor"
    variants={variants}
    animate="default"
  /> */}
  <div className="header">
        <div className='nav-bar'>
            <img src={logo} alt="Phoebe Logo"  className='home-logo' onClick = {() => home.current.scrollIntoView({ behavior: 'smooth'})} />
            <div className='menuIcon' onClick={() => cycleOpen()}>
                <input className="menuIcon__checkbox" type="checkbox" />
                <div>
                    <motion.span 
                      variants={firstSpanVariants}
                      animate={open ? "open" : "closed"}
                      whileHover={{width: 26}}
                      ></motion.span>
                      <motion.span 
                      variants={lastSpanVariants}
                      animate={open ? "open" : "closed"}
                      whileHover={open ? {width: 22} : {width: 12}}
                      ></motion.span>
                </div>
            </div>
            <AnimatePresence>
            {
                open && (
                <motion.div className="wrapper"
                    initial={{height:0}}
                    animate={{height:"100vh"}}
                    exit={{
                        height:0,
                        transition: { delay: 0, duration: 0.3 }
                    }}
                >
                    <div className="menu-item" data-replace="WORKS" onClick ={() => {works.current.scrollIntoView({ behavior: 'smooth'}); cycleOpen()}}><span>WORKS</span></div>
                    <div className="menu-item" data-replace="ABOUT" onClick ={() => {about.current.scrollIntoView({ behavior: 'smooth'}); cycleOpen()}}><span>ABOUT</span></div>
                    <div className="menu-item" data-replace="CONTACT" onClick ={() => {contact.current.scrollIntoView({ behavior: 'smooth'}); cycleOpen()}}><span>CONTACT</span></div>
                </motion.div>
                )
            }
            </AnimatePresence>
        </div>
    </div>


  <div className="container">
    <div className="horizontal-scroll-wrapper">
      <div ref={home}><Homepage /></div>
      <div ref={works}><Works /></div>
      <div ref={about}><About /></div>
      <div ref={contact}><Contact /></div>
    </div>
  </div>
  </>
  ;
}

export default App;
