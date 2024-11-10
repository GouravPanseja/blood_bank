import React from 'react';
import ReadItem from './ReadItem';
import "../styles/news.css"

function ReadContainer() {
  const readItems = [
    {
      imgSrc: "https://www.lifeblood.com.au/sites/default/files/styles/390_x_280/public/2024-03/FMT%20pills_467x290px.png.webp?itok=Q_qxn-r7",
      title: "Microbiome product gets the green light from the TGA",
      description: "Australian Red Cross Lifeblood’s life-changing donor stool product has received Therapeutic Goods Administration (TGA) approval for use in patients with a potentially life-threatening bowel."
    },
    {
      imgSrc: "https://www.lifeblood.com.au/sites/default/files/styles/390_x_280/public/2024-09/dwf-article-preview-opt-1-467x290px.jpg.webp?itok=Wv1V7FLc",
      title: "Could donating be even more fun, together?",
      description: "Whether it’s tackling everyday chores, embarking on new adventures, giving back to the community or blood donation, having a buddy by your side can make all the difference."
    },
    {
      imgSrc : "https://www.lifeblood.com.au/sites/default/files/styles/390_x_280/public/2024-09/Shoba_467x290px.png.webp?itok=BVoD_xlO",
      title: "Shoba was the only stem cell match in the world", 
      description : "It was a simple email that launched Lifeblood nurse, Shoba, on the path to change a stranger’s life."
    },
    {
      imgSrc : "https://www.lifeblood.com.au/sites/default/files/styles/390_x_280/public/2024-09/J24383_Growth_Explain_1.1_Need_thumbnail_467x290px.jpg.webp?itok=-DuRrSBe",
      title : "What’s behind Australia’s growing demand for blood donors?",
      description : "Blood isn't just for emergenciesWhen we think of donating blood, our minds usually jump to emergencies — like helping car crash victims or people undergo" 
    },
    {
      imgSrc : "https://www.lifeblood.com.au/sites/default/files/styles/390_x_280/public/2024-09/J24383_Growth_Explain_1.1_Process_thumbnail_467x290px.jpg.webp?itok=tRh-Vo-l",
      title : "From party pies to saving lives: the step-by-step guide to giving blood",
      description : "Did you know a single blood donation only takes about 10 minutes and can save up to three lives? Find out how you can make a difference to those in need." 
    },
    {
      imgSrc : "https://www.lifeblood.com.au/sites/default/files/styles/390_x_280/public/2024-09/Amanda_Michael_835x480px.png.webp?itok=TJ4BWotj", 
      title : "Looking for a reason to give blood? This couple has a few.",
      description : "To help celebrate the launch of the Life Is The Reason campaign, we caught up with married couple and milestone donors, Amanda and Michael, to find out what motivates them."
    },    
  ];

  return (
    <div className="reads-container">
      {readItems.map((item, index) => (
        <ReadItem key={index} {...item} />
      ))}
    </div>
  );
}

export default ReadContainer;
