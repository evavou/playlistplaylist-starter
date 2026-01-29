//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';



import React, { useState } from 'react';
import VideoCard from './components/VideoCard';
import videos from './data/videos';
import './App.css';



function App() {
  const [selectedTag, setSelectedTag] = useState('tous');
  
  // Récupérer tous les tags uniques
  const allTags = ['tous', ...new Set(videos.flatMap(video => video.tags))];
  
  // Filtrer les vidéos
  const filteredVideos = selectedTag === 'tous' 
    ? videos 
    : videos.filter(video => video.tags.includes(selectedTag));

  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="display-5 fw-bold">playlist of playlists </h1>
        <p className="lead">Toutes mes musiques préférées en un seul endroit</p>
      </header>
      
      {/* Filtre par tags */}
      <div className="mb-4">
        <div className="d-flex align-items-center">
          <label htmlFor="tagFilter" className="me-2 fw-medium">
            Filtrer par tag :
          </label>
          <select 
            id="tagFilter"
            className="form-select w-auto"
            value={selectedTag} 
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            {allTags.map(tag => (
              <option key={tag} value={tag}>
                {tag === 'tous' ? 'Toutes les vidéos' : `#${tag}`}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Compteur de résultats */}
      <div className="alert alert-light mb-3">
        <i className="bi bi-music-note me-2"></i>
        {filteredVideos.length} vidéo{filteredVideos.length > 1 ? 's' : ''} trouvée{filteredVideos.length > 1 ? 's' : ''}
      </div>
      
      {/* Grille de vignettes */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5">
        {filteredVideos.map(video => (
          <div key={video.id} className="col">
            <VideoCard video={video} />
          </div>
        ))}
      </div>
      
      {/* Message si pas de résultats */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-5">
          <div className="display-1 mb-3">🎵</div>
          <h3>Aucune vidéo trouvée</h3>
          <p className="text-muted">Essayez avec un autre tag</p>
        </div>
      )}
      
      {/* Pied de page */}
      <footer className="mt-5 pt-4 border-top text-center text-muted">
        <p>
          Créé avec React et Bootstrap • 
          Les vidéos sont hébergées sur YouTube
        </p>
      </footer>
    </div>
  );
}

export default App;