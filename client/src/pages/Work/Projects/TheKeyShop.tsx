import "../../styles/Project.css"; 
import "../../../main.css"
import { motion } from "framer-motion";

const TheKeyShop = () => { 
    return( 
        <div className="container">
            <header>
                <motion.div
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x:0}}
                transition={{delay: 0.25, duration: 0.5}}>
                    <div className="gradient_box"></div>
                </motion.div>

                <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x:0}}
                transition={{delay: 0.35, duration: 0.5}}>
                    <div className="project_header">
                        <div>
                            <h1>The Key Shop</h1>
                            <h2>A Keyboard Enthusiast's Dream Shop</h2>
                        </div>

                        <div className="project_links">
                            <a href="https://github.com/kelbri10/The-Key-Shop" target="_blank">github</a> 
                            
                            <a href="https://thekeyshop.onrender.com/" target="_blank">live site</a>
                        </div>
                    </div>
                </motion.div>
            </header>

            <section className="project_description">
                <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.45, duration: 0.5}}>
                    <article className="project_info">
                        <h3>What is The Key Shop?</h3>
                        <p>
                        Inspiration for The Key Shop came from my love customizable keyboards. There are a lot of great boards and customizable options available currently with some of the well known companies being Cannonkeys, Novelkeys, and Osume. The Key Shop is a mock E-commerce website that mimics a standard online website to shop for switches, boards, and keycaps.
                        </p>
                    </article>
                </motion.div>

                <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.55, duration: 0.5}}>
                    <article className="project_info">
                        <h3>What technologies did I use?</h3>

                        <p>
                            The backend was built using Node for the server, and MongoDB as the database. ExpressJS helped me to setup my api calls and I used Postman to test my get requests to the database I setup. Placeholder images were used because the main focus of the project was the functionality and userflow from arriving to the site via the landing page up until the cart function.
                        </p>
                        <br></br>
                        <p>
                            In order to track what the customer had in their cart, I created a Cart Context using the Context api. This allowed me to share an items array across the pages, so that when the customer is ready to checkout and views their cart, it is up-to-date with their shopping. I used React Router to link the pages to one another and TailwindCSS was used to efficiently style the site's pages. 
                        </p>
                    </article>
                </motion.div>

                <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.65, duration: 0.5}}>
                    <article className="project_info">
                        <h3>Conclusions</h3>
                        <p>
                            Creating my own E-commerce site helped me to better understand some of the programming logic that works under the hood of sites such as Shopify, Etsy, and other similar sites that allow business owners to create their own online shops. For a future iteration onto this project, I would create an admin sign-in that would allow  for the shop owner to add, delete, and edit their store's information and allow for the product's inventory data be updated on MongoDB. 
                        </p>
                        <br></br>
                        <p>
                            Another feature I would like to add in the future would be allowing customers to leave anonymous or signed reviews underneath products. This would allow for another level of social interaction and customer feedback.
                        </p>
                    </article>
                </motion.div>
            </section>
        </div>
    )
}

export default TheKeyShop; 