import {Button} from "@mui/material";
import "./Projects.css"
function Projects(): JSX.Element {
    return (
        <p>
            <div className={"project-header-main"}>Projects.</div>

            <div className={"project-header-sub"}>Coupons management System</div>
            <p>
            Developed a comprehensive coupon management system, enabling users to create, view, update, and delete
            coupons for various businesses.
            The project involved building both the backend and frontend, ensuring efficient data handling and an
            intuitive user interface.
            </p>
            <div>
            <span className={"App-logo"}>Java</span>
            <span className={"App-logo"}> Spring</span>
            <span className={"App-logo"}>ReactJS</span>
            <span className={"App-logo"}>Rest APIs</span>
            </div>
            <div>
            <Button className={"link-logo"}>
                <a href={"https://github.com/DesTede?tab=repositories"}>
                    <img src={"/images/github_black_logo_icon_147128.svg"} alt={"GitHub link"}/>
                </a>
            </Button>
            </div>
            <div className={"project-header-sub"}>This website</div>
            A responsive, single-page portfolio website to showcase my skills, projects, and background as a full-stack
            developer.
            
            
            <div>
            <span className={"App-logo"}>ReactJS</span>
            <span className={"App-logo"}>JavaScript</span>
            <span className={"App-logo"}>TypeScript</span>
            </div>

        </p>
    );
}

export default Projects;