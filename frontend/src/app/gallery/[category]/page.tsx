"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

type ImageType = {
  src: string;
};

const categoriesData: Record<string, { title: string; images: ImageType[] }> = {
  "graphite-and-charcoal": {
    title: "Graphite and Charcoal Art",
    images: [
      { src: "/graphite1.jpg" },
      { src: "/graphite2.jpg" },
      { src: "/graphite3.jpg" },
      { src: "/graphite4.jpg" },
      { src: "/graphite1.jpg" },
      { src: "/graphite2.jpg" },
      { src: "/graphite3.jpg" },
      { src: "/graphite4.jpg" },
      { src: "/graphite1.jpg" },
      { src: "/graphite2.jpg" },
      { src: "/graphite3.jpg" },
      { src: "/graphite4.jpg" },
      { src: "/graphite1.jpg" },
      { src: "/graphite2.jpg" },
      { src: "/graphite3.jpg" },
      { src: "/graphite4.jpg" },
    ],
  },
  watercolor: {
    title: "Watercolor Painting",
    images: [
      { src: "/watercolor1.jpg" },
      { src: "/watercolor2.jpg" },
      { src: "/watercolor3.jpg" },
      { src: "/watercolor4.jpg" },
    ],
  },
  acrylic: {
    title: "Acrylic Painting",
    images: [
      { src: "/acrylic1.jpg" },
      { src: "/acrylic2.jpg" },
      { src: "/acrylic3.jpg" },
      { src: "/acrylic4.jpg" },
    ],
  },
};

const GalleryByCategory = ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = React.use(params);
  const data = categoriesData[category];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});
  const scrollRef = useRef<HTMLDivElement | null>(null);

  if (!data) {
    return <div className="text-center p-20 text-xl">Category not found.</div>;
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.clientWidth;
      const currentIndex = Math.round(scrollLeft / itemWidth);
      setCurrentImageIndex(currentIndex);
    }
  };

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => ({
      ...prev,
      [src]: true,
    }));
  };

  const handleImageError = (src: string) => {
    console.error(`Failed to load image: ${src}`);
    setImageLoaded((prev) => ({
      ...prev,
      [src]: false,
    }));
  };

  return (
    <div className="bg-background min-h-screen px-4 py-8">
      <h2 className="text-3xl font-bold text-primary mb-8">{data.title}</h2>

      {/* Mobile Layout - Horizontal Scroll with Page Indicator */}
      <div className="block lg:hidden">
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            onScroll={handleScroll}
          >
            {data.images.map((image, i) => (
              <div
                key={i}
                className="relative flex-none w-full h-[400px] snap-center overflow-hidden"
              >
                {imageLoaded[image.src] === false ? (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-red-500">Failed to load image</p>
                  </div>
                ) : imageLoaded[image.src] ? (
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    onLoad={() => handleImageLoad(image.src)}
                    onError={() => handleImageError(image.src)}
                    priority={i === 0}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p>Loading...</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Page Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1}/{data.images.length}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Responsive Grid */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {data.images.map((image, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full h-[400px]">
                {imageLoaded[image.src] === false ? (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-red-500">Failed to load image</p>
                  </div>
                ) : imageLoaded[image.src] ? (
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    sizes="(max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="object-cover"
                    onLoad={() => handleImageLoad(image.src)}
                    onError={() => handleImageError(image.src)}
                    priority={i < 4}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p>Loading...</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryByCategory;