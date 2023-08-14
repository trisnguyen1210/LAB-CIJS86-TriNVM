import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { contextHref } from "../../App";
function Navigation() {
  const { setHref } = useContext(contextHref);
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={() => setHref("/")}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={() => setHref("/about")}>
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" onClick={() => setHref("/course")}>
              Course
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/edit-profile" onClick={() => setHref("/editprofile")}>
              Edit Profile
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
