import React, { useState, useEffect } from "react";
import Clock from "../components/Clock";
import "../styles/main.css";

export default function Main() {
  return (
    <>
      <header className="container">
        <h1> it is time. </h1>
        <p>
          <a href="https://github.com/adit-bala">adit bala </a>
          is motivating himself to improve his life. this is helping him along
          the way.
        </p>
      </header>
      <Clock />
      <footer>
        <p>
          {" "}
          Heavily inspired by{" "}
          <a href="https://github.com/jakealbaugh">@jakealbaugh</a>{" "}
        </p>
        <p> Special shoutout to my friend Oatmeal Olimar </p>
        <p>
          <small>
            <a href="https://github.com/adit-bala/motivation-timer">GitHub</a>
          </small>
        </p>
      </footer>
    </>
  );
}
