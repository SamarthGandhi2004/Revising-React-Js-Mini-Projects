import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src="https://flowbite.com/docs/images/products/apple-watch.png"
                alt="product"
              />
            </a>
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case
              </h5>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523..." />
                    </svg>
                  ))}
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523..." />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                  5.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  $599
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-lg text-sm font-medium"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/browse"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition"
        >
          View All Recipes
        </Link>
      </div>
    </div>
  );
};

export default Featured;
