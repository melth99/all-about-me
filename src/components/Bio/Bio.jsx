/* 
what I want in the about me:
    - College
    - fun facts
    - professional pic of me
 */

import meley from '../../images/Meley.png';
import './Bio.css';

function Bio(){
    return (
        <div className="bio-container">
            <div className="bio-header">
                <h1>meley.</h1>
                <p>Pronunciation: 'Mel-aye Had-dis'</p>
            </div>
            
            <div className="bio-content">
                <div className="bio-image">
                    <img 
                        src={meley} 
                        alt="Meley Haddis" 
                        className="profile-image"
                    />
                </div>
                
                <div className="bio-text">
                    <ul>
                        <li>Alma Mater: <big>College of William and Mary</big></li>
                        <li>Interests: </li>
                    </ul>
                    
                    <p>
                        Hi, I'm Meley Haddis (pronounced "Mel-aye Had-dis"), a solutions-driven software 
                        developer with a passion for emerging technologies. My experience in the Electric Vehicle 
                        industry has honed my skills and fueled my enthusiasm for innovative solutions. As an 
                        adaptable professional, I thrive in both collaborative team environments and 
                        self-directed roles, always focusing on delivering high-quality results. 
                        My experiences offer unique insight as well as adaptability that would allow me to excel as an engineer.
                    </p>
                    
                    <div className="resume-section">
                        <h2>Resume Download</h2>
                        {/* <a href="/images/myw3schoolsimage.jpg" download></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;