import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanityClient";
import * as Unicons from "@iconscout/react-unicons";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const loadAboutData = async () => {
      const about = await client.fetch(`*[_type == "about"]`);
      setAboutData(about[0]);
    };
    loadAboutData();
  }, []);
  return (
    <div className="about__container container grid">
      {aboutData?.aboutImage && (
        <img
          src={urlFor(aboutData && aboutData?.aboutImage)}
          className="about__img"
        />
      )}

      {/* <img src="assets/img/about_me.png" alt="" className="about__img" /> */}
      <div className="about__data">
        <h3 className="about__heading">
          {aboutData && aboutData.aboutHeading}
        </h3>
        <p className="about__description">
          {aboutData && aboutData.aboutDescription}
        </p>
        <div className="about__info grid">
          <div className="about__box">
            <Unicons.UilAward className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">
              {aboutData && aboutData.experience}
            </span>
          </div>

          <div className="about__box">
            <Unicons.UilSuitcase className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">
              {aboutData && aboutData.projectCompleted}
            </span>
          </div>

          <div className="about__box">
            <Unicons.UilHeadphonesAlt className="about__icon" />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">
              {aboutData && aboutData.support}
            </span>
          </div>
        </div>
        <a href="#contact" className="button">
          <Unicons.UilNavigator className="button__icon" />
          Contact Me
        </a>
        {/* </p> */}
      </div>
    </div>
  );
};

export default About;
