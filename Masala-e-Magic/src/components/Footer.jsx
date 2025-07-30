import React from 'react'
import { FaHatCowboy, FaSearch, FaTh, FaUtensils } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-black py-10 px-5 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="bg-[#0a1323] rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform">
          <FaTh className="text-orange-500 text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white">Browse Categories</h3>
          <p className="text-gray-400 mt-2">
            Explore recipes by meal type and cuisine
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0d1e17] rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform">
          <FaSearch className="text-blue-500 text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white">Search Recipes</h3>
          <p className="text-gray-400 mt-2">
            Find exactly what you're craving
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1a1408] rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform">
          <FaUtensils className="text-purple-500 text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white">Surprise Me</h3>
          <p className="text-gray-400 mt-2">
            Let us pick a random recipe for you
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer