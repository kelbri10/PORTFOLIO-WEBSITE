import "../../styles/Project.css"; 
import "../../../main.css"
import { motion } from "framer-motion";

const Bookhood = () => { 

    return( 
        <div className="container">
            <header>
               
                <motion.div
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x:0}}
                transition={{delay: 0.25, duration: 0.5}}
                className="gradient_box" />
                    

            
                <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x:0}}
                transition={{delay: 0.35, duration: 0.5}}
                className="project_header">
                   
                        <div>
                            <h1>Bookhood</h1>
                            <h2>Book tracking made easy</h2>
                        </div>

                        <div className="project_links">
                            <a href="https://github.com/kelbri10/bookhood" target="_blank">github</a> 

                            <a href="https://main--dynamic-twilight-bdcf6a.netlify.app/" target="_blank">live site</a>
                        </div>
                    
                </motion.div>
            </header>
            
            <section className="project_description">
               
                <motion.article
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.45, duration: 0.5}}
                className="project_info">
                    
                        <h3>What is Bookhood?</h3>
                        <p>
                            Bookhood is a simple, easy-to-use book tracking application. It allows users to save completed and in-progress books to their library. The application also allows users to edit their book's information to make sure they have the most up-to-date ratings and titles listed. Returning users are able to login with their password and email, while new users are able to create an account and be redirected to the library where they can add books using the form. Bookhood was inspired by my own personal reading journey and desire for a straight-forward application to track my own books without becoming overwhelmed.
                        </p>
                    
                </motion.article>

                <motion.article
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.55, duration: 0.5}}
                className="project_info">
                
                    <h3>What technologies did I use?</h3>

                    <p>
                        I applied basic design principles to create drafts of potential layouts in Figma. This helped me to visualize userflow from login to the user adding their first book. Once the design was finalized, I used React and TailwindCSS to style the pages. TailwindCSS' utility classes made styling more streamlined and efficient, allowing me to focus primarily on the functionality of the application. Firebase authentication provided me with a learning opportunity, since this is the first time I used it in a project. 
                    </p>
                    <br></br>
                    <p>  
                        To block unauthorized user's from entering the site, I wrote a security rule that checked whether the auth was null, if so, they are directed to login. If an unauthenticated user tries to access the library without being signed in, they are shown an error page that links back to the login page as well. To store user data and books, I used Firestore database. This allowed me to create a collection of users which stored each user's uid as a document. Within each user document is a books array that stores the saved author, title, rating, start date and completed date. 
                    </p>
               
                </motion.article>

                <motion.article
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.65, duration: 0.5}}
                className="project_info">
                        <h3>Conclusions</h3>
                        <p>
                            This project helped me to become more comfortable navigating the Firebase authentication and Firestore database documentation. For future projects, I definitely would want to destructure the data from the user further. Instead of using an array and iterating over that array by a unique id, I would instead create another collection and save each book as an individual document. This would make the app more stable long term if a user has, for example, 100+ plus books. Instead of having to iterate linearly over an array, I would be able to better maximize the Firestore database features and ability to find pieces of data when the size of the pool is large. 
                        </p>
                        <br></br>
                        <p>
                            Other features I would like to add in the future would be book suggestions and to add friends and view their books as well. I think a social aspect to this project would encourage users to return more frequently and increase engagement.
                        </p>
                    
                </motion.article>
            </section>
        </div>
    )
}

export default Bookhood; 