import React from 'react';
import "../styles/news.css"

function NewsStories() {
  return (
    <section className="news-stories">
      <div className="text-container">
        <h1>News and stories</h1>
        <p>
          Looking for news or a dose of inspiration? You’ve come to the right place. Whether you’re passionate
          about donating, eager to collaborate, or curious to investigate, explore the latest news, stories, and
          research at Lifeblood. Dive into our resources, discover impactful ways to get involved, and stay
          informed about the latest in blood donation and medical advancements. Let’s make a difference together.
        </p>
      </div>
      <div className="image-container">
        <img
          src="https://www.lifeblood.com.au/sites/default/files/styles/hero_banner_1280_width/public/2021-08/Research_image1_4.jpg.webp?itok=VpxI4w4e"
          alt="Scientific background"
        />
      </div>
    </section>
  );
}

export default NewsStories;