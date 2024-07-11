import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import blog1 from "../MainPage/assets/blog1.png"
import blog2 from "../MainPage/assets/blog2.png"


const Blogs = () =>{
    return(
        <div className="Blogs">
            <Header/>
            <p className="about_heading">Blogs</p>
            <section className="home_blog"> 
            <div>
              <img src={blog1}></img>
              <p className="home_blog_poster">Creative derector</p>
              <p className="home_blog_title">Footprints In Time Is Perfect House In Kurashiki</p>
            </div>
            <div>
              <img src={blog2}></img>
              <p className="home_blog_poster">Creative derector</p>
              <p className="home_blog_title">Footprints In Time Is Perfect House In Kurashiki</p>
            </div>
          </section>

            <Footer/>
        </div>
    )
}

export default Blogs