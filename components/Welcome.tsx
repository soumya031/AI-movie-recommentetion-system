
import React from 'react';

const ClapperboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.731 4.269l-6.32 6.32a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 010-1.06l6.32-6.32a.75.75 0 011.06 0l1.06 1.06a.75.75 0 010 1.06z" />
    </svg>
);


const Welcome: React.FC = () => {
  return (
    <div className="text-center py-10 px-4">
      <div className="flex justify-center mb-6">
        <ClapperboardIcon />
      </div>
      <h2 className="text-3xl font-bold text-gray-100 mb-2">Ready for a Movie Night?</h2>
      <p className="text-lg text-gray-400 max-w-xl mx-auto">
        Just tell me what you're looking for above. Be as specific or as vague as you like!
        For example, try...
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
        <span className="bg-gray-700/50 text-gray-300 py-1 px-3 rounded-full">"A gritty Bollywood gangster film"</span>
        <span className="bg-gray-700/50 text-gray-300 py-1 px-3 rounded-full">"A classic film noir"</span>
        <span className="bg-gray-700/50 text-gray-300 py-1 px-3 rounded-full">"A heartwarming South Indian family drama"</span>
      </div>
    </div>
  );
};

export default Welcome;