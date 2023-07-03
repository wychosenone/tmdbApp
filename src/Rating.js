
import React from "react";
import Star from "./Star";

const Rating = ({ rating }) => {
  // Convert rating out of 10 to a 5 star rating system
  const starRating = Math.round(rating / 2);
  
  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} filled={index < starRating} />
      ))}
    </div>
  );
};

export default Rating;
