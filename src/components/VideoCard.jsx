// src/components/VideoCard.jsx
import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div
      className="card h-100 shadow-sm rounded-4"
      style={{ width: '260px' }}
    >
      <a 
        href={video.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-decoration-none text-reset position-relative d-block"
        aria-label={`Regarder ${video.title}`}
      >
        <svg
          className="card-img rounded-4"
          height="260"
          width="100%"
          viewBox="0 0 260 146"
          role="img"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Image comme fond du SVG */}
          <image 
            href={video.thumbnail} 
            width="100%" 
            height="100%" 
            preserveAspectRatio="xMidYMid slice"
          />
          
          {/* Texte superposé */}
          <text
            x="25%"
            y="83%"
            fill="#000000"
            stroke="#ffffff"
            strokeWidth="2"
            paintOrder="stroke"  
            dy=".3em"
            textAnchor="start"
            fontSize="10"
            fontWeight="bold"
            className="text-shadow"
          >
            {video.title}
          </text>
        </svg>
        
      </a>


        <div className="position-absolute bottom-0 start-0 end-0 p-2">
          <div className="d-flex flex-wrap gap-1">
            {video.tags.map((tag, index) => (
              <span 
                key={index} 
                className="badge bg-secondary"
                style={{ fontSize: '0.7rem' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        

    </div>
  );
};

export default VideoCard;