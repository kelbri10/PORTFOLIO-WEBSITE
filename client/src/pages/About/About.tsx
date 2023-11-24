import NavBar from "../../components/NavBar";
import "../styles/About.css"; 
import resume from "./assets/Kelsey Hughes Resume.pdf"; 
import img from "./imgs/photo1.jpg"; 

import { motion} from "framer-motion";

const About = () => { 
    
    return( 
        <div className="container">

            <NavBar />

            

            <div>
                <motion.div
                initial={{opacity: 0, y:-50}}
                animate={{opacity: 1, y:0}}
                transition={{delay:0.25, duration: 0.5}}>
                    <h1>Who is Kelsey?</h1>
                </motion.div>

                
                <section className="about_me_container">
                    <motion.div
                    initial={{opacity: 0, y: 200}}
                    animate={{opacity: 1, y:0}}
                    transition={{delay:0.25, duration: 0.5}}>
                        <img id="photo1" src={img} alt="picture of me sitting outside looking to the left" />
                    </motion.div>

                    <motion.div 
                    initial={{opacity: 0, x:-100}}
                    animate={{opacity: 1, x:0}}
                    transition={{delay: 0.5, duration:0.5}}> 
                        <div>
                            <article className="about_me">
                            <p>
                            Born and raised in Maryland, I graduated from UMBC in 2016 with my Bachelor’s degree in Psychology. First and foremost, I am an advocate for mental Health and seeking equity for underrepresented communities. With over 3  years in the Non-profit sector, my experiences there have cultivated me into the adaptable leader I am today.
                            </p>

                            <p>
                            In 2020, I attended and completed a coding bootcamp hosted by John Hopkins University with a focus in Full Stack Web Development.
                            </p>

                            <p>
                            As a Software Engineer, my long-term goals are to create impactful web applications that help people form meaningful connections with one another. I desire to improve the quality of life of those around me. I want to strengthen communities by increasing accessibility to resources and information with the applications I build.
                            </p>

                            </article>

                            <p className="resume_link">Download my resume <a href={resume} target="_blank">here</a>.</p>
                        </div>
                    </motion.div>
                </section>
            </div>
            
            
            
        </div>
        
    )
}

export default About; 