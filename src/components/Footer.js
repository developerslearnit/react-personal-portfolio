import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container grid">
          <div>
            <h1 className="footer__title">Mark</h1>
            <span className="footer__subtitle"> Full Stack Web Developer </span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="footer__link">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://facebook.com"
              target="_blank"
              className="footer__social"
            >
              <Unicons.UilFacebookF size={18} />
            </a>
            <a
              href="htpps://instagram.com"
              target="_blank"
              className="footer__social"
            >
              <Unicons.UilInstagram size={18} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer__social"
            >
              <Unicons.UilTwitter size={18} />
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; 2020 Mark. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
