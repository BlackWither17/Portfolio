import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './LeoCrew.css';

// ── The Leo multiverse ──────────────────────────────────────────────────────
// Every variant that has ever been spotted in the wild. Add new sightings here.
const LEOS = [
    {
        id: 'original',
        name: 'Prime Leo',
        tagline: 'The one that started it all',
        image: '/static/images/leo/leo-original.png',
        emoji: '😇',
        era: 'Origin',
        accent: '#f57f00',
        story:
            'Before the multiverse cracked open, there was just Leo: blonde, hooded, ' +
            'permanently mid-thought. Someone once slapped a pair of angel wings on his ' +
            'profile picture as a joke and he never took them off. That was the moment the ' +
            'crew realised he could be anything — and immediately started making sure he was.',
        stats: [
            { label: 'Halo integrity', value: 'questionable' },
            { label: 'Wing span', value: '2 pixels short' },
        ],
    },
    {
        id: 'dino',
        name: 'Dino Leo',
        tagline: 'Cretaceous field sketch, ca. 1890',
        image: '/static/images/leo/leo-dino.png',
        emoji: '🦕',
        era: 'Prehistoric',
        accent: '#c98d4b',
        story:
            'The first fossil evidence of the Leo lineage. Discovered in a dusty notebook, ' +
            'drawn in coloured pencil by a Victorian naturalist who could not explain why ' +
            'the specimen had a perfect blonde haircut. His paper was rejected three times. ' +
            'He was right all along.',
        stats: [
            { label: 'Species', value: 'Leosaurus vulgaris' },
            { label: 'Hair', value: 'scientifically impossible' },
        ],
    },
    {
        id: 'dino-2',
        name: 'Dino Leo II',
        tagline: 'The remaster nobody asked for',
        image: '/static/images/leo/leo-dino-2.png',
        emoji: '🌌',
        era: 'Prehistoric · Remastered',
        accent: '#4fc3f7',
        story:
            'Same dinosaur, 65 million years of shader upgrades. Dino Leo II crawled out of ' +
            'the fossil record with neon scales, a starfield behind him and the smug little ' +
            'grin of someone who knows he is the better-looking version. The two Dino Leos ' +
            'have not spoken since.',
        stats: [
            { label: 'Polygon count', value: 'way up' },
            { label: 'Beef with Dino Leo I', value: 'ongoing' },
        ],
    },
    {
        id: 'phoenix',
        name: 'Phoenix Leo',
        tagline: 'Dies. Comes back. Dies again. Comes back.',
        image: '/static/images/leo/leo-phoenix.png',
        emoji: '🔥',
        era: 'Eternal',
        accent: '#ff6b1a',
        story:
            'Phoenix Leo was born the first time the group chat got so unhinged it had to be ' +
            'deleted. Out of the ashes he rose, feathers blazing, ready to start it all again ' +
            'from scratch. He has burned down and resurrected at least four servers. Nobody ' +
            'has the heart to tell him the fire alarm is because of him.',
        stats: [
            { label: 'Recorded deaths', value: '∞' },
            { label: 'Recorded comebacks', value: '∞ + 1' },
        ],
    },
    {
        id: 'giraffe',
        name: 'Giraffe Leo',
        tagline: 'Standing taller than the joke deserved',
        image: '/static/images/leo/leo-giraffe.png',
        emoji: '🦒',
        era: 'Cursed',
        accent: '#e0b84c',
        story:
            'It started as one bad edit: the head stretched, the neck kept going, nobody ' +
            'stopped it. Giraffe Leo now looks down on the entire crew — literally and, if ' +
            'you ask him, morally. He still wears the wings. He still wears the hoodie. He ' +
            'simply has more of himself in between them.',
        stats: [
            { label: 'Neck', value: 'yes' },
            { label: 'Regrets', value: 'none' },
        ],
    },
    {
        id: 'business',
        name: 'Business Leo',
        tagline: 'Has a meeting. The meeting is about you.',
        image: '/static/images/leo/leo-business.png',
        emoji: '💼',
        era: 'Corporate',
        accent: '#7f9cc4',
        story:
            'Somewhere along the way one Leo put on a suit and never came back. Business Leo ' +
            'runs the multiverse like a quarterly review: arms crossed, tie straight, ' +
            'patience thin. He is the only variant who files the paperwork after Phoenix Leo ' +
            'sets something on fire, and he will not let anyone forget it.',
        stats: [
            { label: 'Synergy', value: 'maximised' },
            { label: 'Unread emails', value: '4,812' },
        ],
    },
];
// ───────────────────────────────────────────────────────────────────────────

export default function LeoCrew() {
    const [active, setActive] = useState(null);
    const activeLeo = LEOS.find(leo => leo.id === active) ?? null;

    useEffect(() => {
        if (!activeLeo) return;
        const onKeyDown = e => { if (e.key === 'Escape') setActive(null); };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeLeo]);

    return (
        <div className="leo-page">
            <Link to="/" className="leo-back">← back to portfolio</Link>

            <header className="leo-hero">
                <p className="leo-kicker">A field guide to one friend</p>
                <h1 className="leo-title">
                    The <span>Leo</span> Crew
                </h1>
                <p className="leo-intro">
                    There is exactly one Leo. There are also, somehow, six of him. This is the
                    archive of every variant we have managed to document so far — what he became,
                    and how it happened. Tap a Leo to see him full size.
                </p>
                <div className="leo-counter">
                    <span className="leo-counter-num">{LEOS.length}</span>
                    <span className="leo-counter-label">confirmed sightings</span>
                </div>
            </header>

            <main className="leo-grid">
                {LEOS.map((leo, i) => (
                    <button
                        type="button"
                        key={leo.id}
                        className="leo-card"
                        style={{ '--leo-accent': leo.accent, '--leo-delay': `${i * 90}ms` }}
                        onClick={() => setActive(leo.id)}
                        aria-label={`Open ${leo.name} full size`}
                    >
                        <div className="leo-card-media">
                            <img src={leo.image} alt={leo.name} loading="lazy" />
                            <span className="leo-card-era">{leo.era}</span>
                        </div>
                        <div className="leo-card-body">
                            <h2 className="leo-card-name">
                                <span aria-hidden="true">{leo.emoji}</span> {leo.name}
                            </h2>
                            <p className="leo-card-tagline">{leo.tagline}</p>
                            <p className="leo-card-story">{leo.story}</p>
                            <dl className="leo-stats">
                                {leo.stats.map(stat => (
                                    <div key={stat.label} className="leo-stat">
                                        <dt>{stat.label}</dt>
                                        <dd>{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <span className="leo-card-cue">view full size</span>
                    </button>
                ))}
            </main>

            <footer className="leo-footer">
                <p>More Leos are discovered all the time. This page will grow.</p>
            </footer>

            {activeLeo && (
                <div
                    className="leo-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeLeo.name}
                    onClick={() => setActive(null)}
                >
                    <figure
                        className="leo-lightbox-inner"
                        style={{ '--leo-accent': activeLeo.accent }}
                        onClick={e => e.stopPropagation()}
                    >
                        <img src={activeLeo.image} alt={activeLeo.name} />
                        <figcaption>
                            <strong>{activeLeo.name}</strong>
                            <span>{activeLeo.tagline}</span>
                        </figcaption>
                        <button
                            type="button"
                            className="leo-lightbox-close"
                            onClick={() => setActive(null)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                    </figure>
                </div>
            )}
        </div>
    );
}
