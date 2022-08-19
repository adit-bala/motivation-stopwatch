import React, { useState, useEffect } from "react";
import StopWatch from "../components/StopWatch";
import "../styles/main.css";

export default function Main() {
  const start = 1660881600000; // new Date(2022, 7, 19)
  const [time, setTime] = useState(0);
  setInterval(() => {
    setTime((new Date().getTime() - start) / 1000);
  }, 1000);
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
        <StopWatch metric="Seconds" seconds={time} fraction={1} />
        <StopWatch metric="Minutes" seconds={time} fraction={60} />
        <StopWatch metric="Hours" seconds={time} fraction={3600} />
        <StopWatch metric="Days" seconds={time} fraction={86400} />
      </div>
      <div className="container flex">
        <StopWatch metric="Weeks" seconds={time} fraction={604800} />
        <StopWatch metric="Months" seconds={time} fraction={2592000} />
        <StopWatch metric="Years" seconds={time} fraction={31556952} />
      </div>
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
