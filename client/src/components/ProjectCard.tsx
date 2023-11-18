import "./styles/ProjectCard.css"; 

type ProjectProps = { 
    projectNum: number, 
    projectName: string, 
    projectLang: string
}

const ProjectCard = ({projectNum, projectName, projectLang}: ProjectProps) => { 
    return(
        <section className="project_card">
            <h1>0{projectNum}</h1>

            <div className="project_card_label">
                <h2>{projectName}</h2>
                <p>{projectLang}</p>
            </div>
        </section>
    )
}

export default ProjectCard; 