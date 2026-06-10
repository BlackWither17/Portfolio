// Paste your playlist ID here — grab it from the Spotify URL:
// https://open.spotify.com/playlist/THIS_PART_IS_THE_ID
const SPOTIFY_PLAYLIST_ID = '4GhyUED7PErLkUHdEZQacM';

export default function MusicPlayerSlider() {
    return (
        <iframe
            style={{ borderRadius: '12px', display: 'block' }}
            src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
        />
    );
}
