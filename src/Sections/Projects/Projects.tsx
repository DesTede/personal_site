import {Button} from "@mui/material";

function Projects(): JSX.Element {
    return (
        <p>
            <div className={"project-header-main"}>Projects.</div>

            <div className={"project-header-sub"}>Coupons management System</div>
            Developed a comprehensive coupon management system, enabling users to create, view, update, and delete
            coupons for various businesses.
            The project involved building both the backend and frontend, ensuring efficient data handling and an
            intuitive user interface.
            <span className={"App-logo"}>Java</span>
            <span className={"App-logo"}> Spring</span>
            <span className={"App-logo"}>ReactJS</span>
            <span className={"App-logo"}>Rest APIs</span>
            <Button className={"GitBttn"}>
                <a href={"https://github.com/DesTede?tab=repositories"}>
                    <img src={"github_black_logo_icon_147128.svg"} alt={"GitHub link"}/>
                </a>
            </Button>

            <div>This website</div>
            A responsive, single-page portfolio website to showcase my skills, projects, and background as a full-stack
            developer.
            <span className={"App-logo"}>ReactJS</span>
            <span className={"App-logo"}>JavaScript</span>
            <span className={"App-logo"}>TypeScript</span>

        </p>
    );
}

export default Projects;