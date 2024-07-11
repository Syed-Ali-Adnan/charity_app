import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import "./index.css";
import kidImg3 from "./assets/kidImg3.jpg"
import kidImg4 from "./assets/kidImg4.jpg"
import kidImg5 from "./assets/kidImg5.jpg"

const Social = () =>{
    return(
        <div className="Social">
            <Header/>
          <p className="social_heading">Social Events</p>
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



        <Footer/>
        </div>
    )
}

export default Social