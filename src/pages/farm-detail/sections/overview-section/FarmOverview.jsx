import React, { useState } from "react";
import "../../../../assets/stylesheets/farm-detail/overview-section/FarmOverview.css";
import {Address, Phone, Social, Website} from "../../../../components/sample/OverviewIcon";

export default function FarmOverview() {
  
  return (
    <section className="overview-section">
      <div className ="overview-container">
        <div className="overview-content">
          {/* Overview Box */}
          <div className="overview-box">
            <h3 className="overview-title">Overview</h3>
              <p className="overview-text">
                Pingle’s Farm Market is a family-run, year-round destination located in Hampton, Ontario.
              </p>
              <p  className="overview-text">
                The farm offers a variety of seasonal events and activities, making it a popular spot for families and visitors seeking authentic farm experiences.
              </p>
        
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-row">
              <Address className="info-icon" />
              <strong className="contact-label">Address:</strong>
              <span className="contact-text">
                1805 Taunton Road East, Hampton, ON L0B 1J0
              </span>
            </div>

            <div className="contact-row">
              <Phone className="info-icon" />
              <strong className="contact-label">Phone:</strong>
              <span className="contact-text">905‑725‑6089</span>
            </div>

            <div className="contact-row">
              <Website className="info-icon" />
              <strong className="contact-label">Website:</strong>
              <a
                href="https://pinglesfarmmarket.com/"
                className="contact-text link"
              >
                https://pinglesfarmmarket.com/
              </a>
            </div>

            <div className="contact-row">
              <Social className="info-icon"/>
              <strong className="contact-label">Socials:</strong>
              <a
                href="https://www.instagram.com/pinglesfarm"
                className="contact-text link"
              >
                https://www.instagram.com/pinglesfarm
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
