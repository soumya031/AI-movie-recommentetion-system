
import React, { useState, useCallback } from 'react';
import type { Movie } from './types';
import { getMovieRecommendations } from './services/geminiService';
import Header from './components/Header';
import InputForm from './components/InputForm';
import MovieCard from './components/MovieCard';
import Loader from './components/Loader';
import ErrorDisplay from './components/ErrorDisplay';
import Welcome from './components/Welcome';

function App(): React.ReactNode {
  const [userInput, setUserInput] = useState<string>('');
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuggestMovies = useCallback(async () => {
    if (!userInput.trim()) {
      setError('Please describe the kind of movie you want to watch.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const movies = await getMovieRecommendations(userInput);
      setRecommendations(movies);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      // Display the user-friendly error message from the service directly.
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [userInput]);

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <ErrorDisplay message={error} />;
    }
    if (recommendations.length > 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recommendations.map((movie, index) => (
            <MovieCard key={`${movie.title}-${index}`} movie={movie} />
          ))}
        </div>
      );
    }
    return <Welcome />;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <InputForm
          userInput={userInput}
          setUserInput={setUserInput}
          onSubmit={handleSuggestMovies}
          isLoading={isLoading}
        />
        <div className="mt-12">
          {renderContent()}
        </div>
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>Powered by SoumyaAI . Lets enjoy the Movie</p>
      </footer>
    </div>
  );
}

export default App;