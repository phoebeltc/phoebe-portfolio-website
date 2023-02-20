import React, {useState} from 'react';
import {motion, AnimatePresence, useCycle, useTransform, useScroll} from "framer-motion";

import logo from '../images/phoebe-logo.svg'; 

const Header = () => {

    const [open, cycleOpen] = useCycle(false, true);


    return <>
    <div>
        <div className='nav-bar'>
            <img src={logo} alt="Phoebe Logo" />
            <div className='menu-icon' onClick={() => cycleOpen()}>
                <input className="menu-icon__checkbox" type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
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
                        transition: { delay: 0.3, duration: 0.3 }
                    }}
                >
                    <a href="">WORKS</a>
                    <a href="">ABOUT</a>
                    <a href="">CONTACT</a>
                </motion.div>
                )
            }
            </AnimatePresence>
        </div>
    </div>
    </>
}

export default Header;