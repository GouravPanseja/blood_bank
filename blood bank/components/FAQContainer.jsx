import React from 'react';
import FAQItem from '../components/FAQItem';
import "../styles/faqs.css"

const faqs = [
  { question: "Who can donate blood?", answer: "Most healthy adults aged 17-65 and weighing over 50 kg can donate. Check specific guidelines if unsure." },
  { question: "How often can I donate?", answer: "You can donate whole blood every 8 weeks. Other types of donations may have different intervals." },
  { question: "Is it safe?", answer: "Yes, donating blood is safe. Sterile, single-use equipment is always used." },
  { question: "How long does it take?", answer: "The whole process takes about an hour, with the actual donation lasting 10 minutes." },
  { question: "What should I do before donating?", answer: "Eat well, stay hydrated, and bring an ID. Avoid fatty foods before your donation." },
  { question: "What happens to my blood?", answer: "Your blood is tested, processed, and separated into components for medical use." },
  { question: "Can I donate with a tattoo?", answer: "Wait a few months after getting a tattoo or piercing before donating." },
  { question: "Do I need to prepare before donating?", answer: "Yes, eat well, stay hydrated, and avoid alcohol. Bring an ID and wear comfortable clothing." },
  { question: "Can I donate if I'm on medication?", answer: "Some medications may affect your ability to donate. It's best to consult with the donation center beforehand." },
  { question: "How will I feel after donating?", answer: "Most people feel fine after donating, but it's good to rest, stay hydrated, and avoid strenuous activities for the rest of the day." },
  { question: "Can I donate if I've traveled recently?", answer: "Travel to certain areas may affect your ability to donate. Check with your local donation center if you're unsure." },
  { question: "What types of blood donations are there?", answer: "You can donate whole blood, platelets, plasma, or double red cells. Each type has different benefits and requirements." }
];

function FAQContainer() {
  return (
    <div className="container">
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQContainer;
