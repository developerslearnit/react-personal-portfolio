import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import * as Unicons from "@iconscout/react-unicons";

const Qualifications = () => {
  const { experienceData, educationData } = useAppContext();

  return (
    <div className="qualification__container container grid">
      <div className="education">
        <h3 className="qualification__title">
          <Unicons.UilGraduationCap /> Education
        </h3>

        <div className="timeline">
          {educationData?.map((education, index) => (
            <div key={index} className="timeline__item">
              <div className="circle__dot"></div>
              <h3 className="timeline__title">{education?.school}</h3>
              <p className="timeline__text">{education?.qualification}</p>
              <span className="timeline__date">
                <i className="uil uil-calendar-alt"></i>
                {education?.startDate} - {education?.endDate}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="experience">
        <h3 className="qualification__title">
          <i className="uil uil-suitcase"></i>
          <Unicons.UilSuitcase />
          Experience
        </h3>

        <div className="timeline">
          {experienceData
            ?.slice(0)
            .reverse()
            .map((experience, index) => (
              <div key={index} className="timeline__item">
                <div className="circle__dot"></div>
                <h3 className="timeline__title">{experience?.company}</h3>
                <p className="timeline__text">{experience?.position}</p>
                <span className="timeline__date">
                  <i className="uil uil-calendar-alt"></i>
                  {experience?.startDate} - {experience?.endDate}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
