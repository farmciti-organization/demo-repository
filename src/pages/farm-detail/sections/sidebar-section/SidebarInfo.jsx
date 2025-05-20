import React, { useState, useLayoutEffect } from "react";
import SaveFarmCard from "./SaveShareButtons";
import OperatingHours from "./OperatingHours";
import styles from "./SidebarInfo.module.css";

export default function FarmSidebarInfo() {
  return (
    <aside className={styles["sidebar-section"]}>
      <SaveFarmCard />
      <OperatingHours />
    </aside>
  );
}
