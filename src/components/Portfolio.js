import React, { useState, useEffect } from "react";
import { client, urlFor } from "../lib/sanityClient";
import * as Unicons from "@iconscout/react-unicons";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const loadPortfolioData = async () => {
      const portfolio = await client.fetch(`*[_type == "portfolio"]`);
      console.log("portfolio", portfolio);
      setPortfolioData(portfolio);
    };

    loadPortfolioData();
    return () => {};
  }, []);

  return (
    <>
      <div className="work__filters">
        <span className="work__item active-work" data-filter="all">
          All
        </span>
        <span className="work__item" data-filter=".web">
          Web
        </span>
        <span className="work__item" data-filter=".app">
          App
        </span>
        <span className="work__item" data-filter=".design">
          Design
        </span>
      </div>
      <div className="work__container container grid">
        {portfolioData?.map((item, index) => (
          <div key={index} className="work__card mix app">
            <img src={urlFor(item.image)} alt="work-1" className="work__img" />
            <h3 className="work__title">{item.category}</h3>
            <span className="work__button">
              Demo
              <Unicons.UilArrowRight size={20} className="work__button-icon" />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;