import Github from "../icons/github.js";
import Linkedin from "../icons/linkedin.js";

import "./portfoliosticky.css";

function stickyelement() {
    return (
        <div className="sticky">
            <ul className="no-marker">
                <li>
                    <Github />
                </li>
                <li>
                    <Linkedin />
                </li>
            </ul>
        </div>
    );
}
export default stickyelement;
