import React from 'react'
import { FaStar } from "react-icons/fa6";

const RatingStar = ({ rating }) => {
    const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <FaStar key={i} className="h-5 w-5 text-yellow-400" />
      );
    } else {
      stars.push(
        <FaStar key={i} className="h-5 w-5 text-gray-300" />
      );
    }
  }
  return (
    <div className="flex items-center space-x-1">
    {stars}
    <span className="text-gray-500">{`(${rating})`}</span>
  </div>
  )
}

export default RatingStar
