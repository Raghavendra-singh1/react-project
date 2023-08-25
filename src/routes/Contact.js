import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(
       <>
       <Navbar/>
      
       <Hero
        cName="hero-mid"
        heroImg={"https://www.droptica.com/sites/droptica.com/files/styles/blog_banner_image/public/media/image/contact-pages.png?itok=hIt85Ptt"}
        url= "/contact"
        
      />
      <ContactForm/>
      <Footer/>
       </>
    )
}

export default Contact;