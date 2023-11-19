import NavBar from "../../components/NavBar";
import ProjectCard from "../../components/ProjectCard";
import "../../main.css"

const Work = () => { 
    return (
        <div className="container">
          <NavBar />
          <ProjectCard projectNum={1} projectLang="ReactJs, React Router, TailwindCSS, Firebase, Git version control" projectName="Bookhood" />
          <ProjectCard projectNum={2} projectLang="ReactJs, ExpressJs, TailwindCSS, MongoDB, Git Version Control" projectName="The Key Shop" />
        </div>
      )
}

export default Work; 