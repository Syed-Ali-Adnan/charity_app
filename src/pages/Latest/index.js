import kidImg2 from "./assets/kidImg2.jpg";
import kidImg3 from "./assets/kidImg3.jpg";
import kidImg4 from "./assets/kidImg4.jpg";
import kidImg5 from "./assets/kidImg5.jpg";
import "./index.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

const Latest = () => {
  return (
    <div className="latest">
      <Header />
      <p className="latest_heading">Latest Cause</p>
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
      <Footer />
    </div>
  );
};

export default Latest;
