import {NavLink} from "react-router-dom";
import "./Footer.css";
function Footer(): JSX.Element{
    return (
        <div className="Footer">
            <NavLink className={"aboutBtn"} to={"/aboutemporium"}>About Us</NavLink>
            &nbsp;|&nbsp;
            <a href={"https://github.com/DesTede"} target={"_blank"} rel="noreferrer">
                <img src={"images/GitHub-Mark-ea2971cee799.png"} alt={"github link"}/>
            </a>
            <NavLink to={"mailto:desaleytede@gmail.com"}>
                <img src={"images/free-mail-1437261-1216865.webp"} alt={"mail link"}/>
            </NavLink>
            <a href={"https://www.facebook.com/"} target={"_blank"} rel="noreferrer">
                <img src={"images/46-facebook-512.webp"} alt={"facebook link"}/>
            </a>
            <a href={"https://www.instagram.com/"} target={"_blank"} rel="noreferrer">
                <img src={"images/icon-media-social-instagram-free-vector.jpg"} alt={"instagram link"}/>
            </a>
        </div>
    )
}
export default Footer;