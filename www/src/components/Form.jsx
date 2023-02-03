import React from "react";
import "../App.css";
import "../normal.css";

export default function Form({ input, setInput, handleSubmit, lightMode }) {
  return (
    <div className="chat-input-holder">
      <form onSubmit={handleSubmit}>
        <input
          className="chat-input-textarea"
          row="1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={
            lightMode
              ? { backgroundColor: "#ffffff", color: "black" }
              : { backgroundColor: "#40414f", color: "White" }
          }
        />
      </form>

      <p
        className="text-bottom"
        style={lightMode ? { color: "black" } : { color: "White" }}
      >
        Free Research: ChatGPT is optimized for dialogue. Our Goal is to make AI
        systems more natural to interact with, and your feedback will help us
        improve our systems and make the safer.
      </p>
    </div>
  );
}
