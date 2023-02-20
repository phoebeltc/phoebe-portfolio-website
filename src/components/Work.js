import githubIcon from '../images/github-mark.svg';
import arrow from '../images/arrow-right.svg';
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import Skill from './Skill';


const Work = ({
    title, image, latestWork, skills, github, link
}) => {

        const ref = useRef(null);
        const isInView = useInView(ref, {once: true}, { amount: "all" }); 

        const githubHover = {
            rest:{
                x: 0,
                y: 0
            },
            hover: {
                y: [0, 5],
            opacity: 1, 
            scale: 1,
            rotate: 0,
            transition: {
            delay: 0,
            duration: 0.5,
            repeat: Infinity,
            // repeatDelay: 0.2,
            repeatType: "reverse"
            }
            }
        }

        const arrowHover = {
            rest:{
                x: 0,
                y: 0
            },
            hover: {
                rotate: -45
            }
        }
        
        const textInView = {
            hidden: {
                opacity: 0, 
                        y: 20, 
                        transition: {
                        type: "spring", 
                        damping: 12, 
                        stiffness: 100, 
                        }
            }, 
            visible: {
                opacity: 1, 
                y: 0, 
                transition: {
                    delay: 0.1,
                    type: "spring", 
                    damping: 20, 
                    stiffness: 100, 
                }
            }
        }
        

    return <>
    <div className="wrapper-work">
            <motion.div className="work-upper"
                ref={ref} 
                initial="hidden"
                whileInView={isInView ? "visible" : "hidden"}
                viewport={{ amount: 0.4, once: true }}
                variants={textInView}
                >
                <h2 className="work-title" >{title}</h2>
                <div className='work-image-block'>
                    {latestWork &&
                        <div className="work-highlights" >LATEST<br></br>WORK</div>}
                    <img src={process.env.PUBLIC_URL + image} alt="IPAddress" className="work-image"></img>
                </div>

                <div className='work-tags'>
                {skills.map((item, index) => {
                    return (
                        <Skill 
                            item={item}
                            key={index}
                        />
                    )
                })}
                </div>

            </motion.div>
        <div className="work-lower">
            { github &&
            <motion.a href={github} target="_blank" className="button-work"
                initial="rest" whileHover="hover" animate="rest">
                <motion.img src={githubIcon} alt="githubIcon" className="button-icon-work" variants={githubHover} ></motion.img>
            </motion.a>}
            <motion.a href={link} target="_blank" className={ github ? 'button-work' : 'button-work-nogithub'}
                initial="rest" whileHover="hover" animate="rest">
                <motion.img src={arrow} alt="arrow" className="button-icon-work" variants={arrowHover}></motion.img>
            </motion.a>
        </div>
    </div>
    
    </>
}

export default Work;