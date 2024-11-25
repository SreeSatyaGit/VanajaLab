import React from 'react';

function News() {
    const newsItems = [
        {
            title: "New Research Grant Awarded",
            date: "September 30, 2024",
            image: "path/to/image1.jpg",
            excerpt: "Our lab has been awarded a significant grant to study..."
        },
        // Add more news items here
    ];

    return (
        <div className="news-container">
            <div className="news-grid">
                {newsItems.map((item, index) => (
                    <div key={index} className="news-item">
                        <div className="news-content">
                            <h2 className="news-title">{item.title}</h2>
                            <p className="news-date">{item.date}</p>
                            <p className="news-excerpt">{item.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;