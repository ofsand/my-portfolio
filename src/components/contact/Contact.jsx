import "./contact.scss"
import { useState } from "react";
import imgContact from "./images/contact.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Result = () => {
    return(
        <p>Your msg has been sent, I'll reply ASAP !</p>
    )
}

export default function Contact() {

    const [result,showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hc829zd', 'template_fyfbdr9', e.target, 'user_QWKQCZ20obu5mFh17D93p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

    setTimeout(() => {
        showResult(false)
    }, 2000);

    return (
        <div className='contact' id='contact'>
            <div className="contact-page">
                <div className="left">
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder="Email" name="Email"/>
                        <textarea placeholder="Message" name="Message"></textarea>
                        <button type="submit">Send</button>
                        <div className="result-msg">
                            {result ? <Result/> : null}
                        </div>
                    </form>
                </div>

                <div className="right">
                    <div className="right-up">
                        <h3>Get in touch !</h3>
                    </div>
                    <div className="contact-img">
                            <img src={imgContact} alt="" />
                    </div>
                    <div className="right-down">
                        <div className="media-icons">
                            <a href="https://github.com/ofsand"> <FaGithub size={30} /> </a>
                            <a href="https://www.linkedin.com/in/zesoufian/"> <FaLinkedin size={30} /> </a>
                        </div>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1637374055">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="footer">
             <p>©Ofsand | Built with REACT JS, sourced on GITHUB</p>
            </div>
        </div>
    )
}
