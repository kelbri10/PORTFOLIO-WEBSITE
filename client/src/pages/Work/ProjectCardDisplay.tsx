import ProjectCard from "../../components/ProjectCard";
import { Link } from "react-router-dom";
import "../../main.css"

const ProjectCardDisplay = () => { 
    return (
        <div>
        <Link to="/work/bookhood" style={{textDecoration: 'none'}}><ProjectCard projectNum={1} projectLang="ReactJs, React Router, TailwindCSS, Firebase, Git version control" projectName="Bookhood" /></Link>
        <Link to="/work/the-key-shop" style={{textDecoration: 'none'}}><ProjectCard projectNum={2} projectLang="ReactJs, ExpressJs, TailwindCSS, MongoDB, Git Version Control" projectName="The Key Shop" /></Link>
        </div>
      )
}

export default ProjectCardDisplay; 