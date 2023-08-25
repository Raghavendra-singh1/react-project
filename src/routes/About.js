import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About(){
    return(
       <>
       <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={"https://cdnwebsite.databox.com/wp-content/uploads/2020/12/01062702/about-us-page-examples.png"}
         abouttitle="About Us"
        url= "/about"
      />
      <Aboutus/>
      <Footer/>
       </>
    )
}

export default About;