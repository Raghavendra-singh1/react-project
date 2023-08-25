 import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Study from "../components/Study";
import Footer from "../components/Footer";

function Home(){
    return(
       <>  
       <Navbar/>
       <Hero
       cName="hero"
       heroImg="https://burst.shopifycdn.com/photos/wrtiting-tools.jpg?width=925&format=pjpg&exif=1&iptc=1"
       title="Learn With Us"
       text="Always learn new"
       buttonText="Study Plan"
       url="/services"
       btnClass="show"
     />
     <Destination/>
     <Study/>
     <Footer/>
       </>
    )
}

export default Home;