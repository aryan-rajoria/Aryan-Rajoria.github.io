// Loading Screen component

import { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="mb-8">
          <Car className="w-24 h-24 text-blue-500 mx-auto animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Loading Portfolio...
        </h1>
        <p className="text-gray-400 mb-8">
          Get ready to explore!
        </p>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-gray-500 mt-4 text-sm">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </div>
    </div>
  );
};
