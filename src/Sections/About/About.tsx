import {Button} from "@mui/material";

function About(): JSX.Element {
    return (
        <div>
            <h1>ABout Me.</h1>
            <p className={"AboutMe"}>
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
                {/*Java, Spring,React,Mysql, typescript, CSS, Javascript,*/}
                <img src={"/images/java-4-logo.svg"} alt={"Java"}/>
                <img src={"/images/python-3-logo.svg"} alt={"Python"}/>
                {/*<img src={"/images/spring_logo.svg"} alt={"Spring"}/>*/}
                {/*<img src={"/images/mongodb.svg"} alt={"MongoDB"}/>*/}
                <img src={"/images/mysql-.svg"} alt={"MySQL"}/>
                <img src={"/images/react.svg"} alt={"ReactJS"}/>
                <img src={"/images/typescript.svg"} alt={"TypeScript"}/>
                <img src={"/images/javascript-.svg"} alt={"JavaScript"}/>
                <img src={"/images/html5-balck-icon.svg"} alt={"HTML"}/>
                <img src={"/images/css3.svg"} alt={"CSS"}/>
            </p>
            
            <Button variant={"contained"} color={"primary"} download href={"https://drive.google.com/file/d/11se1_3aQWGyJFTSrGnvsKTNePdDsPyId/view?usp=sharing"}>
                Download my CV
            </Button>
            
        </div>
    );
}

export default About;