import React, {useEffect} from "react";

const ScrollToSection: React.FC<{ sectionId: string }> = ({ sectionId }) => {
// const ScrollToSection = ({sectionId}) => {
    useEffect(() => {
        const section = document.getElementById(sectionId);
        if (section){
            section.scrollIntoView({behavior: "smooth"});
        }
    }, [sectionId]);
    
    return null;
};


export default ScrollToSection;