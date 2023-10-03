"use client"
import '@/Styles/bootstrap.min.css'
import '@/Styles/main.css'
import {sendEmail} from '@/app/api/sendEmail/sendEmail'

export default function Home() {


    const handleAnchorClick = () => { 
        let element = document.getElementById('mySubBtn');
        element?.click();
      };


    return (
        <div>
            <section id="contact-us" className="contact" style={{ marginTop: "5em" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5>CONTACT US</h5>
                            <h2>Get in Touch</h2>
                        </div>
                    </div>
                    <form action={async formData => {
                        await sendEmail(formData);
                    }}>
                        <div className="row">
                            <div className="col-12 col-lg-6 email">
                                <input placeholder="Your email" type="email" name='senderEmail' id="email" size={30} required />
                            </div>
                            <div className="col-12 col-lg-6 email">
                                <input placeholder="Subject" type="subject" id="subject" size={30} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 message">
                                <textarea id="message" name="message" rows={5} cols={1} placeholder="Message here..."></textarea>
                            </div>
                            <div className="col-12">
                                <div className="hero-btns contact-btn">
                                    <a onClick={handleAnchorClick} style={{cursor:"pointer"}}>Send Message</a>
                                    <input type="submit" value={"Send Message"} id='mySubBtn' hidden />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

