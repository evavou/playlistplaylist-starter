// src/components/VideoCard.jsx
import React from 'react';
import { getTagColor } from '../config/colors';

const Cards = ({ video, selectedTagColor, onTagClick}) => {

  const video_url = `https://www.youtube.com/watch?v=${video.id}&t=0s`;

  const video_thumbnail  ='https://img.youtube.com/vi/'+video.id+'/hqdefault.jpg'


  return (
    <div
      className="card h-100 shadow-sm rounded-5"
      style={{
        width: '200px',
        backgroundColor: selectedTagColor,
        borderColor: selectedTagColor,
        outline: `4px solid ${selectedTagColor}`,
        overflow: 'hidden'
      }}
    >
      <a 
        href={video_url} 
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
          {/* Image comme fond SVG */}
          <image 
          href={video_thumbnail} 
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
      
      {/* Titre */}
      <div className="video-title">
        {video.title}
      </div>
    </a>

    {/* Tags */}
    <div className="position-absolute bottom-0 start-0 end-0 p-2 ps-3">
      <div className="badge-container">
        {video.tags.map((tag, index) => {
          const color = getTagColor(tag);
          const lightColor = `color-mix(in srgb, ${color} 20%, white 80%`;
          const darkColor = `color-mix(in srgb, ${color} 50%, black 50%`;
          return (
            <span
              key={index}
              className="badge rounded-pill"
              style={{
                backgroundColor: darkColor,
                color: lightColor,
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.stopPropagation();
                onTagClick(tag);
              }}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Cards;