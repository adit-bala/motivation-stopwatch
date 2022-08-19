import React from "react";

export default function StopWatch({ metric, seconds, fraction }) {
  const value = seconds / fraction;
  const complete = Math.floor(value);
  let v = complete.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (complete < 10) v = value.toFixed(2);
  if (complete < 1) v = value.toFixed(3);
  return (
    <div className="progress">
      <h2> {v} </h2>
      <h3>{metric}</h3>
    </div>
  );
}
