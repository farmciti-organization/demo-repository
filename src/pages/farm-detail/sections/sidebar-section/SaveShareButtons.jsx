import React, { useState } from "react";
import { SaveIcon } from "../../../../components/sample/SaveIcon";
import styles from "./SaveShareButtons.module.css";

export default function SaveFarmCard() {
  const [saved, setSaved] = useState(false);

  return (
    <div className={styles["save-card"]}>
      <p className={styles["save-title"]}>View Products</p>
      <button
        className={`
          ${styles["save-btn"]} 
          ${saved ? styles["is-saved"] : ""}
        `}
        onClick={() => setSaved((s) => !s)}
        aria-pressed={saved}
      >
        {/* <SaveIcon
          className={styles["save-icon"]}
          aria-label={saved ? "Saved" : "Save"}
        /> */}
        <span className={styles["save-btn-title"]}>
          {/* {saved ? "Saved" : "Save"} */}
          Visit Farm Store
        </span>
      </button>
    </div>
  );
}
