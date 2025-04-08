
import { useState } from 'react';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin-icon.png';

export default function ContactMe() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <p>Email: meleyhaddis@gmail.com</p>
            <p>Phone: 301-706-9898</p>
            <a href="www.linkedin.com/in/meley-haddis">LinkedIn</a>
            <img className="icon" src={github} alt="github" />
            <a href="https://github.com/melth99">Github</a>
            <img className="icon" src={linkedin} alt="linkedin" />
        </div>
    )
}