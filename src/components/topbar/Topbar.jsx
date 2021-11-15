import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons";

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius</a>
                    <div className="itemContainer">
                        <Person  className="icon"/>
                        <span>+212688889919</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>zesoufian@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
