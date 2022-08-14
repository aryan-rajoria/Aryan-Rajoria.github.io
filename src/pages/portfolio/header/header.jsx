import "./header.css";
import React from "react";

function header() {
    return (
        <div className="header">
            <div className="header_content">
                <br />
                <p className="header-p">Hi, my name is</p>
                <h1 className="header-h1">Aryan Rajoria</h1>
                <h2 className="header-h2">
                    Programmer, AI engineer, Web developer
                </h2>
                <h3 className="header-h3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </h3>
            </div>
        </div>
    );
}

export default header;
