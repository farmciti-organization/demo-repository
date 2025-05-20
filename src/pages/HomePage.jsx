import React, {useEffect} from "react";
import TopEvent from "../components/farm/TopEvent";
import Farm1 from "../components/farm/Farm1";
import Farm2 from "../components/farm/Farm2";
import Farm3 from "../components/farm/Farm3";
import Farm4 from "../components/farm/Farm4";
import useUserLocation from "../hooks/useUserLocation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../assets/stylesheets/FarmCard.css";
import "../assets/stylesheets/TopEvent.css";

// temp data for blogs

const HomePage = () => {

  /* Check user location example */
  const { location, error } = useUserLocation();

  useEffect(() => {
    console.log("user location:", location);
    console.log("location error:", error);
  }, [location, error]);

  return (
    <div className="home-page">
      <main className="main-content">
        <section className="section banner-section">
          {/* top banner */}
          <div className="top-banner">
            <img src="/assets-temp/img/top-banner.jpg" alt="top-banner" />
          </div>
          {/* end of top banner  */}
          <div className="container"></div>
        </section>
        <section className="section card-section">
          <div className="container">
            <TopEvent />
            <Farm1 />
            <Farm2 />
          </div>
        </section>
        <section className="section banner-section">
          {/* top banner */}
          <div className="top-banner">
            <a href="mailto:farmertoronto@gmail.com">
              <img
                src="/assets-temp/img/banner-middle.jpg"
                alt="middle-banner"
              />
            </a>
          </div>
          {/* end of top banner  */}
          <div className="container"></div>
        </section>
        <section className="section card-section">
          <div className="container">
            <Farm3 />
            <Farm4 />
          </div>
        </section>
        <section className="banner-section full-section">
          {/* top banner */}
          <div className="top-banner">
            <img src="/assets-temp/img/banner-bottom.jpg" alt="middle-banner" />
          </div>
          {/* end of top banner  */}
          <div className="container"></div>
        </section>
        <section className="section card-section">
          <div className="container">
            {/* temp blog section  */}

            <section className="events-section">
              <div className="events-container">
                <div className="events-header">
                  <h2 className="events-title">Latest Blogs</h2>
                  <p className="events-subtitle">
                    From how-tos to hidden gems – find your next farm idea here
                  </p>
                </div>

                <div className="events-carousel-wrapper">
                  <div className="events-carousel-window">
                    <div className="events-carousel-inner">
                      <div className="event-card">
                        <div className="event-card-image-container">
                          <a
                            href="https://farmmode.ca/the-best-farm-to-visit-in-april-2025/"
                            target="_blank"
                          >
                            <img
                              className="event-card-image"
                              src="https://farmmode.ca/wp-content/uploads/2025/04/woman-walking-with-flowers-in-the-basket-on-tulip-2025-04-02-18-07-34-utc-1024x683.jpg"
                              alt="Event 1"
                            />
                            <h3 className="event-card-title">
                              The Best Farm to Visit in April 2025
                            </h3>
                          </a>
                        </div>
                      </div>

                      <div className="event-card">
                        <div className="event-card-image-container">
                          <a
                            href="https://farmmode.ca/the-best-farm-to-visit-in-march-2025/"
                            target="_blank"
                          >
                            <img
                              className="event-card-image"
                              src="https://farmmode.ca/wp-content/uploads/2025/02/website-background-photo_Jireh-Hills-e1740425178364-1024x382.jpg"
                              alt="Event 2"
                            />
                            <h3 className="event-card-title">
                              The Best Farm to visit in March 2025
                            </h3>
                          </a>
                        </div>
                      </div>

                      <div className="event-card">
                        <div className="event-card-image-container">
                          <a
                            href="https://farmmode.ca/celebrate-maple-syrup-festival-in-ontario-2025/"
                            target="_blank"
                          >
                            <img
                              className="event-card-image"
                              src="https://farmmode.ca/wp-content/uploads/2025/02/MG_3069-copy.jpg"
                              alt="Event 3"
                            />
                            <h3 className="event-card-title">
                              Maple Syrup Festival in Ontario 2025
                            </h3>
                          </a>
                        </div>
                      </div>

                      <div className="event-card">
                        <div className="event-card-image-container">
                          <a
                            href="https://farmmode.ca/25-must-visit-maple-syrup-farms-near-toronto/"
                            target="_blank"
                          >
                            <img
                              className="event-card-image"
                              src="https://farmmode.ca/wp-content/uploads/2025/02/kids-lookin-into-the-maple-sap-buckets-2024-09-15-23-16-02-utc-1-1-1024x683.jpg"
                              alt="Event 4"
                            />
                            <h3 className="event-card-title">
                              25 Must-Visit Maple Syrup Farms Near Toronto
                            </h3>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button></button>
                  <button></button>
                </div>
              </div>
            </section>

            {/* end of temp blog section */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
