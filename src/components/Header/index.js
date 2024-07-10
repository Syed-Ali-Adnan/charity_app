import { Link } from "react-router-dom";
import fb from "./assets/fb.png";
import google from "./assets/google.png";
import twiter from "./assets/twiter.png";
import linkedin from "./assets/linkedin.png";
import logo from "./assets/logo.png.webp";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_row1_wraper">
        <div className="header_row_1">
          <div>
            <p className="header_contact_number">
              Phone: +99 (0) 101 0000 888 | Email: noreply@yourdomain.com
            </p>
          </div>
          <div className="social_icon">
            <img src={twiter}></img>
            <img src={fb}></img>
            <img src={linkedin}></img>
            <img src={google}></img>
          </div>
        </div>
        <div className="header_language">
          <select className="lang_selector">
            <option>English</option>
            <option>Arabic</option>
            <option>Bangla</option>
            <option>Hindi</option>
          </select>
          <p>|</p>
          <div>
            <p className="header_subscribe">Subscribe Now</p>
          </div>
        </div>
      </div>
      <div className="header_row2_wraper">
        <img src={logo} className="website_heading"></img>
        <div className="nav_bar">
          <div className="link_wraper">
            <Link to={"/"} className="nav_link">
              Home
            </Link>
            <Link to={"/about"} className="nav_link">
              About
            </Link>
            <Link to={"/latest"} className="nav_link">
              Latest Causes
            </Link>
            <Link to={"/social"} className="nav_link">
              Social Events
            </Link>
            <Link to={"/blogs"} className="nav_link">
              Blogs
            </Link>
            <Link to={"/contact"} className="nav_link">
              Contact
            </Link>
          </div>
          <div className="donate">
            <button className="donate_btn">Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
