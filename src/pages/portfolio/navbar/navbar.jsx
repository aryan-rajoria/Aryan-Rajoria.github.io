import "./navbar.css";
import { ReactComponent as Logo } from "../../../components/micro/rocket.svg";
import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <div className="brand inline-ele">
                <div className="div-logo inline-ele">
                    <Logo className="logo" />
                </div>
            </div>
            <ol className="menu inline-ele">
                <li>
                    <a href="#aboutme">
                        <code>About</code>
                    </a>
                </li>
                <li>
                    <a href="#pastexperience">
                        <code>Experience</code>
                    </a>
                </li>
                <li>
                    <a href="#highlights">
                        <code>Work</code>
                    </a>
                </li>
                <li>
                    <a href="#contactme">
                        <code>Contact</code>
                    </a>
                </li>
                <li id="resume">
                    <code>Resume</code>
                </li>
            </ol>
        </div>
    );
}
export default Navbar;
