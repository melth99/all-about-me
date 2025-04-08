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

                {show.imgs && show.imgs.length > 0 && (
                    <div className="project-image">
                        <img 
                            src={show.imgs[1]} 
                            alt={`${show.title} screenshot`} 
                            style={{ maxWidth: '100%', height: 'auto' }} 
                            onError={(e) => {
                                console.error("Image failed to load:", e.target.src);
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}
            </div>
            
            <p className="project-description">{show.description}</p>

            <div className="bullets">
                {show.bullets.map((bullet, index) => (
                    <div className="bullet" key={index}>
                        <p>{bullet}</p>
                    </div>
                ))}
            </div>

            {show.imgs && show.imgs.length > 1 && (
                <div className="project-sprite">
                    <img
                        src={show.imgs[0]}
                        alt={`${show.title} screenshot 2`}
                        style={{ maxWidth: '100%', height: 'auto' }}
                        onError={(e) => {
                            console.error("Image failed to load:", e.target.src);
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
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