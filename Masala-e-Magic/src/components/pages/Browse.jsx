import React from "react";

const Browse = () => {
  return (
    <section className="bg-gray-900 text-white px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3">Browse All Recipes</h1>
          <h2 className="text-gray-400 max-w-2xl mx-auto">
            Discover the perfect recipe with our advanced filtering and sorting options.
          </h2>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { label: "Default", color: "blue" },
            { label: "Dark", color: "gray" },
            { label: "Red", color: "red" },
            { label: "Green", color: "green" },
            { label: "Yellow", color: "yellow" },
            { label: "Indigo", color: "indigo" },
            { label: "Purple", color: "purple" },
            { label: "Pink", color: "pink" },
          ].map((tag, i) => (
            <span
              key={i}
              className={`bg-${tag.color}-100 text-${tag.color}-800 text-xs font-medium px-3 py-1 rounded-sm 
                          dark:bg-gray-800 dark:text-${tag.color}-400 border border-${tag.color}-400`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Card */}
          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-full md:w-72">
            {/* Title */}
            <h2 className="flex items-center text-lg font-semibold mb-6">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 4h18M6 8h12M9 12h6M12 16h0"></path>
              </svg>
              Advanced Filters
            </h2>

            {/* Tabs */}
            <div className="flex bg-gray-900 rounded-lg mb-6 overflow-hidden">
              <button className="w-1/2 text-sm py-2 font-medium text-white bg-blue-600">
                Filters
              </button>
              <button className="w-1/2 text-sm py-2 font-medium text-gray-400 hover:text-white">
                Sort
              </button>
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Category</label>
              <select className="w-full p-2.5 bg-gray-900 border border-gray-700 rounded-lg text-sm">
                <option>All categories</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>

            {/* Difficulty */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Difficulty</label>
              <select className="w-full p-2.5 bg-gray-900 border border-gray-700 rounded-lg text-sm">
                <option>All levels</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            {/* Time Range */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Max Cooking Time
              </label>
              <input
                type="range"
                min="5"
                max="120"
                step="5"
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5 min</span>
                <span>2+ hrs</span>
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block mb-2 text-sm font-medium">Min Rating</label>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Any</span>
                <span>5 stars</span>
              </div>
            </div>
          </div>

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-gray-800 border border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  className="w-full h-44 object-contain bg-gray-900 p-6"
                  src="https://flowbite.com/docs/images/products/apple-watch.png"
                  alt="product"
                />
                <div className="px-5 pb-5">
                  <h5 className="text-md font-semibold text-white mb-2">
                    Apple Watch Series {item}
                  </h5>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      ★★★★☆
                    </div>
                    <span className="ml-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                      4.8
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">$599</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-lg">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
