import "./header.css";
import React from "react";

function header() {
    return (
        <div className="header">
            <div className="header_content">
                <br />
                <p className="header-p">Hi, my name is</p>
                <h1 className="header-h1">Aryan Rajoria</h1>
                <h2 className="header-h2">Web and AI Engineer</h2>
                <h3 className="header-h3">
                    I’m a final year Computer Science major at Bennett
                    University. I have developed a great interest in the field
                    of Machine Learning and Image Processing after having been
                    introduced to it in our coursework. I’m extremely interested
                    in pursuing Independent research and a good internship would
                    consolidate my future career choice. I’m personally
                    interested in the applications of deep learning in 2D images
                    and 3D scenes, also the use of Neural Architecture Search to
                    improve upon these algorithms.
                </h3>
            </div>
        </div>
    );
}

export default header;
