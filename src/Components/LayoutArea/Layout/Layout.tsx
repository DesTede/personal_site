import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Projects from "../../../Sections/Projects/Projects";
import Contact from "../../../Sections/Contact/Contact";
import About from "../../../Sections/About/About";
import Home from "../../../Sections/Home/Home";
import {BrowserRouter} from "react-router-dom";
import "./Layout.css"

function Layout(): JSX.Element{
    return (
        <div className="Layout">
            <BrowserRouter>
                
                <Navbar />
                
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                {/* <section id="skills"> */}
                {/*    <Skills /> */}
                {/* </section> */}
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <footer>
                    <Footer/>
                </footer>
            </BrowserRouter>
        </div>
    );


}

export default Layout