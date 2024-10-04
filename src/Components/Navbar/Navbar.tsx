import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import your CSS file

function Navbar({ isVisible, onToggle }: { isVisible: boolean; onToggle: () => void }): JSX.Element {
    const [activeSection, setActiveSection] = useState("");

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
            section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
            onToggle(); // Close the mobile menu after clicking
        }
    };

    return (
        <nav className={`navbar ${isVisible ? "" : "hidden"}`}> {/* Toggle visibility based on prop */}
            <div className="menu-icon" onClick={onToggle}>
                &#9776; {/* Hamburger icon */}
            </div>
            <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className={activeSection === "home" ? "active" : ""}
            >
                Home
            </a>
            <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className={activeSection === "about" ? "active" : ""}
            >
                About
            </a>
            <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className={activeSection === "projects" ? "active" : ""}
            >
                Projects
            </a>
            <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className={activeSection === "contact" ? "active" : ""}
            >
                Contact
            </a>
        </nav>
    );
}

export default Navbar;
