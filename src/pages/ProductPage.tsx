import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Truck } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock product data (in a real app, you'd fetch this from an API)
  const product = {
    id: parseInt(id || '0'),
    name: 'Smartphone X',
    price: 599,
    rating: 4.5,
    reviews: 1234,
    description: 'The latest Smartphone X features a stunning 6.5" OLED display, 5G connectivity, and an advanced AI-powered camera system.',
    images: [
      'https://source.unsplash.com/random/800x600?smartphone',
      'https://source.unsplash.com/random/800x600?phone',
      'https://source.unsplash.com/random/800x600?mobile',
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <img src={product.images[0]} alt={product.name} className="w-full h-auto rounded-lg" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`${product.name} ${index + 2}`} className="w-full h-auto rounded-lg" />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded">
              <span className="font-bold mr-1">{product.rating}</span>
              <Star size={16} fill="currentColor" />
            </div>
            <span className="ml-2 text-gray-600">{product.reviews} reviews</span>
          </div>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center">
              <ShoppingCart className="mr-2" />
              Add to Cart
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center text-green-600 mb-2">
              <Truck className="mr-2" />
              <span>Free Delivery</span>
            </div>
            <p className="text-gray-600">
              30-day Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;