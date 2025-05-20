import React from "react";
import PropTypes from "prop-types";
import "../../assets/stylesheets/FarmCard.css";

export default function EventCard({ event, onClick }) {
  return (
    <div className="event-card" onClick={onClick}>
      <div className="event-card-image-container">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="event-card-image"
        />
      </div>
      <h3 className="event-card-title">{event.title}</h3>
      <p className="event-card-location">{event.location}</p>
    </div>
  );
}
