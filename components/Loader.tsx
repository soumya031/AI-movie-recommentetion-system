
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin border-t-transparent"></div>
      <p className="mt-4 text-lg text-gray-300">Finding the perfect movies for you...</p>
    </div>
  );
};

export default Loader;
