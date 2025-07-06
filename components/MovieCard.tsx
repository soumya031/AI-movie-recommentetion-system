
import React from 'react';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = `https://source.unsplash.com/500x750/?${encodeURIComponent(movie.image_query)}`;
  
  const genres = movie.genre.split(',').map(g => g.trim());

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg shadow-blue-900/20 transform hover:-translate-y-2 transition-all duration-300 flex flex-col group">
      <img 
        className="w-full h-64 object-cover" 
        src={imageUrl} 
        alt={`An image representing ${movie.title}`}
        // Add a fallback in case Unsplash fails
        onError={(e) => { (e.target as HTMLImageElement).src = `https://source.unsplash.com/500x750/?cinema`; }}
      />
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{movie.title}</h3>
          <p className="text-sm text-gray-400 mb-3">{movie.year}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {genres.map(g => (
              <span key={g} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">{g}</span>
            ))}
          </div>
          <p className="text-gray-300 text-base">{movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;