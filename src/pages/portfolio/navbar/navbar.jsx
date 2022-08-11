import "./navbar.css";
import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <div className="brand inline-ele">
                <p className="inline-ele">Brand Logo,etc.</p>
            </div>
            <ol className="menu inline-ele">
                <li>About</li>
                <li>Experience</li>
                <li>Work</li>
                <li>Contact</li>
                <li id="resume">Resume</li>
            </ol>
        </div>
    );
}
export default Navbar;
