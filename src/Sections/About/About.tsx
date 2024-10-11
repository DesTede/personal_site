import {/*Button,*/ styled, Tooltip, tooltipClasses, TooltipProps} from "@mui/material";
import './About.css';
import React from "react";
import ScrollReveal from "../../Hooks/ScrollReveal";


const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }}   slotProps={{
        popper: {
            
            modifiers: [
                {
                    name: 'offset',
                    options: { offset: [0, 8] }, 
                }
            ]
        }
        
    }}  />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black, 
    }, 
}));


function About(): JSX.Element {
    
    
    
    return (
        <div className={"AboutMe"}>
                
            <ScrollReveal>
                <div className={"home-header"}>ABout Me.</div>
            </ScrollReveal>
            
            <ScrollReveal>
                <p>
                As a Full-Stack Developer with a strong focus on backend technologies,
                I specialize in Java and ReactJS, building scalable APIs and robust server-side solutions.
                My journey started in mechanical engineering,
                where I honed my attention to detail and problem-solving skills—attributes I now apply to backend
                architecture and design.
                    </p>
            </ScrollReveal>
            <ScrollReveal>
            <p>
                While I’m capable on both the frontend and backend, my passion lies in developing efficient backend
                systems that power seamless user experiences.
                When I’m not deep in code, I’m out exploring the world. I have a love for backpacking, discovering
                new cultures,
                and embarking on outdoor adventures.
                I’m also a sports enthusiast, particularly with running—whether it's a casual jog or a competitive
                race,
                staying active helps fuel my creativity and sharpens my problem-solving skills.
                </p>
            </ScrollReveal>
            
            <ScrollReveal>
            <div className={"tech-header"}>Technologies I've worked with:</div>
            </ScrollReveal>
            
            <ScrollReveal>
            <div className={"skills"}>
                <CustomTooltip title={"Java"} arrow placement={"bottom"}>
                    <img className="tech-logo" src={"/images/java-4-logo.svg"} alt={"Java"} />
                </CustomTooltip>

                <CustomTooltip title={"Spring"} arrow placement={"bottom"}>
                    <img className="tech-logo" src={"/images/spring_logo.svg"} alt={"Spring"} />
                </CustomTooltip>
                
                {/*<CustomTooltip title={"Python"} arrow placement={"bottom"}>*/}
                {/*    <img className="tech-logo" src={"/images/Python_icon_(black_and_white).svg"} alt={"Python"} />*/}
                {/*</CustomTooltip>*/}

                <CustomTooltip title={"NodeJS"} arrow placement={"bottom"}>
                    <img className="tech-logo" src={"/images/nodejs-icon-logo.svg"} alt={"NodeJS"} />
                </CustomTooltip>
                
                
                <CustomTooltip title={"ReactJS"} arrow placement={"bottom"}>
                    <img className="tech-logo" src={"/images/react.svg"} alt={"ReactJS"} />
                </CustomTooltip>

                <CustomTooltip title={"TypeScript"} arrow placement={"top"}>
                    <img className="tech-logo" src={"/images/typescript.svg"} alt={"TypeScript"} />
                </CustomTooltip>

                <CustomTooltip title={"JavaScript"} arrow placement={"top"}>
                    <img className="tech-logo" src={"/images/javascript-.svg"} alt={"JavaScript"} />
                </CustomTooltip>

                <CustomTooltip title={"HTML"} arrow placement={"top"}>
                    <img className="tech-logo" src={"/images/html5-balck-icon.svg"} alt={"HTML"} />
                </CustomTooltip>

                <CustomTooltip title={"CSS"} arrow placement={"top"}>
                    <img className="tech-logo" src={"/images/css-4.svg"} alt={"CSS"} />
                </CustomTooltip>

                <CustomTooltip title={"MySQL"} arrow placement={"top"}>
                    <img className="tech-logo" src={"/images/mysql-.svg"} alt={"MySQL"} />
                </CustomTooltip>

                {/*<CustomTooltip title={"MongoDB"} arrow placement={"top"}>*/}
                {/*    <img className="tech-logo" src={"/images/mongodb.svg"} alt={"MongoDB"} />*/}
                {/*</CustomTooltip>*/}

                <CustomTooltip title={"GitHub"} arrow placement={"top"}>
                    <img className="tech-logo-link" src={"/images/github_black_logo_icon_147128.svg"} alt={"GitHub link"} />
                </CustomTooltip>
            </div>
            </ScrollReveal>

            {/*<ScrollReveal>*/}
            {/*<Button className={"cv-button"}  variant={"contained"} sx={{*/}
            {/*    backgroundColor: 'black',*/}
            {/*    color: 'white',*/}
            {/*    '&:hover': {*/}
            {/*        transition: 'transform 0.3s',*/}
            {/*    }, borderRadius: '40px',*/}
            {/*}}*/}
            {/*        download href={"https://drive.google.com/file/d/11se1_3aQWGyJFTSrGnvsKTNePdDsPyId/view?usp=sharing"} target={"_blank"}>*/}
            {/*    Download my CV*/}
            {/*</Button>*/}
            {/*</ScrollReveal>*/}
        </div>
    );
}

export default About;