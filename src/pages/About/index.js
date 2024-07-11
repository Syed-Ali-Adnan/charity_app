import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import "./index.css";
import setting from "./assets/setting.png"
import skull from "./assets/skul.png"
import kidImg1 from "./assets/kidImg1.jpg"
import margaret from "./assets/margaret.jpeg"

const About = () =>{
    return(
        <div className="About">
            <Header/>
          <p className="about_heading">About</p>
          <section className="what_we_do_txt">
            <p className="green_color">What We Are Doing</p>
            <p className="blue_color">We Are In A Mission To </p>
            <p className="blue_color">Help The Helpless</p>
          </section>
          <section className="about_cards">
            <div className="clean_water_card">
                <img src={setting} className="card_img"></img>
                <p className="clean_heading_card">Clean Water</p>
                <p className="clean_txt_card">The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
            </div>
            <div className="clean_water_card">
                <img src={skull} className="card_img"></img>
                <p className="clean_heading_card">Clean Water</p>
                <p className="clean_txt_card">The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
            </div>
            <div className="clean_water_card">
                <img src={setting} className="card_img"></img>
                <p className="clean_heading_card">Clean Water</p>
                <p className="clean_txt_card">The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
            </div>
          </section>
          <section className="our_mission">
            <div>
                <p className="mission_heading">We Are In A Mission To </p>
                <p className="mission_heading">Help Helpless</p>
                <p className="mission_txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor incididunt ut labore et dolore magna aliqua. Utnixm, quis nostrud exercitation ullamc.</p>
                <p className="mission_txt">Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod tempor incididunt ut labore et dolore.</p>
                <button className="about_btn">About Us</button>
            </div>
            <div className="our_misson_pic">
                <img src={kidImg1} className="kid_img"></img>
            </div>
          </section>
          <section className="volunteer">
            <div className="volunteer_txt">
                <p>Lets Chenge The World With Humanity.</p>
            </div>
            <div>
                <button className="volunteer_btn">Become a volunteer</button>
            </div>
          </section>
          <section className="our_team">
            <img src={margaret}></img>
            <p className="marget_heading">Margaret Lawson</p>
            <p className="marget_sub_heading">Creative Director</p>
            <p className="italic">"I am at an age where I just want to be fit and healthy our bodies <br></br> are our responsibility! So start caring for your body and it will <br></br>care for you. Eat clean it will care for you and workout hard."</p>
          </section>
          <section className="donation">
            <div className="donation_num">
                <p>6,200+</p>
                <p>Donation</p>
            </div>
            <div className="donation_num">
                <p>80+</p>
                <p>Fund Raised</p>
            </div>
            <div className="donation_num">
                <p>256+</p>
                <p>Donation</p>
            </div>
            <div className="donation_num">
                <p>256+</p>
                <p>Donation</p>
            </div>
          </section>
          <Footer/>
        </div>
    )
}

export default About