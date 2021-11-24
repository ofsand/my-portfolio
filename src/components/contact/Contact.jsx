import "./contact.scss"
import { useState } from "react";

import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Contact() {

    const [message,setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className='contact' id='contact'>
            <div className="contact-page">
                <div className="left">
                    <h2>Get in touch</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Subject"/>
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                        {message && <span>Thank you for contacting me, I'll reply ASAP !</span>}
                    </form>
                </div>

                <div className="right">
                    <div className="right-up">
                        <h3>Get in touch !</h3>
                    </div>
                    <div className="contact-img">
                            <img src="" alt="" />
                    </div>
                    <div className="right-down">
                        <div className="media-icons">
                            <span><FaGithub size={30} /></span>
                            <span> <FaLinkedin size={30} /> </span>
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
