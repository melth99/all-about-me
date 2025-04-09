import { useState } from 'react';
import './ContactMe.css';
import github from '/src/assets/github.png';
import linkedin from '/src/assets/linkedin-logo.png';

export default function ContactMe() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            
            <div className="contact-info">
                <p className="contact-item">Email: meleyth@gmail.com</p>
                <p className="contact-item">Phone: 301-706-9898</p>
            </div>
            
            <div className="social-links">
                <a href="https://github.com/melth99" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src={github} alt="GitHub" />
                    <span>GitHub</span>
                </a>
                
                <a href="https://www.linkedin.com/in/meley-haddis" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src={linkedin} alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    )
}