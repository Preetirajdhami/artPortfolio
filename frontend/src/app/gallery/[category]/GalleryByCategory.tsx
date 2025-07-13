"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type GalleryItem = {
  _id: string;
  title: string;
  category: string;
  url: string;
};

const GalleryByCategory = ({ category }: { category: string }) => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [title, setTitle] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const formattedCategory = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(
          `https://artportfolio-backend.onrender.com/api/gallery`
        );
        const data: GalleryItem[] = await res.json();

        const filtered = data.filter(
          (item) =>
            item.category.toLowerCase() === formattedCategory.toLowerCase()
        );
        setImages(filtered);
        setTitle(`${formattedCategory} Art`);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchGallery();
  }, [category]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.clientWidth;
      const currentIndex = Math.round(scrollLeft / itemWidth);
      setCurrentImageIndex(currentIndex);
    }
  };

  if (images.length === 0) {
    return (
      <div className="text-center p-20 text-xl">
        No images found in this category.
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen px-4 py-8">
      <h2 className="text-3xl font-bold text-primary mb-8">{title}</h2>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            onScroll={handleScroll}
          >
            {images.map((image, i) => (
              <div
                key={image._id}
                className="relative flex-none w-full h-[400px] snap-center overflow-hidden"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Page Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1}/{images.length}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {images.map((image, i) => (
            <div
              key={image._id}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryByCategory;
