import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanityClient";
import * as Unicons from "@iconscout/react-unicons";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [frameworksData, setFrameworksData] = useState({});
  const [activeExperience, setActiveExperience] = useState("backend");

  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  // Group by color as key to the person array
  //const personGroupedByColor = groupBy(person, "color");

  useEffect(() => {
    const loadSkillData = async () => {
      const skillsData = await client.fetch(`*[_type == "skills"]`);
      const frameworks = await client.fetch(`*[_type == "frameworks"]`);
      const groupedFrameworks = groupBy(frameworks, "skillKey");
      setSkills(skillsData);
      setFrameworksData(groupedFrameworks);
    };
    loadSkillData();
  }, []);

  return (
    <div className="skills__container container grid">
      <div className="skills_tabs">
        {skills?.map((skill, index) => (
          <div
            key={index}
            className="skills_header skills__active"
            data-target={`#${skill?.skillKey}`}
            onClick={() => setActiveExperience(skill?.skillKey)}
          >
            {skill.skillKey === "frontend" ? (
              <Unicons.UilBracketsCurly size={32} className="skills_icon" />
            ) : (
              <Unicons.UilServerNetwork size={32} className="skills_icon" />
            )}

            <div>
              <h1 className="skills__title">{skill.title}</h1>
              <span className="skills_subtitle">{skill.yearsOfExperience}</span>
            </div>
            <Unicons.UilAngleDown size={35} className="skills__arrow" />
          </div>
        ))}
      </div>

      <div className="skills__content">
        {Object.entries(frameworksData).map(([key, values]) => (
          <div
            key={key}
            className={`skills_group ${
              activeExperience === key && "skills__active"
            }`}
            data-content
            id={`${key}`}
          >
            <div className="skills__list grid">
              {values.map((framework, index) => (
                <div key={index} className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skill__name">{framework.title}</h3>
                    <span className="skills__number">
                      {framework.skillLevel}
                    </span>
                  </div>
                  <div className="skills_bar">
                    <span
                      className="skills__percentage"
                      style={{ width: `${framework.skillLevel}` }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
