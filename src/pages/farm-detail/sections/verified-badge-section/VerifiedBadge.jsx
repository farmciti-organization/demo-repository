import React from "react";
import { SmallLogo } from "../../../../components/sample/SmallLogo";
import { LeafLeft }   from "../../../../components/sample/LeafLeft";
import { LeafRight }  from "../../../../components/sample/LeafRight";
import {
  Bakery,
  Music,
  Playground,
  School,
  Season,
  Wagon,
} from "../../../../components/sample/FeatureIcon";

// single global CSS now includes both title and badge styles:
import "../../../../assets/stylesheets/farm-detail/verified-badge-section/VerifiedBadge.css";

const featureIcons = [
  { id: 1, name: "Bakery",     Icon: Bakery     },
  { id: 2, name: "Music",      Icon: Music      },
  { id: 3, name: "Playground", Icon: Playground },
  { id: 4, name: "School",     Icon: School     },
  { id: 5, name: "Season",     Icon: Season     },
  { id: 6, name: "Wagon Ride", Icon: Wagon      },
];

export default function FarmBadgeAndFeatures({
  title,
  address,
  region,
  rating,
}) {
  return (
    <>
      {/* ─── TITLE ─── */}
      <section className="vb-title-section">
        <div className="vb-title-container">
          <h2 className="vb-title">{title}</h2>
          <h2 className="vb-address">{address}</h2>
        </div>
      </section>

      {/* ─── VERIFIED BADGE + FEATURES ─── */}
      <section className="vb-container">
        <div className="vb-badge">
          <SmallLogo className="vb-logo" aria-label="FarmCiti Logo" />
          <div className="vb-text">
            <p className="vb-owner">FarmCiti Verified</p>
            <p className="vb-region">{region}</p>
          </div>

          {rating != null && (
            <div className="vb-rating">
              <div className="vb-rating-row">
                <LeafLeft  className="vb-leaf" aria-label="Leaf Left"  />
                <span      className="vb-score">{rating}</span>
                <LeafRight className="vb-leaf" aria-label="Leaf Right" />
              </div>
              <p className="vb-rateLabel">FARM RATE</p>
            </div>
          )}
        </div>

        <ul className="vb-features">
          {featureIcons.map(({ id, name, Icon }) => (
            <li key={id} className="vb-featureItem">
              <Icon className="vb-featureIcon" aria-label={name} />
              <span className="vb-featureLabel">{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
