import React from "react";
import "../assets/stylesheets/Footer.css";
import { Instagram } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h4 className="footer-heading">Featured Categories</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Farm Experiences</a>
              </li>
              <li>
                <a href="#">Farm Events</a>
              </li>
              <li>
                <a href="#">PYO Farms</a>
              </li>
              <li>
                <a href="#">Farmstay</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Farm Owners</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Register Farms</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Farmer's Market</a>
              </li>
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Useful Links</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Things to do</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">PYO Farms</a>
              </li>
              <li>
                <a href="#">Farmstay</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">FarmCiti</h4>
            <ul className="footer-list">
              <li>
                <a href="#">About FarmCiti</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>FarmCiti. All rights reserved</span>
            <a href="#" className="footer-link">
              Terms
            </a>
          </div>
          <div className="footer-bottom-right">
            <span>Stay with us</span>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
