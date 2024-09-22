import {NavLink} from "react-router-dom";
import "./Footer.css";
function Footer(): JSX.Element{
    return (
        <div className="Footer">
            <NavLink className={"aboutBtn"} to={"/about"}>About</NavLink>
            &nbsp;|&nbsp;
            <a href={"https://github.com/DesTede"} target={"_blank"} rel="noreferrer">
                <img src={"images/GitHub-Mark-ea2971cee799.png"} alt={"github link"}/>
            </a>
        </div>
    )
}
export default Footer;