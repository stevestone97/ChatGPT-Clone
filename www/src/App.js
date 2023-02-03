import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import "./normal.css";

import ChatMessage from "./components/ChatMessage";
import StaticSection from "./components/StaticSection";
import LoginButton from "./components/LoginButton";
import Form from "./components/Form";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [lightMode, setLightMode] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    let chatLogNew = [
      ...chatLog,
      { user: `${user.name}`, message: `${input}`, time: `${timeString}` },
    ];
    setInput("");
    setChatLog(chatLogNew);

    const messages = chatLogNew.map((message) => message.message).join("\n");
    const response = await fetch("http://localhost:3080/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
      }),
    });

    const data = await response.json();
    setChatLog([
      ...chatLogNew,
      { user: "gpt", message: `${data.message}`, time: `${timeString}` },
    ]);
  }

  const changeTheme = () => {
    setLightMode(!lightMode);
  };

  if (isAuthenticated) {
    return (
      <div
        className="App"
        style={
          lightMode
            ? { backgroundColor: "#ffffff" }
            : { backgroundColor: "#282c34" }
        }
      >
        <aside className="sidemenu">
          <div className="side-menu-button">
            <span>+</span> New Chat
          </div>
          <StaticSection
            setChatLog={setChatLog}
            changeTheme={changeTheme}
            lightMode={lightMode}
          />
        </aside>
        <section
          className="chatBox"
          style={
            lightMode
              ? { backgroundColor: "#F0F3F5" }
              : { backgroundColor: "#343541" }
          }
        >
          <div
            className="chat-log"
            style={
              lightMode
                ? { backgroundColor: "#ffffff" }
                : { backgroundColor: "#282c34" }
            }
          >
            {chatLog.map((message, index) => (
              <ChatMessage
                key={index}
                message={message}
                user={user}
                lightMode={lightMode}
              />
            ))}
          </div>
          <Form
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            lightMode={lightMode}
          />
        </section>
      </div>
    );
  } else {
    return <LoginButton />;
  }
}

export default App;
