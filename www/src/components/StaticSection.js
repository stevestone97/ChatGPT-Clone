import React from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function StaticSection({ setChatLog, changeTheme, lightMode }) {
  const { isAuthenticated, logout } = useAuth0();

  const handelLogout = () => {
    setChatLog([]);
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
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
  );
}
