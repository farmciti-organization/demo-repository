import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import FarmCard from "./FarmCard";
import "../../assets/stylesheets/TopEvent.css";
import img6 from "../../components/sample/img/img6.png";
import img7 from "../../components/sample/img/img7.png";
import img8 from "../../components/sample/img/img8.png";
import img9 from "../../components/sample/img/img9.png";
import img4 from "../../components/sample/img/image.png";
import img5 from "../../components/sample/img/strawberry.jpg";

// Mock data based on the images in your example
const eventsData = [
  {
    id: 1,
    title: "Downey's Farm",
    location: "",
    imageUrl: img6
  },
  {
    id: 2,
    title: "Riverdale Farm",
    location: "",
    imageUrl: img7
  },
  {
    id: 3,
    title: "Chudlelgh's Farm",
    location: "",
    imageUrl: img8
  },
  {
    id: 4,
    title: "Springridege Farm",
    location: "",
    imageUrl: img9
  },
  {
    id: 5,
    title: "Farm Tour",
    location: "",
    imageUrl: img4
  },
  {
    id: 6,
    title: "Strawberry Picking",
    location: "",
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
          <h2 className="events-title">Discover Farms Near You</h2>
          <p className="events-subtitle">
            Explore hidden gems just around the corner from you
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
