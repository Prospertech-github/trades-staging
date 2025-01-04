import React from "react";

function SectionHeading({title, paragraph, specialText}) {
  return (
    <div className='sectionHeadings'>
      <h3>{title} <span className="specialText">{specialText}</span></h3>
      <p className="specialText">{paragraph}</p>
    </div>
  );
}

export default SectionHeading;
