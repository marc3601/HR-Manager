import React from "react";
import TimelineEvent from "../components/TimelineEvent";
import ViewHeader from "../components/ViewHeader";
import "./Timeline.scss";
const Timeline = () => {
  const events = [1, 2, 3, 4, 5, 6];
  return (
    <div className="timeline_container">
      <ViewHeader title="Historia pracownika" />
      <div className="timeline_section">
        <div className="timeline_axis">
          {events.map((item) => (
            <TimelineEvent
              key={item}
              position={item % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
