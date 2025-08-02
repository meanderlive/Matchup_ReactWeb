import React from 'react';
import HeaderFour from '../layout/HeaderFour';
import NewsCard from './newscard';
import ItemSearchForm from './searchform';
// Sample data for news and updates
const newsData = [
  {
    id: 1,
    title: 'New Feature Release!',
    date: 'August 30, 2024',
    description: 'We have just released a new feature that allows you to customize your profile even more!'
  },
  {
    id: 2,
    title: 'Maintenance Notice',
    date: 'August 25, 2024',
    description: 'Our platform will undergo scheduled maintenance on August 31, 2024, from 1 AM to 3 AM UTC.'
  },
  {
    id: 3,
    title: 'App Update',
    date: 'August 20, 2024',
    description: 'Our app has been updated to include bug fixes and performance improvements.'
  }
];

const News = () => {
  return (
    <div>
      <HeaderFour />
      <div className="container">
        <div className="news_main_wrap">
           
        <ItemSearchForm />

          {newsData.map((newsItem) => (
            <NewsCard
              key={newsItem.id}
              title={newsItem.title}
              date={newsItem.date}
              description={newsItem.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
