import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Electronics', image: 'https://source.unsplash.com/random/800x600?electronics' },
  { name: 'Fashion', image: 'https://source.unsplash.com/random/800x600?fashion' },
  { name: 'Home', image: 'https://source.unsplash.com/random/800x600?home' },
  { name: 'Beauty', image: 'https://source.unsplash.com/random/800x600?beauty' },
];

const featuredProducts = [
  { id: 1, name: 'Smartphone X', price: 599, image: 'https://source.unsplash.com/random/400x300?smartphone' },
  { id: 2, name: 'Laptop Pro', price: 1299, image: 'https://source.unsplash.com/random/400x300?laptop' },
  { id: 3, name: 'Wireless Earbuds', price: 129, image: 'https://source.unsplash.com/random/400x300?earbuds' },
  { id: 4, name: 'Smart Watch', price: 199, image: 'https://source.unsplash.com/random/400x300?smartwatch' },
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="relative overflow-hidden rounded-lg shadow-md">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Trending Reels</h2>
          <Link to="/reels" className="text-blue-500 flex items-center">
            View All <ChevronRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="aspect-w-9 aspect-h-16 bg-gray-200 rounded-lg overflow-hidden">
              <img src={`https://source.unsplash.com/random/400x600?product=${index}`} alt={`Reel ${index}`} className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Videos</h2>
          <Link to="/videos" className="text-blue-500 flex items-center">
            View All <ChevronRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((index) => (
            <div key={index} className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <img src={`https://source.unsplash.com/random/800x450?product=${index + 4}`} alt={`Video ${index}`} className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;