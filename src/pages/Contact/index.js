import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import "./index.css";
import phone from "./assets/phone.png";
import email from "./assets/email.png";
import home from "./assets/home.jpeg";

const Contact = () => {
  return (
    <div className="Contact">
      <Header />
      <p className="contact_heading">Contact Us</p>
      <div className="contact_form_wraper">
        <div className="form_div">
          <form>
            <label className="get_heading">Get in touch</label>
            <br></br>
            <textarea placeholder="Enter Message" className="textra"></textarea>
            <div>
              <input type="text" placeholder="Name" className="name"></input>
              <input type="email" placeholder="Email" className="email"></input>
            </div>
            <input
              type="text"
              placeholder="Enter Subject"
              className="subject"
            ></input>
            <div className="contact_btn_box">
              <button className="contact_btn">SEND</button>
            </div>
          </form>
        </div>
        <div className="contact_info_box">
          <div className="home_adress">
            <img src={home} className="home"></img>
            <div>
              <p>Buttonwood, California.</p>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="phone_number">
            <img src={phone} className="phone"></img>
            <div>
              <p>+1 253 565 2365</p>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="email_adress">
            <img src={email} className="mail"></img>
            <div>
              <p>support@colorlib.com</p>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
