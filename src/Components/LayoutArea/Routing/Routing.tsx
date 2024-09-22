import {Route, Routes} from "react-router-dom";
import About from "../../../Sections/About/About";
import Contact from "../../../Sections/Contact/Contact";
import Experience from "../../../Sections/Experience/Experience";
import Projects from "../../../Sections/Projects/Projects";



function Routing(): JSX.Element{
    
    return (
        <div className="Routing">
            <Routes>
                <Route path={"/about"} element={<About/>} /> 
                <Route path={"/experience"} element={<Experience/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </div>
             
    )
}
export default Routing;

