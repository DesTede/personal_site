import "./Navbar.css"
import {useEffect, useState} from "react";


function Navbar(): JSX.Element{
        const [activeSection, setActiveSection] = useState('');

        useEffect(() => {
            const sections = document.querySelectorAll("section");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            });

            sections.forEach((section) => {
                observer.observe(section);
            });

            return () => {
                sections.forEach((section) => {
                    observer.unobserve(section);
                });
            };
        }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
        e.preventDefault(); // Prevent default anchor behavior
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
        }
    };
        
    return (
        <nav className={"navb"}>

            <a href="#home" onClick={(e) => handleScroll(e, "home")}
               className={activeSection === "home" ? "active" : ""}>Home</a>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}
               className={activeSection === "about" ? "active" : ""}>About</a>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}
               className={activeSection === "projects" ? "active" : ""}>Projects</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}
               className={activeSection === "contact" ? "active" : ""}>Contact</a>

            {/*<Link to="home" className={activeSection === "home" ? "active" : ""}>Home</Link>*/}
            {/*<Link to="about" className={activeSection === "about" ? "active" : ""}>About</Link>*/}
            {/*/!* <Link to="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</Link> *!/*/}
            {/*<Link to="projects" className={activeSection === "projects" ? "active" : ""}>Projects</Link>*/}
            {/*<Link to="contact" className={activeSection === "contact" ? "active" : ""}>Contact</Link>*/}
        </nav>
    )
}

export default Navbar;