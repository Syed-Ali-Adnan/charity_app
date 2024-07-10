import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import blackKid from "./assets/blackKid.jpg"

const Home = () =>{
    return(
        <div className="home">
            <Header/>
            <div className="jumbotron_wraper">
                <div className="jumbotron_text">
                    <h1>Our helping to the world</h1>
                    <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                </div>
                <div className="jumbotron_img">
                    <img src={blackKid}></img>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home