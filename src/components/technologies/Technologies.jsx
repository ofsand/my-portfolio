import "./technologies.scss"
import frontEnd from './images/front-end.webp';
import backEnd from './images/back_end.png';
import Database from './images/database.png';
import UIUX from './images/UI_UX.png';

const Techs = [
    {
        title: 'Front-end',
        img: frontEnd,
        details: [
            'HTML5','CSS3','Bootstrap','JavaScript','React JS'
        ]
    },
    {
        title: 'Back-end',
        img: backEnd,
        details: [
            'Symphony','Spring boot','Nest JS'
        ]
    },
    {
        title: 'Database',
        img: Database,
        details: [
            'Mongo DB','Mysql','Fire base'
        ]
    },
    {
        title: 'UI / UX',
        img: UIUX,
        details: [
            'ADOBE XD','Ilustrator','ADOBE PS'
        ]
    },

];

export default function Technologies() {
    return (
        <div className='technologies' id='technologies'>
            {Techs.map((tech) => {
            const {title,img,details} = tech;
            return(
            <div className="tech-container">
                <h3 className="tech-title">
                    {title}
                </h3>
                <div className="tech-img">
                    <img src={img} alt="" />
                    <div className="line"></div>
                </div>
                <div className="tech-details">
                {tech.details.map(d => {
                    return(
                        <p className="tech-details-item">
                            {d}
                        </p>
                )})}
                </div>
            </div>
            )})};
        </div>
    )
}
