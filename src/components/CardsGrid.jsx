// src/components/VideoGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import Cards from './Cards';

const CardsGrid = ({ videos, cardWidth, minGap, maxCardsPerRow, selectedTagColor, onTagClick }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [columns, setColumns] = useState(1);

  // Observer la taille du conteneur
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Calculer le nombre de colonnes
  useEffect(() => {
    if (containerWidth === 0) return;

    // Calculer combien de cartes peuvent tenir
    const availableWidth = containerWidth;
    let calculatedColumns = 1;

    // Essayer d'ajouter des colonnes jusqu'à ce qu'il n'y ait plus de place
    for (let cols = 1; cols <= maxCardsPerRow; cols++) {
      const totalWidthNeeded = cols * cardWidth + (cols - 1) * minGap;
      if (totalWidthNeeded <= availableWidth) {
        calculatedColumns = cols;
      } else {
        break;
      }
    }

    setColumns(calculatedColumns);
  }, [containerWidth, cardWidth, minGap, maxCardsPerRow]);

  // Calculer l'espacement dynamique
  const calculateGap = () => {
    if (columns === 1) return minGap;
    
    const totalCardsWidth = columns * cardWidth;
    const availableSpace = containerWidth - totalCardsWidth;
    const dynamicGap = availableSpace / (columns - 1);
    
    return Math.max(minGap, dynamicGap);
  };

  const gap = calculateGap();

  return (
    <div 
      ref={containerRef}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, ${cardWidth}px)`,
        gap: `${gap}px`,
        justifyContent: 'center',
        padding: '10px 0'
      }}
    >
      {videos.map(video => (
        <Cards 
          key={video.id} 
          video={video}
          selectedTagColor={selectedTagColor}
          onTagClick={onTagClick} />
      ))}
    </div>
  );
};

export default CardsGrid;