import "./ContactFormStyle.css"


function ContactForm(){
    return(
      <div className="form-container">
        <h1>Contact Us:</h1>
        <p>
We welcome your questions, comments, and feedback. If you have any inquiries or suggestions, please don't hesitate to reach out to us. </p>
<p>You can contact us by email at raghavendra.singh_cs20@gla.ac.in or by phone at 8923943270.

Thank you for choosing EduVilla as your online learning partner. We look forward to helping you achieve your goals!</p>
        <h1>send a message to us</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Message" rows="4"></textarea>
            <button className="contact-button">Send message</button>
        </form>
      </div>
    )
}

export default ContactForm;