import React from 'react'
import Carousal from './Carousal'
import Stats from './State'
import Footer from './Footer'
import Featured from './Featured.Jsx'

const Home = () => {
  return (
    <>
      {/* Hero Carousel */}
      <section className="w-full">
        <Carousal />
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 px-4 md:px-6 lg:px-8">
        <Stats />
      </section>

      {/* Featured Section */}
      <section className="px-4 md:px-6 lg:px-12 py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Featured Recipes
          </h2>
          <Featured/>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
