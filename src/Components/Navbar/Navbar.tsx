import {Route, Routes} from "react-router-dom";
import About from "../../Sections/About/About";
import Skills from "../../Sections/Skills/Skills";
import Experience from "../../Sections/Experience/Experience";
import Projects from "../../Sections/Projects/Projects";
import Contact from "../../Sections/Contact/Contact";


function Navbar(): JSX.Element{
    return (
        <div className={"routing"}>
            <Routes>
                <Route path={"/about"} element={<About/>} />
                <Route path={"/skills"} element={<Skills/>}/>
                <Route path={"/experience"} element={<Experience/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </div>
    )
}
export default Navbar;