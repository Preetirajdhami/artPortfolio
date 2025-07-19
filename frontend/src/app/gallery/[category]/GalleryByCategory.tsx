"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BouncingDots } from "@/app/components/Home/Loader";

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
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const categoryMap: Record<string, string> = {
      "graphite-and-charcoal": "Graphite & Charcoal",
      watercolor: "Watercolor",
      acrylic: "Acrylic",
      pastel: "Pastel",
    };

    const formattedCategory = categoryMap[category.toLowerCase()] || category;

    const fetchGallery = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
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

  if (loading) {
   return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <BouncingDots size="md" variant="primary" />
    </div>
  );
  }

  if (!loading && images.length === 0) {
    return (
      <div className="text-center p-20 text-xl">
        No images found in this category.
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen responsive-padding">
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

      {/* Desktop Masonry Layout */}
      <div className="hidden lg:block">
        <div className="columns-2 xl:columns-3 2xl:columns-4 gap-6 space-y-6">
          {images.map((image, i) => (
            <div
              key={image._id}
              className="break-inside-avoid overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image.url}
                alt={image.title}
                width={600} // or set a fixed width if you prefer
                height={0}
                className="w-full h-auto object-cover rounded"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryByCategory;
