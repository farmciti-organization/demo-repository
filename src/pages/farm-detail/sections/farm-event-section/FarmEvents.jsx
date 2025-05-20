import React from "react";
import "../../../../assets/stylesheets/farm-detail/farm-event-section/FarmEvents.css";
import FarmCard from "../../../../components/farm/FarmCard";
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";


const events = [
  {
    imageUrl: "/assets-temp/sample/event01.png",
    title: "Pingle's Farm Market",
    location: "Farm Events",
    date: "March 26th – April 24"
  },
  {
    imageUrl: "/assets-temp/sample/event02.png",
    title: "Downey's Farm",
    location: "Farm Events",
    date: "April 30th – June 2nd"
  },
];

const FarmEvents = () => {
  return (
    <section className="events-section">
      <div className="events-container">
        <div className="events-content">
          {/* header */}
          <div className="events-box">
            <h2 className="events-title">What’s Poppin’ on the Farm</h2>
            <div className="events-nav">
              <button className="nav-button">   <ChevronLeft size={20} /></button>
              <button className="nav-button"><ChevronRight size={20} /></button>
            </div>
          </div>

          {/* card list */}
          <div className="events-card-list">
            {events.map((evt, i) => (
              <FarmCard key={i} event={evt} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FarmEvents;
