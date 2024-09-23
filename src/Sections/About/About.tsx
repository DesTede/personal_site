import {Button} from "@mui/material";
import './About.css';

function About(): JSX.Element {
    return (
        <div>
            <p className={"AboutMe"}>
                <div className={"MeHeader"}>ABout Me.</div>
                As a Full-Stack Developer with a strong focus on backend technologies,
                I specialize in Java and ReactJS, building scalable APIs and robust server-side solutions.
                My journey started in mechanical engineering, 
                where I honed my attention to detail and problem-solving skills—attributes I now apply to backend architecture and design.

                While I’m capable on both the frontend and backend, my passion lies in developing efficient backend systems that power seamless user experiences.

                When I’m not deep in code, I’m out exploring the world. 
                I have a love for backpacking, discovering new cultures, and embarking on outdoor adventures. 
                I’m also a sports enthusiast, particularly with running—whether it's a casual jog or a competitive race, 
                staying active helps fuel my creativity and sharpens my problem-solving skills.
            </p>

            <p className={"skills"}>
                <span>Technologies I've worked with:</span>
                <br/>
                {/*Java, Spring,React,Mysql, typescript, CSS, Javascript,*/}
                <img className="tech-logo" src={"/images/java-4-logo.svg"} alt={"Java"}/>
                {/*<img className="tech-logo" src={"/images/Python_icon_(black_and_white).svg"} alt={"Python"}/>*/}
                <img className="tech-logo" src={"/images/spring_logo.svg"} alt={"Spring"}/>
                <img className={"tech-logo"} src={"/images/nodejs-icon-logo.svg"} alt={"NodeJS"}/>
                {/*<img className="tech-logo" src={"/images/mongodb.svg"} alt={"MongoDB"}/>*/}
                <img className="tech-logo" src={"/images/mysql-.svg"} alt={"MySQL"}/>
                <img className="tech-logo" src={"/images/react.svg"} alt={"ReactJS"}/>
                <img className="tech-logo" src={"/images/typescript.svg"} alt={"TypeScript"}/>
                <img className="tech-logo" src={"/images/javascript-.svg"} alt={"JavaScript"}/>
                <img className="tech-logo" src={"/images/html5-balck-icon.svg"} alt={"HTML"}/>
                <img className="tech-logo" src={"/images/css-4.svg"} alt={"CSS"}/>
                <img className={"tech-logo"} src={"/images/github_black_logo_icon_147128.svg"} alt={"GitHub logo"}/>
            </p>

            <Button variant={"contained"} color={"primary"} download
                    href={"https://drive.google.com/file/d/11se1_3aQWGyJFTSrGnvsKTNePdDsPyId/view?usp=sharing"}>
                Download my CV
            </Button>
            
        </div>
    );
}

export default About;