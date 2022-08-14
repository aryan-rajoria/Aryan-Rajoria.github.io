import Github from "../icons/github.js";
import Linkedin from "../icons/linkedin.js";

import "./portfoliosticky.css";

function stickyelement() {
    return (
        <div className="sticky">
            <ul className="no-marker">
                <li>
                    <a href="https://github.com/Aryan-Rajoria">
                        <Github />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/aryan-rajoria-888555196/">
                        <Linkedin />
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default stickyelement;
