import ProjectCard from "../../components/ProjectCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../main.css"

const ProjectCardDisplay = () => { 
    return (
        <div>
          <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y:0}}
          transition={{delay: 0.35, duration: 0.5}}>
            <Link to="/work/bookhood" style={{textDecoration: 'none'}}><ProjectCard projectNum={1} projectLang="ReactJs, React Router, TailwindCSS, Firebase, Git Version Control" projectName="Bookhood" /></Link>
          </motion.div>
        
          <motion.div
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y:0}}
          transition={{delay: 0.45, duration: 0.5}}>
            <Link to="/work/the-key-shop" style={{textDecoration: 'none'}}><ProjectCard projectNum={2} projectLang="ReactJs, ExpressJs, TailwindCSS, MongoDB, Git Version Control" projectName="The Key Shop" /></Link>
          </motion.div>

        </div>
      )
}

export default ProjectCardDisplay; 