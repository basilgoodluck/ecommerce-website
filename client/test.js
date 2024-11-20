import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  
  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          size={20}
          className={`${
            index < rating 
              ? 'fill-orange-400 text-orange-400' 
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
};

// Example usage
export default () => (
  <div className="space-y-4">
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">5 stars:</span>
      <StarRating rating={5} />
    </div>
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">3 stars:</span>
      <StarRating rating={3} />
    </div>
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">2 stars:</span>
      <StarRating rating={2} />
    </div>
  </div>
);