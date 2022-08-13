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
                    <code>About</code>
                </li>
                <li>
                    <code>Experience</code>
                </li>
                <li>
                    <code>Work</code>
                </li>
                <li>
                    <code>Contact</code>
                </li>
                <li id="resume">
                    <code>Resume</code>
                </li>
            </ol>
        </div>
    );
}
export default Navbar;
