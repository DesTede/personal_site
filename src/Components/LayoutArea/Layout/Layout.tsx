import {BrowserRouter} from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Projects from "../../../Sections/Projects/Projects";
import Experience from "../../../Sections/Experience/Experience";
import Contact from "../../../Sections/Contact/Contact";
import About from "../../../Sections/About/About";
import Home from "../../../Sections/Home/Home";

function Layout(): JSX.Element{
    return (
        <div className="Layout">
            <BrowserRouter>
                <Navbar/>
                <section id={"home"}>
                    <Home/>
                </section>
                
                <section id={"about"}>
                    <About/>
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