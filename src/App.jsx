import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Experience/>
        <Projects/>
        <Technologies/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
