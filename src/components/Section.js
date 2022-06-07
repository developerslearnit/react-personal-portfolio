import React from "react";

const Section = ({
  children,
  cssClass,
  id,
  sectionTitle,
  sectionDataHeading,
}) => {
  return (
    <section className={cssClass} id={id}>
      {sectionTitle && (
        <h2 data-heading={sectionDataHeading} className="section__title">
          {sectionTitle}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
