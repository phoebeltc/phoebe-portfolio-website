import { useAnimation, motion } from "framer-motion";

import pig from '../images/pig.png';
import speech from '../images/speech.png'

const Contact = () => {

    const speechAnimation = useAnimation(); 

    const handleMouseMove = e => {
        const {clientX, clientY } = e 
        const moveX = clientY - window.innerWidth / 2
        const moveY = clientX - window.innerHeight / 2
        const offsetFactor = 15
        speechAnimation.start({
            x: moveX / offsetFactor,
            y: moveY / offsetFactor
        })
    }

    const pigAnimation = useAnimation(); 

    const handleMousePigMove = e => {
        const {clientX, clientY } = e 
        const moveX = clientX - window.innerWidth / 2
        const moveY = clientY - window.innerHeight / 2
        const offsetFactor = 10
        pigAnimation.start({
            x: moveX / offsetFactor,
            y: moveY / offsetFactor
        })
    }



    return <>
    <div className="frame-contact">
            <div onMouseMove={e => handleMousePigMove(e)} className="email-contact">
                <a onMouseMove={e => handleMouseMove(e)}
                href="mailto:phoebeleungtc@gmail.com" className="email-text-contact">SEND ME A MESSAGE !</a>
                <motion.div 
                    className="speech-contact"
                    animate={speechAnimation}>
                    <img src={speech} alt="speech" className="speech-img1-contact"></img>
                    <img src={speech} alt="speech" className="speech-img2-contact"></img>
                </motion.div>
                <motion.div 
                    className="pig-contact"
                    animate={pigAnimation}>
                    <img src={pig} alt="pig" className="pig-img1-contact"></img>
                    <img src={pig} alt="pig" className="pig-img2-contact"></img>
                    <img src={pig} alt="pig" className="pig-img3-contact"></img>
                </motion.div>
            </div>
        
            <div className="footer-contact">
                <div className="socialmedia-contact">
                    <a data-replace="Instagram" href="https://www.instagram.com/phoebeltc/" target="_blank" rel="noreferrer" className="smlink-contact"><p>Instagram</p></a>
                    <a data-replace="Github" href="https://github.com/phoebeltc" target="_blank" rel="noreferrer" className="smlink-contact"><p>GitHub</p></a>
                    <a data-replace="LinkedIn" href="https://www.linkedin.com/in/tsz-ching-leung-6b8972bb/" rel="noreferrer" target="_blank" className="smlink-contact"><p>Linkedin</p></a>
                    <a data-replace="CV" href={process.env.PUBLIC_URL + "/images/PhoebeLeung-CV.pdf"} download target="_blank" className="smlink-contact" rel="noreferrer"><p>CV</p></a>
                </div>
                <div>
                    <p>@Phoebe Leung 2023</p>
                </div>
            </div>
        </div>
    </>
}

export default Contact;