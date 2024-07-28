import React from "react";
import '../contect/contact.modules.css';
import Linkedin from '../../assets/0c78d03cbfa19d5f3d7ad1b6e49f957b.png';
import github from '../../assets/b51b78ecc9e5711274931774e433b5e6-removebg-preview.png';
import X from '../../assets/Untitled (10).png';
import gmail from '../../assets/88e14cc7e7fcbb0e0e09de26cec86c61-removebg-preview.png';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b7bbdbc3-c795-46ff-b546-04afb28fbb6c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const res = await response.json();
    
            if (res.success) {
                event("");
            } else {
                console.log("Error", res);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
      
    return (
        <section>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form onSubmit={onSubmit} className="contactForm">
                    <input type="text" name="name" className="name" placeholder="Your Name" required />
                    <input type="email" name="email" className="email" placeholder="Your Email" required />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button className="submitBtn" type="submit">Submit</button>
                    <div className="links">
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><img src={gmail} alt="gmail" className="link" /></a>
                        <a href="https://www.linkedin.com/in/dinker-saini-6a137a247/"><img src={Linkedin} alt="Linkedin" className="link" /></a>
                        <a href="https://github.com/dinker-123"><img src={github} alt="github" className="link" /></a>
                        <img src={X} alt="X" className="linkX" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
