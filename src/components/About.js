import { urlFor } from "../lib/sanityClient";
import * as Unicons from "@iconscout/react-unicons";
import { useAppContext } from "../context/AppContext";

const About = () => {
  const { aboutData, clickMe } = useAppContext();

  console.log("aboutData", aboutData);

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
        <a href="#contact" className="button" onClick={clickMe}>
          <Unicons.UilNavigator className="button__icon" />
          Contact Me
        </a>
        {/* </p> */}
      </div>
    </div>
  );
};

export default About;
