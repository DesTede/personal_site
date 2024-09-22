import {BrowserRouter} from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Projects from "../../../Sections/Projects/Projects";
import Experience from "../../../Sections/Experience/Experience";
import Contact from "../../../Sections/Contact/Contact";
import Skills from "../../../Sections/Skills/Skills";
import About from "../../../Sections/About/About";

function Layout(): JSX.Element{
    return (
        <div className="Layout">
            <BrowserRouter>
                <Navbar/>
                
                <section id={"about"}>
                    <About/>
                </section>
                <section id={"skills"}>
                    <Skills/>
                </section>
                <section id={"projects"}>
                    <Projects/>
                </section>
                <section id={"experience"}>
                    <Experience/>
                </section>
                <section id={"contact"}>
                    <Contact/>
                </section>
                <footer>
                    <Footer/>
                </footer>
            </BrowserRouter>
        </div>
    );
    
    
}

export default Layout