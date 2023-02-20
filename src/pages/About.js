import { motion, useInView, useAnimationControls, animationControls, delay } from "framer-motion";
import { useRef, useEffect } from 'react'; 

import passion from '../images/passion.png';
import patient from '../images/patient.png';
import eye from '../images/eye.png';

const float = {
        y: [-5, 5],
        opacity: 1, 
        scale: 1,
        rotate: 0,
        transition: {
            delay: 0,
            duration: 2,
            repeat: Infinity,
            // repeatDelay: 0.2,
            repeatType: "reverse"
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


const About = () => {

    const aboutDescriptionRef = useRef(null); 
    const passionRef = useRef(null); 
    const payRef = useRef(null); 
    const patientRef = useRef(null); 

    const aboutDescriptionInView = useInView(aboutDescriptionRef, {once: true}); 
    const passionInView = useInView(passionRef, {once: true}); 
    const payInView = useInView(payRef, {once: true}); 
    const patientInView = useInView(patientRef, {once: true}); 

    return <>
    <div className="frame-about">
        <motion.div className="about-description" 
            ref={aboutDescriptionRef} 
            initial="hidden"
            whileInView={aboutDescriptionInView ? "visible" : "hidden"}
            variants={textInView}
            viewport={{ amount: 0.4, once: true }}
        >
            <h3>I ‘m Phoebe.</h3>
            <h4>After working 2 years as a web designer in Hong Kong, I now decided to be a front-end developer in London on exciting ideas and codes.  
                <br></br>
                <br></br>
                I enjoy creating beautiful, accessible and responsive websites using HTML, CSS, Javascript, Tailwind, SASS, SCSS, React and Framer Motion. I am currently learning Typescript as well. I combined my web design expertise with front-end development which help to build the website looking close to the design.</h4>
        </motion.div>


        <div className="about-p">
        <motion.img src={passion} alt="passion" className='smallimg-about'
            animate={float}
        />
            <motion.h5
            ref={passionRef}
            initial="hidden"
            whileInView={passionInView ? "visible" : "hidden"}
            variants={textInView}
            viewport={{ amount: 0.4, once: true }}
            >Passion</motion.h5>
            <motion.div className='content-box-about'
            initial="hidden"
            whileInView={passionInView ? "visible" : "hidden"}
            variants={textInView}
            viewport={{ amount: 0.4, once: true }}
            >
                <p className='text-about'>I love the process of taking a design and bringing it to life on the web. I enjoy the challenge of creating visually appealing and user-friendly interfaces, and the satisfaction of seeing people interact with my work. 
                <br></br><br></br>
                I am always eager to learn new technologies and techniques to improve my skills and deliver the best possible experience for my users.</p>
            </motion.div>
        </div>


        <div className="about-p">
            <motion.img src={eye} alt="eye" className='smallimg-about eye-about'
            style={{ rotate: 25 }}
            animate={float}
            />
            <motion.h5 
            ref={payRef}
            initial="hidden"
            whileInView={payInView ? "visible" : "hidden"}
            variants={textInView}
            viewport={{ amount: 0.4, once: true }}>Pay Attention to Detail</motion.h5>
            <motion.div className='content-box-about'
            ref={payRef}
            initial="hidden"
            whileInView={payInView ? "visible" : "hidden"}
            variants={textInView}
            viewport={{ amount: 0.4, once: true }}>
                <p className='text-about'>I pay close attention to detail to ensure that the final product is visually pleasing and user-friendly. I pay attention to the small details such as the spacing, alignment, and color scheme to make sure they are consistent across the website. 
                <br></br><br></br>
                I also test the website on different screen sizes and browsers to make sure it looks great and works well for all users. .</p>
            </motion.div>
        </div>



        <div className="about-p">
            <motion.img src={patient} alt="patient" className='smallimg-about' 
            animate={float}
            />
            <motion.h5
            ref={patientRef}
            initial="hidden"
            whileInView={patientInView ? "visible" : "hidden"}
            variants={textInView}
            viewport={{ amount: 0.4, once: true }}
            >Patient</motion.h5>
            <motion.div className='content-box-about'
            ref={patientRef}
            initial="hidden"
            whileInView={patientInView ? "visible" : "hidden"}
            variants={textInView}
            viewport={{ amount: 0.4, once: true }}>
                <p className='text-about'>I understand that development projects can be complex and often require a significant amount of time and effort. I am able to work with a sense of calm and focus, even when faced with challenges and setbacks. 
                <br></br><br></br>
                I believe that by being patient and working well with others, I am able to create better and more efficient solutions for the projects I am working on.</p>
            </motion.div>
        </div>
    </div> 
    </>
}

export default About;