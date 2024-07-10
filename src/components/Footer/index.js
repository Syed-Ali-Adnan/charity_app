import { Link } from "react-router-dom";
import logo from "./assets/logo.webp"
import send from "./assets/send.png"
import "./index.css";

const Header = () =>{
    return(
        <div className="footer">
            <div className="col1">
                <img src={logo} className="footer_logo"></img>
            </div>
            <div className="col2">
                <p className="footer_sub_heading">Contact info</p>
                <p className="footer_txt">Address :Your address goes here, your demo address.</p>
                <p className="footer_txt">Phone: +8880 44338899</p>
                <p className="footer_txt">Email: info@colorlib.com</p>
            </div>
            <div className="col3">
            <p className="footer_sub_heading">Important Link</p>
            <div className="imp_link">
            <Link to={"/"} className="footer_txt">View Project</Link>
            <Link to={"/"} className="footer_txt">Contact</Link>
            <Link to={"/"} className="footer_txt">Testimonial</Link>
            <Link to={"/"} className="footer_txt">Properties</Link>
            <Link to={"/"} className="footer_txt">Support</Link>
            </div>
            </div>
            <div className="col4">
                <p className="footer_sub_heading">Newsletter</p>
                <p className="footer_txt">Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
                <div className="footer_email_bar_wraper">
                <input placeholder="Email Adress" className="footer_input"></input>
                <button><img src={send} className="send_btn"></img></button></div>
            </div>
        </div>
    )
}

export default Header;