import {BrowserRouter} from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout(): JSX.Element{
    return (
        <div className="Layout">
            <BrowserRouter>
                <Navbar/>
                
                <section id={"about"}>About</section>
                <section id={"skills"}>Skills</section>
                <section id={"projects"}>Projects</section>
                <section id={"experience"}>Experience</section>
                <section id={"contact"}>Contact</section>
                    
                <footer>
                    <Footer/>
                </footer>
            </BrowserRouter>
        </div>
    );
    
    
}

export default Layout