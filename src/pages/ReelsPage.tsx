import React from 'react';

const reels = [
  { id: 1, title: 'New Smartphone Unboxing', views: '1.2M', image: 'https://source.unsplash.com/random/400x600?smartphone' },
  { id: 2, title: 'Fashion Haul', views: '890K', image: 'https://source.unsplash.com/random/400x600?fashion' },
  { id: 3, title: 'Tech Gadget Review', views: '2.5M', image: 'https://source.unsplash.com/random/400x600?gadget' },
  { id: 4, title: 'Home Decor Ideas', views: '750K', image: 'https://source.unsplash.com/random/400x600?decor' },
  { id: 5, title: 'Makeup Tutorial', views: '1.8M', image: 'https://source.unsplash.com/random/400x600?makeup' },
  { id: 6, title: 'Fitness Equipment Demo', views: '980K', image: 'https://source.unsplash.com/random/400x600?fitness' },
];

const ReelsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Trending Reels</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reels.map((reel) => (
          <div key={reel.id} className="relative aspect-w-9 aspect-h-16 bg-gray-200 rounded-lg overflow-hidden group">
            <img src={reel.image} alt={reel.title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold mb-1">{reel.title}</h3>
              <p className="text-gray-300 text-sm">{reel.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsPage;