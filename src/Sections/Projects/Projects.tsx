import {Box, Button} from "@mui/material";
import "./Projects.css"
function Projects(): JSX.Element {
    return (
        <div className={"Project"}>
                <div>
                    <div className={"project-header-main"}>Projects.</div>
        
                    <div className={"project-header-sub"}>Coupons management System</div>
                    <p>
                    Developed a comprehensive coupon management system, enabling users to create, view, update, and delete
                    coupons for various businesses.
                    The project involved building both the backend and frontend, ensuring efficient data handling and an
                    intuitive user interface.
                    </p>
                    <div>
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
                                    href={"https://github.com/DesTede?tab=repositories"} target={"_blank"}>
                                    GitHub 
                            </Button>
                    </div>
                </div>
            
                <div className={"project-section"}>
                    <div className={"project-header-sub"}>This website</div>
                        <p>
                        A responsive, single-page portfolio website to showcase my skills, projects, and background as a full-stack
                        developer.
                        </p>         
                    <div>
                        
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
                    </div>
                </div>

        </div>
    );
}

export default Projects;