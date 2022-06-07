import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link, animateScroll as scroll } from "react-scroll";
const Sidebar = () => {
  const handleToggleMobileMenu = () => {
    document.getElementById("sidebar").classList.add("show-sidebar");
  };

  const handleHideMobileMenu = () => {
    document.getElementById("sidebar").classList.remove("show-sidebar");
  };

  const handleSetActive = (e) => {};

  return (
    <>
      <button className="nav__toggle" onClick={handleToggleMobileMenu}>
        <Unicons.UilBars size={24} className="nav__toggle" />
      </button>
      <aside className="sidebar" id="sidebar">
        <nav className="nav">
          <div className="nav__logo">
            <a href="index.html" className="nav__logo-text">
              {" "}
              M{" "}
            </a>
          </div>

          <div className="nav__menu">
            <div className="menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link
                    activeClass="active-link"
                    className="nav__link"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Home
                  </Link>
                  {/*  <a href="#home" className="nav__link active-link"></a> */}
                </li>
                <li className="nav__item">
                  <Link
                    activeClass="active-link"
                    className="nav__link"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    About
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    activeClass="active-link"
                    className="nav__link"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    activeClass="active-link"
                    className="nav__link"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Work
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    activeClass="active-link"
                    className="nav__link"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    activeClass="active-link"
                    className="nav__link"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="btn__share">
            <Unicons.UilShareAlt size={24} className="social__share" />
          </div>

          <button className="nav__close" onClick={handleHideMobileMenu}>
            <Unicons.UilTimes size={24} className="nav__close" />
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
