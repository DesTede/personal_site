import {Box, Button} from "@mui/material";
import "./Projects.css"
import ScrollReveal from "../../Hooks/ScrollReveal";


function Projects(): JSX.Element {
    return (
        <div className={"Project"}>
                <div>
                    <ScrollReveal>
                    <div className={"project-header-main"}>Projects.</div>
                    </ScrollReveal>
                    
                    <ScrollReveal>
                    <div className={"project-header-sub"}>Coupons management System</div>
                    </ScrollReveal>
                    
                    <ScrollReveal>
                    <p>
                    Developed a comprehensive coupon management system, enabling users to create, view, update, and delete
                    coupons for various businesses.
                    The project involved building both the backend and frontend, ensuring efficient data handling and an
                    intuitive user interface.
                    </p>
                    </ScrollReveal>
            
                    <ScrollReveal>
                    <div className={"project-one-box"}>
                    <Box
                        sx={{
                            backgroundColor: '#3f3f3f',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '10px',
                            marginRight: '10px',
                            display: 'inline-block',
                        }}
                        className={"App-logo"}>
                        
                        Java
                    </Box>
                        
                    <Box sx={{
                        backgroundColor: '#3f3f3f',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '10px',
                        marginRight: '10px',
                        display: 'inline-block',
                    }}
                        className={"App-logo"}> Spring
                    </Box>
                        
                    <Box sx={{
                        backgroundColor: '#3f3f3f',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '10px',
                        marginRight: '10px',
                        display: 'inline-block',
                    }}
                        className={"App-logo"}>ReactJS
                    </Box>
                        
                    <Box sx={{
                        backgroundColor: '#3f3f3f',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '10px',
                        marginRight: '10px',
                        display: 'inline-block',
                    }}
                        className={"App-logo"}>Rest APIs
                    </Box>
                    </div>
                    </ScrollReveal>
                    
                </div>
                
            
                <div className={"project-section"}>
                    <ScrollReveal>
                    <div className={"project-header-sub"}>This website</div> 
                    </ScrollReveal>
                    <ScrollReveal>
                        <p>
                        A responsive, single-page portfolio website to showcase my skills, projects, and background as a full-stack
                        developer.
                        </p>
                    </ScrollReveal>
                    
                    <div>
                        <ScrollReveal>
                            <Box sx={{
                                backgroundColor: '#3f3f3f',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '10px',
                                marginRight: '10px',
                                display: 'inline-block',
                            }}
                                className={"App-logo"}>ReactJS
                            </Box>
                                
                            <Box sx={{
                                backgroundColor: '#3f3f3f',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '10px',
                                marginRight: '10px',
                                display: 'inline-block',
                            }}
                                className={"App-logo"}>JavaScript
                            </Box>
                                
                            <Box sx={{
                                backgroundColor: '#3f3f3f',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '10px',
                                marginRight: '10px',
                                display: 'inline-block',
                            }}
                                className={"App-logo"}>TypeScript
                            </Box>
                        </ScrollReveal>
                    </div>
                    
                    <div>
                        <ScrollReveal>
                            <div className={ "linkLogo"}>
                                <Button className={"link-logo"}  variant={"contained"} sx={{
                                    textTransform: 'none',
                                    backgroundColor: 'transparent',
                                    fontFamily: 'poppins, sans-serif',
                                    fontWeight:'bolder',
                                    color: 'black',
                                    border: '2px solid black',
                                    '&:hover': {
                                        transition: 'transform 0.3s',
                                        border: '2px solid black',
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    }, borderRadius: '40px',
                                }}
                                        href={"https://github.com/DesTede/personal_site"} target={"_blank"}>
                                    GitHub
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                    
                </div>

        </div>
    );
}

export default Projects;