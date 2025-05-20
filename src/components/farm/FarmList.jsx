// src/components/FarmCard.tsx
import React from "react";
import FarmCard from "./TopEvent";
import { Farm } from "../../api/farmApi";


const FarmList = ({ farms }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {farms.map((farm) => (
        <FarmCard key={farm.id} farm={farm} />
      ))}
    </div>
  );
};

export default FarmList;
