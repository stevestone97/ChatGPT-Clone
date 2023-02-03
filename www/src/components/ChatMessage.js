import React from "react";
import "../App.css";
import avatar from "../assets/ChatGPT.png";
import { TypeAnimation } from "react-type-animation";

export default function ChatMessage({ message, user, lightMode }) {
  return (
    <div
      className={`chat-message  ${message.user === "gpt" &&
        "chatgpt"} ${lightMode && message.user === "gpt" && "lightChatgpt"}`}
    >
      <div className="chat-message-center">
        <div className="center-div">
          <div
            className="time"
            style={lightMode ? { color: "black" } : { color: "white" }}
          >
            {message.time}
          </div>
          <img
            className="avatar"
            src={message.user === "gpt" ? avatar : user.picture} //user.picture
            alt="icon"
          />
        </div>
        {message.user !== "gpt" ? (
          <div
            className="message"
            style={lightMode ? { color: "black" } : { color: "white" }}
          >
            {message.message}
          </div>
        ) : (
          <TypeAnimation
            sequence={[message.message]}
            wrapper="div"
            speed={80}
            cursor={false}
            repeat={0}
            className="message"
            style={{ color: lightMode ? "black" : "white" }}
          />
        )}
      </div>
    </div>
  );
}
