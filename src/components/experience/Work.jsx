import "./studyAndWork.scss";
import capgemini from './images/capgemini-logo.png';
import medianet from './images/medianet.png';
import abnsoft from './images/abnsoft.png';
import { FaArrowUp } from 'react-icons/fa';

const workExperience = [
    {
        title: 'Web developer',
        image: capgemini,
        place: 'Capgemini',
        city: 'Remote',
        startDate: 'Mars 2021',
        finishDate: 'Sept 2021',
        periode: '6 Months',
        desc: 'Symphony, SVN, LDAP, Bootstrap 4, SQL'
    },
    {
        title: 'Wordpress developer',
        image: medianet,
        place: 'Medianet',
        city: 'Casablanca',
        startDate: 'Oct 2020',
        finishDate: 'Dec 2020',
        periode: '3 Months',
        desc: 'WordPress, JavaScript, FTP, Custum Styling, Shopify'
    },
    {
        title: 'Java developer',
        image: abnsoft,
        place: 'ABNSoft',
        city: 'Casablanca',
        startDate: 'Mars 2019',
        finishDate: 'June 2019',
        periode: '2 Months',
        desc: 'Spring Boot, Bootstrap 4, SQL'
    },
    
];

const Work = (props) => {

    return (
        <div className="exp-class">
            <div className="timeline-container">
                {workExperience.map((exp) => {
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
}

export default Work;