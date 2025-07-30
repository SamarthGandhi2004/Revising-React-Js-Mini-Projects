import React from "react";
import { FaUserFriends, FaStar, FaAward, FaUtensils } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center ">
        
        {/* Card 1 */}
        <div className="bg-[#0a1323] rounded-lg shadow-md p-6">
          <div className="flex justify-center items-center mb-4">
            <FaUtensils className="text-3xl text-blue-500" />
          </div>
          <h3 className="text-3xl font-bold text-white">1000+</h3>
          <p className="text-gray-400">Delicious Recipes</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0d1e17] rounded-lg shadow-md p-6">
          <div className="flex justify-center items-center mb-4">
            <FaUserFriends className="text-3xl text-green-500" />
          </div>
          <h3 className="text-3xl font-bold text-white">50K+</h3>
          <p className="text-gray-400">Happy Cooks</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1a1408] rounded-lg shadow-md p-6">
          <div className="flex justify-center items-center mb-4">
            <FaStar className="text-3xl text-yellow-500" />
          </div>
          <h3 className="text-3xl font-bold text-white">4.8</h3>
          <p className="text-gray-400">Average Rating</p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#1c0f23] rounded-lg shadow-md p-6">
          <div className="flex justify-center items-center mb-4">
            <FaAward className="text-3xl text-purple-500" />
          </div>
          <h3 className="text-3xl font-bold text-white">100+</h3>
          <p className="text-gray-400">Award Winners</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
