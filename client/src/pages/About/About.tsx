import "../styles/About.css"; 
import resume from "./assets/Kelsey Hughes Resume.pdf"; 

const About = () => { 
    return( 
        <div>
            <h1>Who is Kelsey?</h1>

            <section className="about_me_container">
                <div className="photoTest"></div>
            </section>
            <article className="about_me">
                <p>
                Born and raised in Maryland, I graduated from UMBC in 2016 with my Bachelor’s degree in Psychology. First and foremost, I am an advocate. Mental Health and seeking equity for underrepresented communities are passions of mine. I have worked over 3 years in the Non-profit sector. My experiences there have cultivated me into the critical leader I am today.
                </p>
                
                <p>
                In 2020, I attended and completed a coding bootcamp hosted by John Hopkins University in 2020 with a focus in Full Stack Web Development.
                </p>
               
                <p>
                As a Software Engineer, my long-term goals are to create impactful web applications that help people form meaningful connections with one another. I desire to improve the quality of life of those around me. I want to strengthen communities by increasing accessibility to resources and information with the applications I build.
                </p>
            </article>

            <p className="resume_link">Download my resume <a href={resume} target="_blank">here</a>.</p>
        </div>
    )
}

export default About; 