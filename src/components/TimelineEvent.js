import React from "react";
import "./TimelineEvent.scss";
import contract from "../assets/contract.png";
const TimelineEvent = ({ position = "right" }) => {
  return (
    <div className="timeline_event">
      <div
        className={position === "left" ? "event_line line_left" : "event_line"}
      >
        <div
          className={
            position === "left" ? "event_badge badge_left" : "event_badge"
          }
        >
          <img alt="event" width={30} src={contract}></img>
        </div>
        <div
          className={
            position === "left"
              ? "event_description event_left"
              : "event_description"
          }
        >
          <p>Event description</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
