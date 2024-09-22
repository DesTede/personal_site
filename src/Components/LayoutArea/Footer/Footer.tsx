import {NavLink} from "react-router-dom";
import "./Footer.css";
function Footer(): JSX.Element{
    return (
        <div className="Footer">
            <NavLink className={"aboutBtn"} to={"/about"}>About</NavLink>
            &nbsp;|&nbsp;
            <a href={"https://github.com/DesTede"} target={"_blank"} rel="noreferrer">
                <img src={"images/github-white.svg"} alt={"Github"}/>
            </a>
            
            <a href={"https://www.linkedin.com/in/des-tede/"} target={"_blank"} rel={"noreferrer"}>
                <img src={"/images/linkedin-white.svg"} alt={"LinkedIn"}/>
            </a>
        </div>
    )
}
export default Footer;