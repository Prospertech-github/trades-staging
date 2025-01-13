import React from "react";
import SectionHeading from "../../../../uiComponents/sectionHeading";
import CarouselComponent from "../../../../uiComponents/carousel";
import section from './testimonials.module.css'

function Testimonials() {
  return (
    <section className={section.testimonial}>
      <SectionHeading
        title="Don't take our words"
        specialText="GoldenCoin?"
        paragraph="From beginners to experts, True stories showing success in commodity trading - listen to our successful commodity traders"
      />
      <CarouselComponent />
    </section>
  );
}

export default Testimonials;
