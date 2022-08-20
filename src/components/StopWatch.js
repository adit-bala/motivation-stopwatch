import React from "react";
import "../styles/clock.css";

export default function StopWatch({ metric, seconds, fraction }) {
  const value = seconds / fraction;
  const complete = Math.floor(value);
  let display = complete.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (complete < 10) display = value.toFixed(2);
  if (complete < 1) display = value.toFixed(3);
  return (
    <div className="progress">
      <h2> {display} </h2>
      <h3>{metric}</h3>
    </div>
  );
}
