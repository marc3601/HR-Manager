import React from "react";
import TimelineEvent from "../components/TimelineEvent";
import ViewHeader from "../components/ViewHeader";
import "./Timeline.scss";
//icons
import contract from "../assets/contract.png";
import paid_leave from "../assets/sunbed.png";
import free from "../assets/free.png";
import hospital from "../assets/hospital.png";
const Timeline = () => {
  const eventTypes = [
    {
      title: "Zatrudnienie",
      icon: contract,
    },
    {
      title: "Urlop wypoczynkowy",
      desc: "Smth here",
      icon: paid_leave,
    },
    {
      title: "Urlop bezpłatny",
      desc: "Smth here",
      icon: free,
    },
    {
      title: "Chorobowe",
      desc: "Smth here",
      icon: hospital,
    },
    {
      title: "Zwolnienie",
      icon: contract,
    },
  ];
  return (
    <div className="timeline_container">
      <ViewHeader title="Historia pracownika" />
      <h3 className="timeline_employee">Pracownik: John Doe</h3>
      <div className="timeline_section">
        <div className="timeline_axis">
          <div className="top_dot"></div>
          {eventTypes.map((item, i) => (
            <TimelineEvent
              key={`${i}e`}
              position={(i + 1) % 2 === 0 ? "left" : "right"}
              icon={item.icon}
              description={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
