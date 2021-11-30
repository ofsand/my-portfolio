import "./experience.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Study from "./Study";
import Work from "./Work";

export default function Experience() {

    return (
        <div className="experience" id="experience">
        <BrowserRouter>
          <Navigation/>
            <Routes>
                <Route exact path="/" element={<Study/>} />
                <Route path="/study" element={<Study/>} />
                <Route path="/work" element={<Work/>} />
            </Routes>
        </BrowserRouter>
      </div>
    );
}
