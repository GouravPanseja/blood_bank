import React from 'react';
import "../styles/news.css"

function ReadItem({ imgSrc, title, description }) {
  return (
    <div className="read-item">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ReadItem;