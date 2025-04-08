import { useState } from 'react'

export default function ShowAndTell({ show }) {
    // No need to redeclare state with the same name as the prop
    // Just use the show prop directly

    return (
        <>
        <div>   
            <h1>{show.title}</h1>
            <p>{show.description}</p>
            {show.imgs && show.imgs.length > 0 && (
                <img src={show.imgs[1]} alt="Project screenshot" style={{ maxWidth: '100%', height: 'auto' }} />
            )}
           
            <div className="bullets">
                {show.bullets.map((bullet, index) => ( 
                    <div className="bullet" key={index}>
                        <p>{bullet}</p>   
                    </div>
                ))}
            </div> 
            
            {show.imgs && show.imgs.length > 1 && (
                <img src={show.imgs[0]} alt="Project screenshot 2" style={{ maxWidth: '100%', height: 'auto' }} />
            )}

            <div className="links">
                {show.links.map((link, index) => (
                    <div key={index}>
                        {link.github && <a href={link.github}>GitHub</a>}
                        {link.live && <a href={link.live}>Live Demo</a>}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}