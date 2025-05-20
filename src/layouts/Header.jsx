import { useState } from "react";
import { useEffect } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../assets/stylesheets/Header.css";
import {
  Animals,
  Experience,
  FamilyFriendly,
  FarmStay,
  FarmersMarket,
  Festival,
  PYOFarms,
  Wedding,
  Winery
} from "../components/sample/CategoryIcon";
import { Logo } from "../components/sample/Logo";

const TikTok = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6 5.82C15.9 5.06 15.5 4.08 15.5 3H12.4V16.94C12.4 18.6797 11.0797 20 9.34 20C7.6003 20 6.28 18.6797 6.28 16.94C6.28 15.2003 7.6003 13.88 9.34 13.88C9.89 13.88 10.41 14.04 10.86 14.3V11.03C10.36 10.92 9.84 10.87 9.32 10.87C6.04 10.87 3.38 13.54 3.38 16.81C3.38 20.08 6.04 22.75 9.32 22.75C12.6 22.75 15.26 20.08 15.26 16.81V9.66C16.45 10.56 17.91 11.09 19.46 11.09V8C19.46 8 17.75 8.11 16.6 5.82Z"
      fill="currentColor"
    />
  </svg>
);

// categoryIcons data
const categoryIcons = [
  { id: 0, name: "Farm Stay", icon: FarmStay, alt: "FarmStay icon" },
  {
    id: 1,
    name: "Animals",
    icon: Animals,
    alt: "Animals icon"
  },
  {
    id: 2,
    name: "Experience",
    icon: Experience,
    alt: "Experience icon"
  },
  {
    id: 4,
    name: "Family Friendly",
    icon: FamilyFriendly,
    alt: "FamilyFriendly icon"
  },
  {
    id: 6,
    name: "Farmers Market",
    icon: FarmersMarket,
    alt: "FarmersMarket icon"
  },
  {
    id: 7,
    name: "Festival",
    icon: Festival,
    alt: "Festival icon"
  },
  {
    id: 8,
    name: "PYO Farms",
    icon: PYOFarms,
    alt: "PYOFarms icon"
  },
  {
    id: 9,
    name: "Wedding",
    icon: Wedding,
    alt: "Wedding icon"
  },
  {
    id: 10,
    name: "Winery",
    icon: Winery,
    alt: "Winery icon"
  }
];

export default function Header() {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const iconsToShow = 7;

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, categoryIcons.length - iconsToShow)
    );
  };

  const handleCategoryClick = (id) => navigate(`/category/${id}`);


  const visibleIcons = categoryIcons.slice(
    startIndex,
    startIndex + iconsToShow
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-top">
          <div className="logo-container">
            <a href="/" className="logo-link">
              <Logo className="logo" aria-label="FarmCiti Logo" />
            </a>
          </div>
          <div className="header-tagline">Discover Farms, Create Memories</div>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="TikTok">
              <TikTok size={20} />
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <nav className="category-nav">
          <button
            className={`nav-arrow ${startIndex === 0 ? "disabled" : ""}`}
            onClick={handlePrevious}
            disabled={startIndex === 0}
            aria-label="Previous categories"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="category-icons">
            {visibleIcons.map(cat => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="category-item cursor-pointer"
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <div className="category-icon-container">
                    <Icon className="category-icon" width={24} height={24} aria-label={cat.name} />
                  </div>
                  <span className="category-icon-text text-gray-600">
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            className={`nav-arrow ${startIndex >= categoryIcons.length - iconsToShow ? "disabled" : ""}`}
            onClick={handleNext}
            disabled={startIndex >= categoryIcons.length - iconsToShow}
            aria-label="Next categories"
          >
            <ChevronRight size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
