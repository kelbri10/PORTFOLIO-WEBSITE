import "../../styles/Project.css"; 
import "../../../main.css"
const Bookhood = () => { 
    return( 
        <div className="container">
            <header>
                <div className="gradient_box"></div>

                <div className="project_header">
                    <div>
                        <h1>Bookhood</h1>
                        <h2>Book tracking made easy</h2>
                    </div>

                    <div className="project_links">
                        <a href="github.com" target="_blank">github</a> 
                        
                        <a href="google.com" target="_blank">live site</a>
                    </div>
                </div>
            </header>

            <section className="project_description">
                <article className="project_info">
                    <h3>What is Bookhood?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ut hac sollicitudin facilisis erat dolor dignissim porttitor euismod. Sit magna vivamus eu mattis ac dignissim nam. Massa accumsan imperdiet amet nibh orci ipsum. Sed amet a blandit orci. Ultricies ut vitae lectus parturient nisl scelerisque.
                    </p>
                </article>
                <article className="project_info">
                    <h3>What did I learn?</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ut hac sollicitudin facilisis erat dolor dignissim porttitor euismod. Sit magna vivamus eu mattis ac dignissim nam. Massa accumsan imperdiet amet nibh orci ipsum. Sed amet a blandit orci. Ultricies ut vitae lectus parturient nisl scelerisque.
                    </p>
                </article>
                <article className="project_info">
                    <h3>Conclusions</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ut hac sollicitudin facilisis erat dolor dignissim porttitor euismod. Sit magna vivamus eu mattis ac dignissim nam. Massa accumsan imperdiet amet nibh orci ipsum. Sed amet a blandit orci. Ultricies ut vitae lectus parturient nisl scelerisque.
                    </p>
                </article>
            </section>
        </div>
    )
}

export default Bookhood; 