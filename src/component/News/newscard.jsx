import React from 'react';

const NewsCard = ({ title, date, description }) => {
  return (
    <div className="news-card">
      <h3 className="news-card-title">{title}</h3>
      <p className="news-card-date">{date}</p>
      <p className="news-card-description">{description}</p>
    </div>
  );
};

export default NewsCard;
