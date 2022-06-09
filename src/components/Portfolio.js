import React, { useState } from "react";
import { urlFor } from "../lib/sanityClient";
import * as Unicons from "@iconscout/react-unicons";
import { useAppContext } from "../context/AppContext";
import Modal from "./Modal";

const Portfolio = () => {
  const { portfolioData } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [single, setSingle] = useState({});

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShowModal = (item) => {
    setSingle(item);
    setShowModal(true);
  };

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
            <span
              className="work__button"
              onClick={() => handleShowModal(item)}
            >
              Demo
              <Unicons.UilArrowRight size={20} className="work__button-icon" />
            </span>
          </div>
        ))}

        <Modal
          showModal={showModal}
          handleClose={handleClose}
          image={single?.image && urlFor(single.image)}
          category={single.category}
          description={single.description}
          title={single.title}
          technologies={single.technologies}
          url={single.url}
        />
      </div>
    </>
  );
};

export default Portfolio;
