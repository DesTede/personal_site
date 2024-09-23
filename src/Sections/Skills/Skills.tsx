function Skills(): JSX.Element {
    return (
        <p>
            <div className={"skills-header-main"}>Skills.</div>
            <div className={"skills-header-sub"}>Backend.</div>
            <img className="tech-logo" src={"/images/java-4-logo.svg"} alt={"Java"}/> and <img className="tech-logo"
                                                                                               src={"/images/spring_logo.svg"}
                                                                                               alt={"Spring"}/> : Built
            scalable RESTful APIs and web services using Spring Boot.
            <br/>
            <img className={"tech-logo"} src={"/images/nodejs-icon-logo.svg"} alt={"NodeJS"}/> : Created server-side
            applications and handled asynchronous events.
            <br/>
            <img className="tech-logo" src={"/images/mysql-.svg"} alt={"MySQL"}/> : Managed databases for efficient data
            storage, retrieval, and optimization.
            <br/>

            <div className={"skills-header-sub"}>Frontend.</div>
            <img className="tech-logo" src={"/images/react.svg"} alt={"ReactJS"}/> : Developed responsive, single-page
            applications (SPA) with dynamic user interfaces.
            <br/>
            <img className="tech-logo" src={"/images/html5-balck-icon.svg"} alt={"HTML"}/> and <img
            className="tech-logo" src={"/images/css3.svg"} alt={"CSS"}/> :
            Created accessible and semantic web layouts with modern design principles.
            <br/>
            <img className="tech-logo" src={"/images/typescript.svg"} alt={"TypeScript"}/> :

        </p>

    );
}


export default Skills;