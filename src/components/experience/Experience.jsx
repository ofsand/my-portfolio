import "./experience.scss";

const experiences = [
    {
        title: 'title 1',
        place: 'place 1',
        city: 'city 1',
        time: 'Feb 20 2020',
        desc: 'text 1text 1text 1text 1ffffffffff ffffffff ffff fffffffffff'
    },
    {
        title: 'title 2',
        place: 'place 2',
        city: 'city 2',
        time: 'Feb 20 2020',
        desc: 'text 2'
    },
    {
        title: 'title 3',
        place: 'place 3',
        city: 'city 3',
        time: 'Feb 20 2020',
        desc: 'text 3'
    },
    {
        title: 'self thaught'
    }
    
];

export default function Experience() {

    return (
        <div className="experience" id="experience">
            <div className="experienceTitles">
                <h2 className="study">Study</h2>
                <h2 className="work">Work</h2>
            </div>
            <div className="timeline-container">
                {experiences.map((exp) => {
                    const {title, place, city, time, desc} = exp;
                    return(
                    <div className="timeline-item">
                        <div className="timeline-item-content">
                            <div className="item-element">
                                <h6>{time}</h6>
                            </div>
                            <div className="item-element">
                                <h5>{title}</h5>
                                <div className="item-element-2">
                                    <h5 className="item-element-2-content">{place}</h5>
                                    <h5 className="item-element-2-content">{city}</h5>
                                </div>
                                <p>{desc}</p>
                            </div>
                            <span className="square"></span>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}
