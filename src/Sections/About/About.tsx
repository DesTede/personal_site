import {Button} from "@mui/material";
import './About.css';

function About(): JSX.Element {
    return (
        <div>
            <p className={"AboutMe"}>
                <div className={"Me"}>ABout Me.</div>
                as Full-Stack Developer with expertise in Java and ReactJS, My journey started in mechanical engineering, where I learned to appreciate the precision
                of design—skills I now apply to coding.
                passionate about creating scalable APIs and seamless user experiences.
                When I’m not coding, you’ll find me exploring the world. 
                I have a passion for backpacking and discovering new cultures, 
                all while enjoying the thrill of outdoor adventures. I’m also a sports enthusiast,
                especially when it comes to running. Whether it’s a casual jog or a competitive race,
                I believe staying active fuels my creativity and problem-solving skills.
            </p>
            <p className={"skills"}>
                Technologies I've worked with:
                <hr/>
                {/*Java, Spring,React,Mysql, typescript, CSS, Javascript,*/}
                <img className="tech-logo" src={"/images/java-4-logo.svg"} alt={"Java"}/>
                <img className="tech-logo" src={"/images/python-3-logo.svg"} alt={"Python"}/>
                {/*<img className="tech-logo" src={"/images/spring_logo.svg"} alt={"Spring"}/>*/}
                {/*<img className="tech-logo" src={"/images/mongodb.svg"} alt={"MongoDB"}/>*/}
                <img className="tech-logo" src={"/images/mysql-.svg"} alt={"MySQL"}/>
                <img className="tech-logo" src={"/images/react.svg"} alt={"ReactJS"}/>
                <img className="tech-logo" src={"/images/typescript.svg"} alt={"TypeScript"}/>
                <img className="tech-logo" src={"/images/javascript-.svg"} alt={"JavaScript"}/>
                <img className="tech-logo" src={"/images/html5-balck-icon.svg"} alt={"HTML"}/>
                <img className="tech-logo" src={"/images/css3.svg"} alt={"CSS"}/>
            </p>
            
            <Button variant={"contained"} color={"primary"} download href={"https://drive.google.com/file/d/11se1_3aQWGyJFTSrGnvsKTNePdDsPyId/view?usp=sharing"}>
                Download my CV
            </Button>
            
        </div>
    );
}

export default About;