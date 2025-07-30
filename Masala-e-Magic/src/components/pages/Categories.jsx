import React from 'react'
import Footer from '../Footer'

const Categories = () => {
  return (
     <>
    <section className="bg-gray-900 text-white px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Explore our carefully curated collection of recipes 
            <span className="text-blue-400"> by meal type and occasion</span>
          </h1>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All Categories", "Breakfast", "Lunch", "Dinner", "Snacks", "Desserts"].map((cat, i) => (
            <button
              key={i}
              type="button"
              className={`px-5 py-2.5 text-sm md:text-base rounded-full font-medium transition
                ${i === 0 
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md" 
                  : "bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-blue-500"} 
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                className="w-full h-44 md:h-56 object-cover rounded-xl transform group-hover:scale-105 transition duration-300"
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index}.jpg`}
                alt={`Category ${index + 1}`}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                              flex items-center justify-center transition">
                <span className="text-white font-semibold">Category {index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      
      </div>
       
    </section>
     <Footer />
    </>
  )
}

export default Categories
