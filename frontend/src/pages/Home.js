import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Elevate Your Style</h1>
          <p className="text-lg mb-6">Discover the latest trends in fashion, designed just for you.</p>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">Shop Now</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['Men', 'Women', 'Accessories'].map((category) => (
            <div key={category} className="group relative overflow-hidden rounded-xl shadow hover:scale-105 transition">
              <img src={`/images/${category.toLowerCase()}.jpg`} alt={category} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-2xl font-bold">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Style Community</h2>
        <p className="mb-6 text-lg">Get exclusive access to new arrivals, discounts, and style tips.</p>
        <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Stych & Co. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
