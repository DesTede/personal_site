import {Route, Routes} from "react-router-dom";
import ScrollToSection from "../ScrollToSection/ScrollToSection";


function Navbar(): JSX.Element{
    return (
        <div className={"routing"}>
            <Routes>
                <Route path={"/about"} element={<ScrollToSection sectionId={"about"}/>}  />
                <Route path={"/skills"} element={<ScrollToSection sectionId={"skills"}/>}/>
                <Route path={"/experience"} element={<ScrollToSection sectionId={"experience"}/>}  />
                <Route path={"/projects"} element={<ScrollToSection sectionId={"projects"}/>}  />
                <Route path={"/contact"} element={<ScrollToSection sectionId={"contact"}/>}  />
            </Routes>
        </div>
    )
}
export default Navbar;