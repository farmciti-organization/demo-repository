import React from "react";
import styles from "./OperatingHours.module.css";

export default function OperatingHours() {
  const hours = [
    ["Monday", "10:00AM - 18:00PM"],
    ["Tuesday", "10:00AM - 18:00PM"],
    ["Wednesday", "10:00AM - 18:00PM"],
    ["Thursday", "10:00AM - 18:00PM"],
    ["Friday", "10:00AM - 18:00PM"],
    ["Saturday", "09:00AM - 18:00PM"],
    ["Sunday", "09:00AM - 18:00PM"],
  ];

  return (
    <div className={styles["hours-card"]}>
      <div className={styles["flex justify-between items-center mb-3"]}>
        <p className={styles["hours-title"]}>Hours</p>
        <span className={styles["hours-status"]}>Open now</span>
      </div>
      <hr className={styles["hours-divider"]} />
      <ul className={styles["hours-list"]}>
        {hours.map(([day, time]) => (
          <li key={day} className={styles["hours-item"]}>
            <span className={styles["hours-day"]}>{day}</span>
            <span className={styles["hours-time"]}>{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


