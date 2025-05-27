'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  // Placeholder images - replace with actual images later
  const images = [
    { id: 1, src: '/images/placeholder1.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/images/placeholder2.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: '/images/placeholder3.jpg', alt: 'Gallery Image 3' },
    // Add more images as needed
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Галерея</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image.id)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={images.find(img => img.id === selectedImage)?.src || ''}
              alt="Full size image"
              width={1200}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
} 