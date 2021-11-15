import "./intro.scss"
import { useEffect,useRef } from "react";
import { init } from "ityped";

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 1000,
            backSpeed: 60,
            showCursor: true,
            strings: [" Software Engineer", " Web Developer", " Front-end Developer", " Fast learner", ], 
        });
    } ,[]);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man.png" alt="man"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Soufiane ZEDDOU</h1>
                    <h3>
                        I'm a 
                        <span ref={textRef}></span>
                        </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down"></img>
                </a>
            </div>
        </div>
    )
}
