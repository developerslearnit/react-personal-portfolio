import React, { createContext, useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
const Context = createContext();

export const AppContext = ({ children }) => {
  const [homeData, setHomeData] = useState({});
  const [follow, setFollow] = useState({});
  const [aboutData, setAboutData] = useState(null);
  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);

  const clickMe = () => {
    console.log("clicked");
  };

  useEffect(() => {
    console.log("first");
    const loadHomeData = async () => {
      const home = await client.fetch(`*[_type == "home"]`);
      const followData = await client.fetch(`*[_type == "followMe"]`);
      const about = await client.fetch(`*[_type == "about"]`);
      const experience = await client.fetch(`*[_type == "workExperience"]`);
      const education = await client.fetch(`*[_type == "education"]`);
      const portfolio = await client.fetch(`*[_type == "portfolio"]`);
      console.log("portfolio", portfolio);
      setPortfolioData(portfolio);
      setExperienceData(experience);
      setEducationData(education);
      setAboutData(about[0]);
      setHomeData(home[0]);
      setFollow(followData[0]);
    };
    loadHomeData();
  }, []);

  return (
    <Context.Provider
      value={{
        homeData,
        follow,
        aboutData,
        experienceData,
        educationData,
        clickMe,
        portfolioData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => React.useContext(Context);
