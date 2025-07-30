import React from "react";
import { FaStar, FaUserAlt } from "react-icons/fa";
import { GiRollingDiceCup } from "react-icons/gi";

const Surprise = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-2">
          <GiRollingDiceCup className="w-10 h-10 text-pink-400" />
        </div>
        <h1 className="text-4xl font-bold text-pink-400">Surprise Me!</h1>
        <p className="mt-2 text-gray-300 max-w-lg mx-auto">
          Feeling adventurous? Let our AI chef pick the perfect recipe for your next
          culinary adventure. Every click brings a new surprise!
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg shadow-lg flex items-center gap-2 mx-auto">
          🎲 Surprise Me!
        </button>
        <p className="mt-3 text-sm text-gray-400">
          Over <span className="text-pink-400 font-semibold">1000+</span> recipes waiting to be discovered
        </p>
      </div>

      {/* Card Section */}
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
          <GiRollingDiceCup className="w-12 h-12 text-pink-400" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Ready for a Culinary Adventure?</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Click “Surprise Me” to discover a random recipe from our collection of delicious dishes.
          Each recipe comes with detailed instructions and ingredient lists.
        </p>
        <ul className="text-gray-300 text-sm space-y-3 text-left">
          <li className="flex items-center gap-2">
            ⭐ Over <span className="text-pink-400">1000+</span> handpicked recipes
          </li>
          <li className="flex items-center gap-2">
            <FaStar className="text-yellow-400" /> All recipes rated <span className="text-pink-400">4+ stars</span>
          </li>
          <li className="flex items-center gap-2">
            <FaUserAlt className="text-blue-400" /> From beginner to expert level
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Surprise;
