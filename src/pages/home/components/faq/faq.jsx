import React, { useState } from 'react';
import styles from './faq.module.css';
import SectionHeading from '../../../../uiComponents/sectionHeading';

const faqs = [
  { question: "What commodities can be traded?", answer: "You can trade commodities such as gold, silver, oil, and agricultural products." },
  { question: "What is a commodities trade?", answer: "Commodities trading involves buying and selling physical goods or their derivatives in financial markets." },
  { question: "What are the benefits?", answer: "Commodities trading can diversify your portfolio, hedge against inflation, and provide potential returns." },
  { question: "Can I trade with leverage?", answer: "Yes, many platforms allow leveraged trading for commodities." },
  { question: "Is it regulated?", answer: "Yes, commodities trading is regulated by financial authorities in most countries." },
  { question: "How secure is it?", answer: "Security depends on the platform you use; ensure it is reputable and complies with regulations." },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
        <SectionHeading
             title=""
             specialText="Frequently Asked Questions"
             paragraph="Answers to your burning questions, frequently asked questions (FAQ) - find the solutions to common queries and concerns"
        />
        
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className={styles.toggleIcon}>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
