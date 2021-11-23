import "./topbar.scss"


export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">toggle button</a>
                </div>

                <div className="center">
                    <a href="#intro" className="logo">Ofsand</a>
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


/*
                    <div className="itemContainer">
                        <Person  className="icon"/>
                        <span>+212688889919</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>zesoufian@gmail.com</span>
                    </div> */