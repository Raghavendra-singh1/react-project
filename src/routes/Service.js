import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Study from "../components/Study";
import CoursesData from "../components/CoursesData";
import Course from "../components/Course";

function Service(){
    return(
       <>
       <Navbar/>
       <Hero
        cName="hero-mid"
        heroImg={"https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/04/Untitled-design-7.png"}
        url= "/services"
      />
      <Course/>
      <Study/>
      <Footer/>
       </>
    )
}

export default Service;