import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Projects from "../../Sections/Projects/Projects";
import Contact from "../../Sections/Contact/Contact";
import About from "../../Sections/About/About";
import Home from "../../Sections/Home/Home";
import "./Layout.css";

function Layout(): JSX.Element {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="Layout">
            <nav className="layout-navbar">
                <div className="menu-icon" onClick={handleClick}>
                    {click ? '✖' : '☰'} {/* Toggle icon */}
                </div>
                <Navbar isVisible={click} onToggle={closeMobileMenu}/>
            </nav>

            <div className="layout-footer">
                <Footer/>
            </div>

            <div className="content-container">

                <section id="home">
                    <Home/>
                </section>

                <section id="about">
                    <About/>
                </section>

                <section id="projects">
                    <Projects/>
                </section>

                <section id="contact">
                    <Contact/>
                </section>
                
                <section id={"container-footer"}>
                    © All rights reserved
                </section>
            </div>


        </div>
    );
}

export default Layout;