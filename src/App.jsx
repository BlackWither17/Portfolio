import './App.css'
import MusicPlayerSlider from "./components/Musicplayer.jsx";
import { Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaSnapchatGhost } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="avatar-container">
        <Avatar alt="Black_Wither" src="/static/images/logo-halloween.png" className="avatar" sx={{
          width: "6em",
          height: "6em"
        }} />
        <div className="identity">
          <h1>Black_Wither</h1>
          <div className="social-media">
            <a
              className="social-btn social-btn--github"
              href="https://github.com/BlackWither17"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (Opens in new tab)"
            >
              <GitHubIcon aria-hidden="true" fontSize="medium" />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              className="social-btn social-btn--instagram"
              href="https://instagram.com/Black_Wither17"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (Opens in new tab)"
            >
              <InstagramIcon aria-hidden="true" fontSize="medium" />
              <span className="sr-only">Instagram</span>
            </a>

            <a
              className="social-btn social-btn--snapchat"
              href="https://www.snapchat.com/add/black_wither80"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Snapchat (Opens in new tab)"
            >
              <FaSnapchatGhost aria-hidden="true" fontSize="1.3rem" />
              <span className="sr-only">Snapchat</span>
            </a>
          </div>
        </div>
      </div>
      <div className="music-player-container">
        <MusicPlayerSlider />
      </div>
    </>
  )
}

export default App
