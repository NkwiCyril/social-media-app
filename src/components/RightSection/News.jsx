import React from "react";
import mountain2 from "../../assets/images/mountain-2.jpeg";
import mountain3 from "../../assets/images/mountain-3.jpeg";
import mountain4 from "../../assets/images/mountain-4.jpeg";
import NewsCard from "./NewsCard";

function News() {
  const news = [
    {
      id: 1,
      title: "Ten unbelievable facts about Mountain Fako",
      image: mountain3,
      timeSincePosted: "2hr",
    },
    {
      id: 2,
      title: "All you need to know about the Mount Cameroon Race of Hope",
      image: mountain2,
      timeSincePosted: "2hr",
    },
    // {
    //   id: 3,
    //   title: "This is by far the best weather to go hiking",
    //   image: mountain4,
    //   timeSincePosted: "2hr",
    // },
  ];

  const renderNews = news.map((item) => {
    return (
      <NewsCard
        key={item.id}
        imageSrc={item.image}
        time={item.timeSincePosted}
        title={item.title}
      />
    );
  });

  return (
    <div className="bg-primary mt-5 px-5 py-3 rounded-md">
      <h1 className="pb-3 text-lg">Today's news</h1>
      <ul className="space-y-2">
        {renderNews}
      </ul>
    </div>
  );
}

export default News;
