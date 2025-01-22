import React from 'react'
import styles from "./contactDiv.module.css"
import SectionHeading from '../../../uiComponents/sectionHeading'

function ContactDiv() {
    const steps = [
        {
          id: 1,
          title: "Send Us an Email",
          description:
            "Reach out support@goldencoin.pro and we'll get back to you in 24 hours",
          icon: "✉️",
        },
        {
          id: 2,
          title: "Give us a call",
          description: "In need of more assistance? Give us a call at +1 23456 7890",
          icon: "📞",
        },
        // {
        //   id: 3,
        //   title: "Select a package",
        //   description:
        //     "After your registration, select a package that suits your financial goals and make your deposit.",
        //   icon: "📦",
        // },
        // {
        //   id: 4,
        //   title: "Relax and Earn",
        //   description:
        //     "Sit back and watch how our expert traders, bots, and tools help you make money. Monitor your dashboards too.",
        //   icon: "💰",
        // },
      ];
  return (
    <section className={styles.container}>
      <SectionHeading
        title="Reach Out for"
        specialText="Inquiries"
        paragraph="Reach out for inquiries, assistance, or collaborations. We're here to help you 24/7 support! Contact our agents via phone/email"
      />
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.id} className={styles.step}>
            <div className={styles.stepIcon}>{step.icon}</div>
            <div>
              <h3 className={styles.stepTitle}> {step.title} </h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactDiv