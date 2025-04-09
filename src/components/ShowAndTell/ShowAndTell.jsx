import { useState } from 'react'
import './ShowAndTell.css'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin-logo.png'

export default function ShowAndTell({ show }) {
    console.log("Show data:", show);
    console.log("Images:", show.imgs);

    return (
        <div className="show-and-tell">
            <div className="img-title-container">
                <h2 className="project-title">{show.title}</h2>

    
            </div>
            
            <p className="project-description">{show.description}</p>

            <div className="bullets">
                <ul className="bullet-points"
                style={{ listStyleImage: `url(${show.imgs[1]})` }}>
             
                {show.bullets.map((bullet, index) => (
                    <div className="bullet-point" key={index} style={{ 
                        "--bullet-image": `url(${show.imgs[1]})` 
                    }}>
                        {bullet}
                    </div>
                ))}
                </ul>
            </div>

            {show.imgs && show.imgs.length > 1 && (

                    <img className="project-image"
                        src={show.imgs[0]}
                        alt={`${show.title} screenshot 2`}
                        onError={(e) => {
                            console.error("Image failed to load:", e.target.src);
                            e.target.style.display = 'none';
                        }}
                    />

            )}

            <div className="project-links">
                {show.links.github && (
                    <a href={show.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <img className="link-logo" src={github} alt="GitHub" />
                        <span>GitHub</span>
                    </a>
                )}
                {show.links.live && (
                    <a href={show.links.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <img className="link-logo" src={show.imgs[1]} alt="Live Demo" />
                        <span>Live Demo</span>
                    </a>
                )}
            </div>
        </div>
    )
}