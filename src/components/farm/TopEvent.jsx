import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import FarmCard from "./FarmCard";
import "../../assets/stylesheets/TopEvent.css";
import img0 from "../../components/sample/img/image-3.png";
import img1 from "../../components/sample/img/image.png";
import img2 from "../../components/sample/img/image-1.png";
import img3 from "../../components/sample/img/image-2.png";
import img4 from "../../components/sample/img/image.png";
import img5 from "../../components/sample/img/strawberry.jpg";

// Mock data based on the images in your example
const eventsData = [
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
    title: "Test",
    location: "Berry Good Farms",
    imageUrl: img5
  }
];

export default function TopEventsCarousel() {
  const navigate = useNavigate();

  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4;

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, eventsData.length - cardsToShow)
    );
  };

  const translateXPercent = -(100 / cardsToShow) * startIndex;

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="events-header">
          <h2 className="events-title">This Week's Top Events</h2>
          <p className="events-subtitle">
            This week's most viewed and buzzed-about farm experiences
          </p>
        </div>

        <div className="events-carousel-wrapper">
          <div className="events-carousel-window">
            <div
              className="events-carousel-inner"
              style={{
                transform: `translateX(${translateXPercent}%)`
              }}
            >
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/farm/${event.id}`)}
                >
                  <FarmCard event={event} />
                </div>
              ))}
            </div>
          </div>

          <button
            className={`carousel-nav-button carousel-prev ${
              startIndex === 0 ? "disabled" : ""
            }`}
            onClick={handlePrevious}
            disabled={startIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className={`carousel-nav-button carousel-next ${
              startIndex >= eventsData.length - cardsToShow ? "disabled" : ""
            }`}
            onClick={handleNext}
            disabled={startIndex >= eventsData.length - cardsToShow}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
