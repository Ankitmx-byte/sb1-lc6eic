import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  { id: 1, title: 'Top 10 Tech Gadgets of 2023', duration: '15:30', views: '2.5M', image: 'https://source.unsplash.com/random/800x450?tech' },
  { id: 2, title: 'Summer Fashion Trends', duration: '12:45', views: '1.8M', image: 'https://source.unsplash.com/random/800x450?fashion' },
  { id: 3, title: 'Smart Home Setup Guide', duration: '20:15', views: '3.2M', image: 'https://source.unsplash.com/random/800x450?smarthome' },
  { id: 4, title: 'Healthy Cooking Appliances Review', duration: '18:20', views: '1.5M', image: 'https://source.unsplash.com/random/800x450?cooking' },
  { id: 5, title: 'Fitness Tracker Comparison', duration: '14:55', views: '2.1M', image: 'https://source.unsplash.com/random/800x450?fitness' },
  { id: 6, title: 'Budget-Friendly Home Makeover', duration: '22:10', views: '1.9M', image: 'https://source.unsplash.com/random/800x450?homedecor' },
];

const VideoPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-w-16 aspect-h-9">
              <img src={video.image} alt={video.title} className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full p-3">
                  <Play className="text-blue-500" size={24} />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;