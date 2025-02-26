import React, { useState } from 'react';
import Card from '../Card';
import NewsPopup from '../NewsPopup/NewsPopup';  
import './news.css';

const News = (props) => {
    const newsItems = props.newsData || [];
    const [selectedNews, setSelectedNews] = useState(null);
    
    return (
        <section className='news'>
            <h3>{props.title}</h3>
            <div className="news-grid">
                {newsItems.map(news => (
                    <Card 
                        key={news.id}
                        title={news.title}
                        description={news.description}
                        imageUrl={news.imageUrl}
                        onClick={() => setSelectedNews(news)}
                    />
                ))}
            </div>
            <NewsPopup 
                news={selectedNews} 
                onClose={() => setSelectedNews(null)}
            />
        </section>
    )
}

export default News;