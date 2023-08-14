import Navigation from "../Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "../AboutMe";
import Courses from "../Courses";
import EditProfile from "../EditProfile";
import Home from "../Home";
import "./style.css";

function BlockInfo() {
  return (
    <BrowserRouter>
      <div className="background_info">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default BlockInfo;
