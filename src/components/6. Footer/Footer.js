import React from "react";
import "../../sass/_footer.scss";
import Facebook from "../../assets/icons/icon-facebook.svg";
import Twitter from "../../assets/icons/icon-twitter.svg";
import Pinterest from "../../assets/icons/icon-pinterest.svg";
import Instagram from "../../assets/icons/icon-instagram.svg";
import Logo from "../../assets/icons/logo-footer.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__logo">
        <ul>
          <li>
            <img src={Logo} alt="logo" />
          </li>
        </ul>
      </div>
      <div className="footer__menus">
        <ul className="footer__menus features">
          <h4>Features</h4>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>

        <ul className="footer__menus resources">
          <h4>Resources</h4>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>

        <ul className="footer__menus company">
          <h4>Company</h4>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className="footer__menus social-links">
          <li>
            <div className="social-link">
              <img src={Facebook} alt="facebook" />
            </div>
          </li>
          <li>
            <div className="social-link">
              <img src={Twitter} alt="twitter" />
            </div>
          </li>
          <li>
            <div className="social-link">
              <img src={Pinterest} alt="pinterest" />
            </div>
          </li>
          <li>
            <div className="social-link">
              <img src={Instagram} alt="instagram" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
