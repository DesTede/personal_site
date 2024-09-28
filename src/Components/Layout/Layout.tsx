import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Projects from "../../Sections/Projects/Projects";
import Contact from "../../Sections/Contact/Contact";
import About from "../../Sections/About/About";
import Home from "../../Sections/Home/Home";
import "./Layout.css"

function Layout(): JSX.Element{
    return (
        <div className="Layout">
                <Navbar/>
                <div className={"sections"}>
                    
                    <section id="home">
                        <Home />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </div>
                <footer className={"Footer"}>
                    <Footer/>
                </footer>
        </div>
    );


}

export default Layout