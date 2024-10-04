import React from "react";
import NewsCard from "./NewsCard";
import { newsData } from "../../data/data";

function News() {
  const renderNews = newsData.map((item) => {
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
      <ul className="space-y-2">{renderNews}</ul>
    </div>
  );
}

export default News;
