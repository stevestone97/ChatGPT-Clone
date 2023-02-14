import React from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Dropdown from 'react-dropdown';
import Slider from 'rc-slider';
import 'react-dropdown/style.css';
import 'rc-slider/assets/index.css';
import { Tooltip } from 'react-tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle, faSun } from '@fortawesome/free-regular-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

import ModelDescrption from "./ModelDescription";
import ReactDOMServer from 'react-dom/server';

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


  const tempretureToolTip = "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic an repetitive."

  return (
    <aside className="sidemenu">
      <div className="side-menu-user">
        <img className="side-menu-user-avatar" src={user.picture} alt="avatar" />
        <p className="side-menu-user-user">{user.name}</p>
      </div>
      <div className="side-menu-button" >
        <span>+</span> New Chat
      </div>
      <div className="sideMenu-container">
        <div className="tooltip-container">
          <div className="text-model">Model</div>
          <FontAwesomeIcon id="model" data-tooltip-html={ReactDOMServer.renderToString(<ModelDescrption model={Model} />)} className="tooltip" icon={faQuestionCircle} />
          <Tooltip className="tooltip-text" anchorId="model" />
        </div>
        <Dropdown
          options={options}
          value={Model}
          onChange={(value) => setModel(value.value)}
          placeholder="Select an option" />
      </div>
      <div className="sideMenu-container">
        <div className="slider-text-container">
          <div className="tooltip-container">
            <div className="text-model">Tempreture</div>
            <FontAwesomeIcon id="tempreture" data-tooltip-html={ReactDOMServer.renderToString(<ModelDescrption tempreture={true} />)} className="tooltip" icon={faQuestionCircle} />
            <Tooltip className="tooltip-text" anchorId="tempreture" />
          </div>
          <div>{tempreture}</div>
        </div>
        <Slider value={tempreture * 100} min={0} max={100} onChange={(value) => setTempreture(value / 100)} />
      </div>
      <div className="sideMenu-container">
        <div className="slider-text-container">
          <div className="tooltip-container">
            <div className="text-model">Max Tokens</div>
            <FontAwesomeIcon id="tokens" data-tooltip-html={ReactDOMServer.renderToString(<ModelDescrption maxTokens={true} />)} className="tooltip" icon={faQuestionCircle} />
            <Tooltip className="tooltip-text" anchorId="tokens" />
          </div>
          <div>{maxTokens}</div>
        </div>
        <Slider value={maxTokens} min={0} max={4000} onChange={(value) => setMaxTokens(value)} />
      </div>
      <div className="button-holder">
        <span className="separator"></span>
        <div className="button" onClick={changeTheme}>
          <FontAwesomeIcon className="icon" icon={faSun} />
          {lightMode ? "Dark Mode" : "Light Mode"}
        </div>
        <div className="button">
          <FontAwesomeIcon className="icon" icon={faDiscord} />
          <a
            href="https://discord.gg/g4QYj4N"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAI Discord
          </a>
        </div>
        <div className="button">
          <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
          <a
            href="https://chatgpt.com/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Updates & FAQ
          </a>
        </div>
        {isAuthenticated && (
          <div className="button" onClick={handelLogout}>
            <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
            Log out
          </div>
        )}
      </div>
    </aside>

  );
}
