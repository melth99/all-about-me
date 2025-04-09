// Image paths
const github = '/github.png'

export default function ThisPortfolio() {
    return (
        <div className="this-portfolio">
            <h1>Check out this Portfolio!</h1>
            <div className="project-links">
                <a href="https://github.com/melth99/all-about-me" className="project-link" rel="noopener noreferrer">
                    <img className="link-logo" src={github} alt="GitHub" />
                    <span>GitHub</span>
                </a>

            </div>
        </div>
    )
}