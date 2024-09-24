import {Link} from "react-router-dom";
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
    
    return (
        <nav className={"navb"}>
            <Link to="home" className={activeSection === "home" ? "active" : ""}>Home</Link>
            <Link to="about" className={activeSection === "about" ? "active" : ""}>About</Link>
            {/* <Link to="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</Link> */}
            <Link to="projects" className={activeSection === "projects" ? "active" : ""}>Projects</Link>
            <Link to="contact" className={activeSection === "contact" ? "active" : ""}>Contact</Link>
        </nav>
    )
}
export default Navbar;