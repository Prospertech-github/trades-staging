import React from "react";
import howto from "./howtoTrade.module.css";
import SectionHeading from "../../../uiComponents/sectionHeading";

function HowtoTrade() {
  const steps = [
    {
      id: 1,
      title: "Speak to our agent",
      description:
        "Contact our dedicated agent to assist you with the registration process.",
      icon: "👤",
    },
    {
      id: 2,
      title: "Sign Up",
      description: "Start your journey by creating your free account.",
      icon: "✍️",
    },
    {
      id: 3,
      title: "Select a package",
      description:
        "After your registration, select a package that suits your financial goals and make your deposit.",
      icon: "📦",
    },
    {
      id: 4,
      title: "Relax and Earn",
      description:
        "Sit back and watch how our expert traders, bots, and tools help you make money. Monitor your dashboards too.",
      icon: "💰",
    },
  ];
  return (
    <section className={howto.container}>
      <SectionHeading
        title="How to"
        specialText="Trade"
        paragraph="Trade with trust & reliability across a range of commodity instruments including gold, silver, copper, oil, and coffee, enhancing your investment strategy"
      />
      <div className={howto.steps}>
        {steps.map((step) => (
          <div key={step.id} className={howto.step}>
            <div className={howto.stepIcon}>{step.icon}</div>
            <div>
              <h3 className={howto.stepTitle}> {step.id}. {step.title} </h3>
              <p className={howto.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowtoTrade;
