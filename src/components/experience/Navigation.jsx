import "./navigation.scss";
import {NavLink} from "react-router-dom";


export default function Navigation(props) {

    return (
        <div className="experience-navbar">
                    <div className="nav">
                        <li><NavLink to={"/"} activeClassName={"active"}> Study </NavLink></li>
                        <li><NavLink to={"/work"} activeClassName={"active"} > Work </NavLink></li>
                    </div>
        </div>
    )
}
