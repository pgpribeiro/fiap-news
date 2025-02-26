import './NewsPopup.css';

const NewsPopup = ({ news, onClose }) => {
    if (!news) return null;
  
    return (
      <div className="news-popup-overlay">
        <div className="news-popup-content">
          <button className="news-popup-close" onClick={onClose}>
            ×
          </button>
          <div className="news-popup-image">
            <img src={news.imageUrl} alt={news.title} />
          </div>
          <div className="news-popup-text">
            <h2>{news.title}</h2>
            <p>{news.fullText}</p>
            <p className="news-popup-full-text">
              {news.fullText}
            </p>
          </div>
        </div>
      </div>
    );
  };

export default NewsPopup;