import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FarmCard from "../../components/farm/FarmCard";
import img0 from "../../components/sample/img/image-3.png";
import img1 from "../../components/sample/img/image.png";
import img2 from "../../components/sample/img/image-1.png";
import img3 from "../../components/sample/img/image-2.png";
import img4 from "../../components/sample/img/img13.png";
import img5 from "../../components/sample/img/strawberry.jpg";
import img7 from "../../components/sample/img/img07.png";
import img8 from "../../components/sample/img/img08.png";
import img9 from "../../components/sample/img/img09.png";
import img10 from "../../components/sample/img/img10.png";
import img11 from "../../components/sample/img/img11.png";
import img12 from "../../components/sample/img/img12.png";
import "../../assets/stylesheets/farm-list/FarmListPage.css";
import GoogleMapComponent from "../../components/common/map/GoogleMap";

const farmList = [
  {
    id: 1,
    title: "Tulip Festival",
    location: "TASC Tulip Pick Farm",
    imageUrl: img0
  },
  {
    id: 2,
    title: "Spring Days",
    location: "Pingle's Farm Market",
    imageUrl: img1
  },
  {
    id: 3,
    title: "Easter Festival",
    location: "Kustermans Adventure Farm",
    imageUrl: img2
  },
  {
    id: 4,
    title: "Easter Egg Hunt",
    location: "Erin Hill Acres",
    imageUrl: img3
  },
  {
    id: 5,
    title: "Farm Tour",
    location: "Green Valley Farm",
    imageUrl: img4
  },
  {
    id: 6,
    title: "Strawberry Picking",
    location: "Berry Good Farms",
    imageUrl: img5
  },
    {
    id: 7,
    title: "Tulip Festival",
    location: "TASC Tulip Pick Farm",
    imageUrl: img7
  },
  {
    id: 8,
    title: "Spring Days",
    location: "Pingle's Farm Market",
    imageUrl: img8
  },
  {
    id: 9,
    title: "Easter Festival",
    location: "Kustermans Adventure Farm",
    imageUrl: img9
  },
  {
    id: 10,
    title: "Easter Egg Hunt",
    location: "Erin Hill Acres",
    imageUrl: img10
  },
  {
    id: 11,
    title: "Farm Tour",
    location: "Green Valley Farm",
    imageUrl: img11
  },
  {
    id: 12,
    title: "Strawberry Picking",
    location: "Berry Good Farms",
    imageUrl: img12
  }
];

const farmListMap = [
  { id: 1, name: "Tulip Festival",        lat:43.9125, lng:-78.8586 },
  { id: 2, name: "Spring Days",        lat:43.7925, lng:-79.8740 },
  { id: 3, name: "Easter Festival",     lat:43.5183, lng:-79.8770 },
  { id: 4, name: "Easter Egg Hunt",lat:43.0487, lng:-79.3525 },
  { id: 5, name: "Farm Tour",     lat:43.7000, lng:-79.6500 },
];

export default function FarmList() {
  const navigate = useNavigate();
  const [map, setMap] = useState(null); 
  const markers = farmListMap.map(f => ({
    id:       f.id,
    position: { lat: f.lat, lng: f.lng },
    label:    f.name
  }));
  
  console.log(markers)

  return (
    <section className="list-Section">
      <div className="list-container">
        <h1 className="list-title">Farm Stay</h1>

        <div className="list-main">
          {/* card grid */}
          <div className="list-card-container">
            {farmList.map(farm => (
              <FarmCard
                key={farm.id}
                event={farm}
                onClick={() => navigate(`/farm/${farm.id}`)}
              />
            ))}
          </div>
           <div className="list-map-container">
            <div className="list-map-img">
              <GoogleMapComponent
                markers={markers}
                onLoad={setMap}
                mapContainerStyle={{ height: "700px" }}  
              />
    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
