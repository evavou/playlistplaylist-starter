// src/App.jsx
import React, { useState } from 'react';
import { getTagColor } from './config/colors';
import CardsGrid from './components/CardsGrid';
import TagFilter from './components/TagFilter';
import videos from './data/videos';
import Logo from './components/Logo';
import './App.css';




function App() {
  const [selectedTag, setSelectedTag] = useState('all');
  
  const allTags = ['all', 'house', 'energy', 'jazz', 'chill', 'lofi', 'peace', 'ambient', 'ost',
                  'games', 'nintendo', 'japan', 'wtf', 'french'
  ];
  
  const filteredVideos = selectedTag === 'all' 
    ? videos 
    : videos.filter(video => video.tags.includes(selectedTag));



  return (
    
    <div
      className="container py-4"
      style={{
        '--selected-tag-color': getTagColor(selectedTag)
      }}
      >
      {/* Header */}
      <header className="mb-4">
        <Logo/>
        <p className="lead-custom">The best YouTube playlists all in one place</p>
      </header>
      
      {/* Filtre par tags */}
      <TagFilter
        allTags={allTags}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
      />
      
      {/* Affichage du nombre de résultats */}
      <div
        className="lead-custom mb-2"
        style={{fontWeight: 200}}
      >
        {filteredVideos.length} video{filteredVideos.length > 1 ? 's' : ''}
      </div>
      
      {/* Affichage avec grille dynamique */}
      <CardsGrid 
        videos={filteredVideos}
        cardWidth={200}  // Largeur de vos cartes
        minGap={10}      // Espacement minimum entre les cartes (en px)
        maxCardsPerRow={10} // Maximum de cartes par ligne
        selectedTagColor = {getTagColor(selectedTag)}
        onTagClick={setSelectedTag}
      />
      
      {/* Message si pas de résultats */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-5">
          <div className="display-1 mb-3">😭</div>
          <h3>No vidéo found</h3>
          <p className="text-muted">Try some other tags</p>
        </div>
      )}
      
      <footer className="mt-5 pt-4 border-top text-center">
        <p>
          skibidi
        </p>
      </footer>
    </div>
  );
}

export default App;