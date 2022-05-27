import React from "react";
import "./TimelineEvent.scss";
const TimelineEvent = ({ position = "right", icon, description }) => {
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
          <img alt="event" width={30} src={icon}></img>
        </div>
        <div
          className={
            position === "left"
              ? "event_description event_left"
              : "event_description"
          }
        >
          <h4 className="event_title">{description?.title}</h4>
          <p className="event_desc">{description?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
