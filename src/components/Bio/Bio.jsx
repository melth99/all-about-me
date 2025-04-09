import './Bio.css';

// Image paths
const meley = '/Meley.png';

function Bio() {
    return (
        <div className="bio-container">
            <div className="bio-header">
                <h1>meley haddis</h1>
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
                    <ul className="bio-text-list">
                        <h3> Interests:</h3>
                        <li>Fullstack Development</li>
                        <li>Back-End Development</li>
                        <li>Front-End Development</li>
                        <li>Finance</li>
                        <li>Electric Vehicles</li>
                    </ul>

                    <p>
                        Hi, I'm Meley Haddis and I have a BS in Materials Science from William and Mary. My professional background is in the electric vehicle (EV) charging industry, where I developed a strong interest in emerging technologies. In my most recent role, I interpreted EV to EV fast-charger interoperability across various hardware manufacturers on the vehicle and charging side.

                        I am a bootcamp graduate with a technical background and have been developing fullstack applications, specifically using Python, Node, Django, React, and PostgreSQL, and React.js. In addition to my developer skills, I enjoyed the hands-on experience of contributing to a rapidly evolving field and am now eager to explore similar opportunities in a new industry.

                        Uncountable would be a perfect fit for me, due to my technical experience and degree in Materials Science.
                    </p>

                    {/* <div className="resume-section">
                        <h2>Resume Download</h2>
                        <a href="/images/myw3schoolsimage.jpg" download></a> 
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Bio;