import "./intro.scss"
import { useEffect,useRef } from "react";
import { init } from "ityped";
import imgIntro2 from "./images/intro-new.png";

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            backDelay: 1000,
            backSpeed: 60,
            showCursor: true,
            strings: [" Software Engineer", " Web Developer", " Front-end Developer" ], 
        });
    } ,[]);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src={imgIntro2} alt="man"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey, I'm</h2>
                    <h1>Soufiane ZEDDOU</h1>
                    <h3>
                        <span ref={textRef}></span>
                        </h3>
                </div>
                <div className="wrapper_2">
                    <button type="submit" onClick={()=> window.open("https://cvdesignr.com/p/6189671c33b67", "_blank")}>View my Resume</button>
                    <button type="submit" onClick="#contact">Hire me</button>
                </div>
                    <a href="#experience" className="btn-down">
                    <img src="assets/down.png" alt="down"></img>
                </a>
            </div>
            <div className="custom-shape-divider-top-1637373940">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

        </div>
    )
}
