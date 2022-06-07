import React from "react";
import MuiModal from "@mui/material/Modal";
import * as Unicons from "@iconscout/react-unicons";

const Modal = ({
  showModal,
  handleClose,
  image,
  category,
  description,
  title,
  technologies,
  url,
}) => {
  return (
    <MuiModal open={showModal}>
      <>
        <div className="portfolio__popup">
          <div className="portfolio__popup--inner">
            <div className="portfolio__popup-content grid">
              <span className="portfolio__popup-close" onClick={handleClose}>
                <Unicons.UilTimes size={32} className="work__button-icon" />
              </span>
              <div className="pp_thumbnail">
                <img src={image} alt="" className="portfolio__popup-img" />
              </div>

              <div className="portfolio__popup-info">
                <div className="portfolio__popup-subtitle">
                  Featured - <span>{category}</span>
                </div>
                <div className="portfolio__popup-body">
                  <h3 className="details__title">{title}</h3>
                  <p className="details__description">{description}</p>
                  <ul className="details__info">
                    <li>
                      Tech Stack - <span>{technologies}</span>
                    </li>
                    <li>
                      View -{" "}
                      <span>
                        <a rel="noreferer" target="_blank" href={url}>
                          {url}
                        </a>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
