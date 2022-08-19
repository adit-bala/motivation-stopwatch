import React from "react";
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
      <div className="container flex">
        <div className="progress">
          <h3>Seconds</h3>
        </div>
        <div className="progress">
          <h3>Minutes</h3>
        </div>
        <div className="progress">
          <h3>Hours</h3>
        </div>
        <div className="progress">
          <h3>Days</h3>
        </div>
      </div>
      <div className="container flex">
        <div className="progress">
          <h3>Weeks</h3>
        </div>
        <div className="progress">
          <h3>Months</h3>
        </div>
        <div className="progress">
          <h3>Years</h3>
        </div>
      </div>
      <div> [insert clock] </div>
      <footer>
        <p>
          {" "}
          Inspired by <a href="https://github.com/jakealbaugh">
            @jakealbaugh
          </a>{" "}
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
