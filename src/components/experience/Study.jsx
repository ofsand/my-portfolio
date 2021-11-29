import "./studyAndWork.scss";
import reactLogo from './images/react.png';
import ensa from './images/ensa.png';
import fst from './images/fst.png';
import { FaArrowUp } from 'react-icons/fa';

const studyExperience = [
    {
        title: 'Self learn',
        image: reactLogo,
        place: 'Home',
        startDate: '2020',
        finishDate: 'Now',
        periode: 'Till Now',
        desc: 'Learn React, Spring, Node, Express JS'
    },
    {
        title: 'Master Degree',
        image: ensa,
        place: 'ENSA',
        city: 'Fez',
        startDate: 'sept 2019',
        finishDate: 'June 2021',
        periode: '2 Years',
        desc: 'Architecture and Applications of information systems'
    },
    {
        title: 'Bachelor Degree',
        image: fst,
        place: 'FST',
        city: 'Fez',
        startDate: 'sept 2015',
        finishDate: 'June 2019',
        periode: '4 Years',
        desc: 'Computer Science Major'
    }
    
];

const Study = (props) => {

    return (
        <div className="exp-class">
            <div className="timeline-container">
                {studyExperience.map((exp) => {
                    const {title, image, place, city, startDate, finishDate, periode, desc} = exp;
                    return(
                    <div className="timeline-item">
                        <div className="timeline-item-content">
                            <div className="item-element">
                                <img src={image} alt="" />
                            </div>
                            <div className="item-element">
                                <div className="h6"><h6>{periode}</h6></div>
                                <div className="h6"><h6>{finishDate}</h6></div>
                                <span className="fromTo h6"> <FaArrowUp size={12}/> </span>
                                <div className="h6"><h6>{startDate}</h6></div>
                            </div>
                            <div className="item-element">
                                <h5 className="title">{title}</h5>
                                <div className="item-element-2">
                                    <h5 className="item-element-2-content">{place}</h5>
                                    <h5 className="item-element-2-content">{city}</h5>
                                </div>
                                <p className="desc">{desc}</p>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
};

export default Study;