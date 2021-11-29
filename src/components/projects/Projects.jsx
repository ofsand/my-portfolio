import "./projects.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import comingSoonApp from "./images/coming-soon-app.png"


const projects = [
    {
    title: 'Real time chat App',
    img: comingSoonApp,
    linkDemo: '/',
    linkGithub: '/',
    techs: [{
        name:'HTML5',
        color: 'green'
    },
    {
        name:'CSS3',
        color: 'green'
    },
    {
        name:'Firebase',
        color: '#007fff'
    },
    {
        name:'React JS',
        color: 'green'
    }]
},
    {
    title: 'Task Management Application',
    img: comingSoonApp,
    linkDemo: '/',
    linkGithub: '/',
    techs: [{
        name:'HTML5',
        color: 'green'
    },
    {
        name:'CSS3',
        color: 'green'
    },
    {
        name:'Sping Boot',
        color: '#e67272'
    },
    {
        name:'MongoDB',
        color: '#007fff'
    },
    {
        name:'React JS',
        color: 'green'
    }]
}
];

export default function Projects() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides",
    }

    return (
        <div className='projects' id='projects'>

            <Slider {...settings}>
                
            {projects.map((project) => {
                const {title,img,linkDemo,linkGithub} = project;
            return(
            <div className="wrapper">
            <div className="project-container">
                <div className="project-wrapper">
                    <h3 className="project-title">
                        {title}
                    </h3>
                    <div className="project-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="project-techs-container">
                        <h5>Technologies :</h5>
                    {project.techs.map(p => {
                        return(
                            <p className="project-techs" style={{borderColor: p.color}}>
                                {p.name}
                            </p>
                    )})}
                    </div>
                    <div className="line"></div>
                </div>
                <div className="links">
                    <a  href={linkDemo}><button className="demo">Demo</button></a>
                    <a  href={linkGithub}><button className="github">Github</button></a>                   
                </div>
            </div>
            </div>
            )})}
            </Slider>
        </div>
    )
}
