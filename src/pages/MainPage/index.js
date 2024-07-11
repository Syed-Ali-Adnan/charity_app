import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import jumbo from "./assets/jumbo.jpg";
import "./index.css";
import phone from "./assets/phone.png";
import setting from "./assets/setting.png";
import skull from "./assets/skul.png";
import kidImg1 from "./assets/kidImg1.jpg";
import kidImg2 from "./assets/kidImg2.jpg";
import kidImg3 from "./assets/kidImg3.jpg";
import kidImg4 from "./assets/kidImg4.jpg";
import kidImg5 from "./assets/kidImg5.jpg";
import team1 from "./assets/team1.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";
import team4 from "./assets/team4.png";
import margaret from "./assets/margaret.jpeg";
import blog1 from "./assets/blog1.png";
import blog2 from "./assets/blog2.png";

const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <section className="jumbo">
        <div>
          <p className="jumbo_heading">
            Our Helping To <br></br>The World.
          </p>
          <p className="jumbo_txt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor.
          </p>
          <p className="jumbo_txt">
            incididunt ut labore et dolore magna aliqua. Utnixm.
          </p>
          <div className="jumbo_btn">
            <button className="jumbo_donate_btn">Donate</button>
            <div className="jumbo_phone_wraper">
              <img src={phone} className="jumbo_phone_pic"></img>
              <p className="jumbo_num">+12 345 456</p>
            </div>
          </div>
        </div>
        <div className="jumbpo_pic">
          <img src={jumbo}></img>
        </div>
      </section>

      <section>
        <section className="what_we_do_txt">
          <p className="green_color">What We Are Doing</p>
          <p className="blue_color">We Are In A Mission To </p>
          <p className="blue_color">Help The Helpless</p>
        </section>
        <section className="about_cards">
          <div className="clean_water_card">
            <img src={setting} className="card_img"></img>
            <p className="clean_heading_card">Clean Water</p>
            <p className="clean_txt_card">
              The sea freight service has grown conside rably in recent years.
              We spend timetting to know your processes to.
            </p>
          </div>
          <div className="clean_water_card">
            <img src={skull} className="card_img"></img>
            <p className="clean_heading_card">Clean Water</p>
            <p className="clean_txt_card">
              The sea freight service has grown conside rably in recent years.
              We spend timetting to know your processes to.
            </p>
          </div>
          <div className="clean_water_card">
            <img src={setting} className="card_img"></img>
            <p className="clean_heading_card">Clean Water</p>
            <p className="clean_txt_card">
              The sea freight service has grown conside rably in recent years.
              We spend timetting to know your processes to.
            </p>
          </div>
        </section>
        <section className="our_mission">
          <div>
            <p className="mission_heading">We Are In A Mission To </p>
            <p className="mission_heading">Help Helpless</p>
            <p className="mission_txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod
              tempor incididunt ut labore et dolore magna aliqua. Utnixm, quis
              nostrud exercitation ullamc.
            </p>
            <p className="mission_txt">
              Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod
              tempor incididunt ut labore et dolore.
            </p>
            <button className="about_btn">About Us</button>
          </div>
          <div className="our_misson_pic">
            <img src={kidImg1} className="kid_img"></img>
          </div>
        </section>
      </section>

      <div className="latest">
        <div className="poorty_rate_card">
          <div className="poorty_rate_card1">
            <img src={kidImg2} className="poorty_card_img"></img>
            <p className="poorty_card_heading">
              Ensure Education For Every Poor Children
            </p>
            <p className="progress_bar">70%</p>
            <div className="green_progress_bar1"></div>
            <div className="raised_goal">
              <p>
                Raised:<span>$20,000</span>{" "}
              </p>
              <p>
                Goal: <span>$35,000</span>
              </p>
            </div>
          </div>

          <div className="poorty_rate_card1">
            <img src={kidImg3} className="poorty_card_img"></img>
            <p className="poorty_card_heading">
              Providing Heathly Food For The Children
            </p>
            <p className="progress_bar2">25%</p>
            <div className="green_progress_bar2"></div>
            <div className="raised_goal">
              <p>
                Raised:<span>$20,000</span>{" "}
              </p>
              <p>
                Goal: <span>$35,000</span>
              </p>
            </div>
          </div>

          <div className="poorty_rate_card1">
            <img src={kidImg4} className="poorty_card_img"></img>
            <p className="poorty_card_heading">
              Supply Drinking Water For The Peoples.
            </p>
            <p className="progress_bar3">50%</p>
            <div className="green_progress_bar3"></div>
            <div className="raised_goal">
              <p>
                Raised:<span>$20,000</span>{" "}
              </p>
              <p>
                Goal: <span>$35,000</span>
              </p>
            </div>
          </div>

          <div className="poorty_rate_card1">
            <img src={kidImg5} className="poorty_card_img"></img>
            <p className="poorty_card_heading">
              Ensure Education For Every Poor Children
            </p>
            <p className="progress_bar">70%</p>
            <div className="green_progress_bar1"></div>
            <div className="raised_goal">
              <p>
                Raised:<span>$20,000</span>{" "}
              </p>
              <p>
                Goal: <span>$35,000</span>
              </p>
            </div>
          </div>

          <div className="poorty_rate_card1">
            <img src={kidImg3} className="poorty_card_img"></img>
            <p className="poorty_card_heading">
              Providing Heathly Food For The Children
            </p>
            <p className="progress_bar2">25%</p>
            <div className="green_progress_bar2"></div>
            <div className="raised_goal">
              <p>
                Raised:<span>$20,000</span>{" "}
              </p>
              <p>
                Goal: <span>$35,000</span>
              </p>
            </div>
          </div>

          <div className="poorty_rate_card1">
            <img src={kidImg4} className="poorty_card_img"></img>
            <p className="poorty_card_heading">
              Supply Drinking Water For The Peoples.
            </p>
            <p className="progress_bar3">50%</p>
            <div className="green_progress_bar3"></div>
            <div className="raised_goal">
              <p>
                Raised:<span>$20,000</span>{" "}
              </p>
              <p>
                Goal: <span>$35,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="what_we_do_txt1">
        <p className="green_color">What We Are Doing</p>
        <p className="blue_color">We Arrange Many Social Events</p>
        <p className="blue_color">For Charity Donations</p>
      </section>
      <section className="all_social">
        <div>
          <div className="social_row">
            <img src={kidImg3} className="social_img1"></img>
            <p className="social_txt">Donation is hope</p>
          </div>
          <div className="social_row">
            <img src={kidImg4} className="social_img1"></img>
            <p className="social_txt">A hand for children</p>
          </div>
          <div className="social_row">
            <img src={kidImg5} className="social_img1"></img>
            <p className="social_txt">Help for children</p>
          </div>
          <div className="social_row">
            <img src={kidImg3} className="social_img1"></img>
            <p className="social_txt">Donation is hope</p>
          </div>
        </div>
      </section>

      <section className="what_we_do_txt1">
        <p className="green_color">What We Are Doing</p>
        <p className="blue_color">Our Expert Volunteer Always</p>
        <p className="blue_color">Ready</p>
      </section>

      <section className="all_Volunteer">
        <div>
          <img src={team1}></img>
          <h1 className="vol_team_name">Bruce Robert</h1>
          <p className="vol_team_post">Volunteer Leader</p>
        </div>
        <div>
          <img src={team2}></img>
          <h1 className="vol_team_name">Robert Rechard</h1>
          <p className="vol_team_post">Volunteer Leader</p>
        </div>
        <div>
          <img src={team3}></img>
          <h1 className="vol_team_name">Brendon Tailor</h1>
          <p className="vol_team_post">Volunteer Leader</p>
        </div>
        <div>
          <img src={team4}></img>
          <h1 className="vol_team_name">Walshr Hasgt</h1>
          <p className="vol_team_post">Volunteer Leader</p>
        </div>
      </section>

      <section className="volunteer_box">
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
          <p className="italic">
            "I am at an age where I just want to be fit and healthy our bodies{" "}
            <br></br> are our responsibility! So start caring for your body and
            it will <br></br>care for you. Eat clean it will care for you and
            workout hard."
          </p>
        </section>
      </section>

      <section className="what_we_do_txt1">
        <p className="green_color">Our Recent Blog</p>
        <p className="blue_color">Latest News From Our</p>
        <p className="blue_color">Recent Blog</p>
      </section>

      <section className="home_blog">
        <div>
          <img src={blog1}></img>
          <p className="home_blog_poster">Creative derector</p>
          <p className="home_blog_title">
            Footprints In Time Is Perfect House In Kurashiki
          </p>
        </div>
        <div>
          <img src={blog2}></img>
          <p className="home_blog_poster">Creative derector</p>
          <p className="home_blog_title">
            Footprints In Time Is Perfect House In Kurashiki
          </p>
        </div>
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
      <Footer />
    </div>
  );
};

export default MainPage;
