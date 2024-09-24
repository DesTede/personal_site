import "./Footer.css";

function Footer(): JSX.Element{
    return (
        <div className="Footer">
            
            <img className={"footer-profile"} src={"images/profile-pic.jpg"} alt={"Des Tede"}/>
            <div className={"footer-links"}>
                <a href={"https://github.com/DesTede"} target={"_blank"} rel="noreferrer">
                    <img className={"footer-link"}  src={"images/github-white.svg"} alt={"Github"}/>
                </a >
                <a  href={"https://www.linkedin.com/in/des-tede/"} target={"_blank"} rel={"noreferrer"}>
                    <img className={"footer-link"} src={"/images/linkedin.svg"} alt={"LinkedIn"}/>
                </a>
            </div>
        </div>
    )
}
export default Footer;