// src/components/TagFilter.jsx
import React from 'react';
import { getTagColor } from '../config/colors.js';


const TagFilter = ({ allTags, selectedTag, onTagChange }) => {

  return (
    <div className="mb-4">
      <div className="d-flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isSelected = selectedTag === tag;
          const color = getTagColor(tag);
          const lightColor = `color-mix(in srgb, ${color} 20%, white 80%`;

          return (
            <tag-button
                key={tag}
                className={`tag-button ${isSelected ? 'selected' : ''}`}
                style={{
                    backgroundColor: isSelected ? color : lightColor,
                    color: isSelected ? lightColor : color,
                    borderColor: isSelected ? color : lightColor,
                    boxShadow: isSelected ? `0 0 80px ${color}` : '0 0 '
                }}
                onClick={() => onTagChange(tag)}
                aria-pressed={isSelected}
            >
                {tag}
            </tag-button>
          );
        })}
      </div>
    </div>
  );
};

export default TagFilter;