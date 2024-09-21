import "../index.css";
import React from "react";

function Event({ date, title, location, topic, summary, button }) {
  return (
    <>
      <div>
        <p>{date}</p>
        <h1>{title}</h1>
        <h2>{topic}</h2>
        <p>{summary}</p>
        <div>
          <p>{location}</p>
          <button>{button}</button>
        </div>
      </div>
    </>
  );
}
export default Event;
