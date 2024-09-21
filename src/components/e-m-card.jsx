import "../index.css";
import React from "react";
import Event from "/src/component/events"

function EMCard({ date }) {
  return (
    <>
      <div>
        <p>{date}</p>
        <Event
           date=""
          title=""
          location=""
          topic=""
          summary="" 
          button=""
          />
      </div>
    </>
  );
}
export default EMCard;
