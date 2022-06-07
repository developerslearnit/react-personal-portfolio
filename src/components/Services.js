import React from "react";

import * as Unicons from "@iconscout/react-unicons";
const Services = () => {
  return (
    <div className="services__container container grid">
      <div className="services__content">
        <Unicons.UilWebGrid size={32} className="services__icon" />
        <h3 className="services__title">Web Design</h3>
      </div>

      <div className="services__content">
        <Unicons.UilServerNetwork size={32} className="services__icon" />
        <h3 className="services__title">Backend Development</h3>
      </div>
    </div>
  );
};

export default Services;
