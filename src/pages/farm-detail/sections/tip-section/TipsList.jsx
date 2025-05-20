import React, { useState } from "react";
import {TipListIcon} from "../../../../components/sample/TipListIcon";
import "../../../../assets/stylesheets/farm-detail/tip-section/TipsList.css";

export default function TipList() {
  const tips = [
    "No outside food brought in",
    "All Season Operating",
    "Horse-Drawn Wagon Rides: Weekends only, from 10am–4pm."
  ];

  return (
    <section className="tip-list-section">
      <div className ="tip-list-container">
        <div className="tip-list-content">
          <div className="tip-list-box">
            <h3 className="tip-list-main">Tips for the Farm</h3>
          </div>
          <div className="tip-list-items">
            {tips.map((text, i) => (
              <div key={i} className="tip-row">
                <TipListIcon className="tip-list-icon" aria-label="Tip Icon" />
                <span className="tip-list-title">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
