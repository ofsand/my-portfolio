import "./technologies.scss"
import frontEnd from './images/front-end.webp';
import backEnd from './images/back_end.png';
import Database from './images/database.png';
import UIUX from './images/UI_UX.png';

const Techs = [
    {
        title: 'Front-end',
        img: frontEnd,
        badgeColor: 'rgb(18, 200, 114)',
        details: [
            'HTML5','CSS3','Bootstrap','JavaScript','React Js'
        ]
    },
    {
        title: 'Back-end',
        img: backEnd,
        badgeColor: '#e67272',
        details: [
            'Symphony','Spring boot','Node Js'
        ]
    },
    {
        title: 'Database',
        img: Database,
        badgeColor: '#3e8dff',
        details: [
            'Mongo DB','Mysql','Fire base'
        ]
    },
    {
        title: 'UI / UX',
        img: UIUX,
        badgeColor: '#f4b463',
        details: [
            'ADOBE XD','Ilustrator','ADOBE PS'
        ]
    },

];

export default function Technologies() {
    return (
        <div className='technologies' id='technologies'>
            <div className="wrapper">
                {Techs.map((tech) => {
                const {title,img} = tech;
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
                            <p className="tech-details-item" style={{ background: tech.badgeColor}}>
                                {d}
                            </p>
                    )})}
                    </div>
                </div>
                )})}
            </div>
        </div>
    )
}
