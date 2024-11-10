import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleAnswer = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2 onClick={toggleAnswer}>
        {question}
        <span className="arrow">{isVisible ? '▲' : '▼'}</span>
      </h2>
      {isVisible && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;
