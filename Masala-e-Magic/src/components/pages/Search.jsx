import React from "react";

const Search = () => {
  return (
    <section className="bg-gray-900 text-white px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Find Your Recipe</h2>
          <p className="text-gray-400 mt-2">
            Search through our collection of delicious recipes and find exactly what you're craving
          </p>
        </div>

        {/* Search Bar */}
        <form className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              placeholder="Search recipes..."
              className="block w-full p-4 ps-12 text-sm text-gray-900 rounded-lg 
                         bg-gray-100 focus:ring-blue-500 focus:border-blue-500
                         dark:bg-gray-800 dark:border-gray-700 dark:text-white 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4-4m0-7a7 7 0 10-14 0 7 7 0 0014 0z"/>
              </svg>
            </div>
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 
                         text-white font-medium rounded-lg text-sm px-5 py-2"
            >
              Search
            </button>
          </div>
        </form>

        {/* Popular Searches */}
        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold">Popular searches:</h3>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {["Breakfast", "Lunch", "Dinner", "Vegan", "Desserts", "Indian", "Italian", "Quick Meals"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-blue-400 text-xs font-medium px-3 py-1 rounded-md 
                             border border-blue-500 cursor-pointer hover:bg-blue-600 hover:text-white transition"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Layout: Filters + Results */}
        <div className="flex gap-8 flex-col md:flex-row">
          {/* Filters & Sort */}
          <div className="bg-gray-800 p-6 rounded-xl w-full md:w-72 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h18M3 10h12M3 16h6"
                />
              </svg>
              Filters & Sort
            </h2>

            {[
              { label: "Sort by", options: ["Highest Rated", "Newest", "Oldest"] },
              { label: "Category", options: ["Any category", "Breakfast", "Lunch", "Dinner"] },
              { label: "Difficulty", options: ["Any difficulty", "Easy", "Medium", "Hard"] },
              { label: "Max Time (minutes)", options: ["Any time", "15", "30", "60"] },
              { label: "Min Rating", options: ["Any rating", "1+", "2+", "3+", "4+"] },
            ].map((filter, i) => (
              <div key={i} className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-300">{filter.label}</label>
                <select className="bg-gray-900 border border-gray-700 text-sm rounded-lg block w-full p-2.5 text-white">
                  {filter.options.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-gray-800 border border-gray-700 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  className="w-full h-48 object-contain rounded-t-lg"
                  src="https://flowbite.com/docs/images/products/apple-watch.png"
                  alt="recipe"
                />
                <div className="p-5">
                  <h5 className="text-lg font-semibold text-white truncate">
                    Apple Watch Recipe {item}
                  </h5>
                  <div className="flex items-center mt-2 mb-4">
                    <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">
                      4.8
                    </span>
                  </div>
                  <span className="text-xl font-bold text-blue-400">$599</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
