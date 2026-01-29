// src/components/VideoCard.jsx
import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div
      className="card h-100 shadow-sm rounded-5"
      style={{
        width: '200px',
        backgroundColor: '#ff0000',
        borderColor: '#ff0015',
        overflow: 'hidden'
      }}
    >
      <a 
        href={video.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-decoration-none text-reset position-relative d-block"
        aria-label={`Regarder ${video.title}`}
      >
        <svg
          className="card-img rounded-5"
          height="200"
          width="100%"
          viewBox="0 0 200 112"
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
        </svg>

        {/* Overlay avec dégradé CSS */}
        <div 
            style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(21, 21, 21, 0.9) 0%, transparent 100%)',
            pointerEvents: 'none'
            }}
        />

        {/* Texte positionné absolument */}
        <div 
            style={{
            position: 'absolute',
            bottom: '32px',
            left: '10px',
            right: '10px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
            pointerEvents: 'none'
            }}
        >
                {video.title}
            </div>
            
    </a>

    {/* Tags */}
    <div className="position-absolute bottom-0 start-0 end-0 p-2 ps-4">
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