import React from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function StaticSection({
  setChatLog,
  changeTheme,
  lightMode,
  tempreture, setTempreture,
  maxTokens, setMaxTokens,
  Model, setModel,
  user }) {

  const { isAuthenticated, logout } = useAuth0();
  const handelLogout = () => {
    setChatLog([]);
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const options = ["text-davinci-003",
    "text-curie-001",
    "text-babbage-001",
    "text-ada-001"]

  return (
    <aside className="sidemenu">
      <div className="side-menu-user">
        <img className="side-menu-user-avatar" src={user.picture} alt="avatar" />
        <p className="side-menu-user-user">{user.name}</p>
      </div>

      <div className="side-menu-button">
        <span>+</span> New Chat
      </div>
      <div className="sideMenu-container">
        <div className="text-model">Model</div>
        <Dropdown
          options={options}
          value={Model}
          onChange={(value) => setModel(value.value)}
          placeholder="Select an option" />
      </div>
      <div className="sideMenu-container">
        <div className="slider-text-container">
          <div className="text-model">Tempreture</div>
          <div>{tempreture}</div>
        </div>
        <Slider value={tempreture * 100} min={0} max={100} onChange={(value) => setTempreture(value / 100)} />
      </div>
      <div className="sideMenu-container">
        <div className="slider-text-container">
          <div className="text-model">Max Tokens</div>
          <div>{maxTokens}</div>
        </div>
        <Slider value={maxTokens} min={0} max={4000} onChange={(value) => setMaxTokens(value)} />
      </div>
      <div className="button-holder">
        <span className="separator"></span>
        <div className="button" onClick={changeTheme}>
          {lightMode ? "Dark Mode" : "Light Mode"}
        </div>
        <a
          className="button"
          href="https://discord.gg/g4QYj4N"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenAI Discord
        </a>
        <a
          className="button"
          href="https://chatgpt.com/faq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Updates & FAQ
        </a>
        {isAuthenticated && (
          <div className="button" onClick={handelLogout}>
            Log out
          </div>
        )}
      </div>
    </aside>

  );
}
