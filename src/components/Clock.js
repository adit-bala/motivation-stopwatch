import React, { useState, useEffect } from "react";
import StopWatch from "../components/StopWatch";
import "../styles/clock.css";

export default function Clock() {
  const start = 1660881600000; // new Date(2022, 7, 19)
  const [time, setTime] = useState(0);
  setInterval(() => {
    setTime((new Date().getTime() - start) / 1000);
  }, 1000);
  return (
    <>
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
    </>
  );
}
