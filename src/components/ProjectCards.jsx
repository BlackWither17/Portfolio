import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// ── Add your projects here ──────────────────────────────────────────────────
// logo: path to an image in public/ (e.g. '/static/images/myproject.png')
//        or null to use the icon emoji instead
const PROJECTS = [
    {
        title: 'Wolvesville',
        logo: '/static/images/wolvesville.png',
        icon: '🐺',
        description: 'Online social deduction game about werewolves for up to 16 players. Available on mobile and PC!',
        tags: [],
        github: null,
        live: 'https://www.wolvesville.com',
    },
    {
        title: 'Wolvesville.js',
        logo: null,
        icon: '🐺',
        description: 'The JavaScript library for interacting with the Wolvesville API.',
        tags: ['JavaScript', 'Node.js'],
        github: 'https://github.com/wolvesvillejs/wolvesville.js',
        live: 'https://wolvesville.js.org/#/',
    },
];
// ───────────────────────────────────────────────────────────────────────────

export default function ProjectCards() {
    return (
        <section className="projects-section">
            <p className="projects-label">Coding Projects</p>
            <div className="projects-grid">
                {PROJECTS.map((project, i) => (
                    <div
                        key={project.title}
                        className="flip-card"
                        style={{ '--card-delay': `${i * 130}ms` }}
                    >
                        <div className="flip-card-inner">
                            {/* ── Front ── */}
                            <div className="flip-card-front">
                                <div className="flip-front-glow" />
                                {project.logo ? (
                                    <img
                                        src={project.logo}
                                        alt={project.title}
                                        className="flip-front-logo"
                                    />
                                ) : (
                                    <span className="flip-front-icon">{project.icon}</span>
                                )}
                                <h3 className="flip-front-title">{project.title}</h3>
                                <span className="flip-front-hint">hover to flip</span>
                            </div>

                            {/* ── Back ── */}
                            <div className="flip-card-back">
                                <div className="flip-back-header">
                                    <span className="flip-back-icon">{project.icon}</span>
                                    <div className="flip-back-links">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link-btn"
                                                aria-label="GitHub"
                                                onClick={e => e.stopPropagation()}
                                            >
                                                <GitHubIcon sx={{ fontSize: '0.95rem' }} />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link-btn"
                                                aria-label="Live site"
                                                onClick={e => e.stopPropagation()}
                                            >
                                                <OpenInNewIcon sx={{ fontSize: '0.95rem' }} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <h3 className="flip-back-title">{project.title}</h3>
                                <p className="flip-back-description">{project.description}</p>
                                {project.tags.length > 0 && (
                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
