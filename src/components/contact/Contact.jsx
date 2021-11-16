import "./contact.scss"
import { useState } from "react";


export default function Contact() {

    const [message,setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <h2>Hire me.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for contacting me, I'll reply ASAP !</span>}
                </form>
            </div>

            <div className="right">
                <img src="assets/shake.svg" alt="" />
            </div>

        </div>
    )
}
