import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ParticlesBg from "particles-bg";
import { TypeAnimation } from "react-type-animation";
import "../App.css";
import "../normal.css";

import AIImage from "../assets/AI.png";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="card-container">
      <ParticlesBg
        //color="#119B7B"
        //num={200}
        type="circle" // circle, cobweb
        bg={true}
      />
      <div className="signInCard">
        <img src={AIImage} alt="AIImage" className="loginImage" />
        <h3 className="txtLight">Modern Technology and innovation</h3>
        <TypeAnimation
          sequence={[
            "Welcome to the Chatbot", // Types 'text'
            1000, // Waits 1s
            "Welcome to Chatbot", // Deletes 'the' and correct text
            5000, // Waits 5s
            "", // Reset Text
          ]}
          wrapper="div"
          speed={50}
          cursor={true}
          repeat={Infinity}
          className="txtBold"
        />
        <p className="txtSignIn">
          This app is inspired by ChatGPT. ChatGPT is an AI-powered chatbot
          platform that helps businesses automate customer service, sales, and
          marketing conversations. It enables businesses to create custom
          chatbot experiences to engage customers and improve customer service.
        </p>
        <button className="btnSignIn" onClick={() => loginWithRedirect()}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
