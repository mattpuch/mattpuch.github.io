'use client';

import { useState } from 'react';

export default function Videos() {
  // Placeholder videos - replace with actual videos later
  const videos = [
    {
      id: 1,
      title: 'Видео 1',
      description: 'Описание видео 1',
      thumbnailUrl: '/images/video-thumb1.jpg',
      videoUrl: 'https://www.youtube.com/embed/video1'
    },
    {
      id: 2,
      title: 'Видео 2',
      description: 'Описание видео 2',
      thumbnailUrl: '/images/video-thumb2.jpg',
      videoUrl: 'https://www.youtube.com/embed/video2'
    },
    // Add more videos as needed
  ];

  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Видео</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="relative aspect-video cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for video playback */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button
              className="absolute -top-10 right-0 text-white text-xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
            >
              ✕
            </button>
            <div className="relative aspect-video">
              <iframe
                src={videos.find(v => v.id === selectedVideo)?.videoUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 