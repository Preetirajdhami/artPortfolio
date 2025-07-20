"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";


type GalleryItem = {
  _id: string;
  title: string;
  category: string;
  url: string;
};

const Gallery = () => {
  const [galleryData, setGalleryData] = useState<{ [category: string]: GalleryItem[] }>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("https://artportfolio-backend.onrender.com/api/gallery");
        const data: GalleryItem[] = await res.json();

        const grouped: { [category: string]: GalleryItem[] } = {};
        data.forEach((item) => {
          if (!grouped[item.category]) {
            grouped[item.category] = [];
          }
          grouped[item.category].push(item);
        });

        setGalleryData(grouped);

        const initialIndexes: { [key: string]: number } = {};
        Object.keys(grouped).forEach((cat) => {
          initialIndexes[cat] = 0;
        });
        setCurrentImageIndex(initialIndexes);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      }
    };

    fetchGallery();
  }, []);

  

  const handleScroll = (category: string) => {
    const container = scrollRefs.current[category];
    if (container) {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.clientWidth;
      const currentIndex = Math.round(scrollLeft / itemWidth);
      setCurrentImageIndex((prev) => ({ ...prev, [category]: currentIndex }));
    }
  };

  return (
    <div className="bg-background min-h-screen responsive-padding">
      <div className="mx-auto px-4 py-8">
        {Object.entries(galleryData).map(([category, items]) => (
          <section key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">{category}</h2>

            {/* Mobile Layout */}
            <div className="block sm:hidden">
              <div className="relative">
                <div
                  ref={(el) => {
                    scrollRefs.current[category] = el;
                  }}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
                  onScroll={() => handleScroll(category)}
                >
                  {items.map((image, i) => (
                    <div
                      key={image._id}
                      className="relative flex-none w-full h-[400px] snap-center overflow-hidden"
                    >
                      <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        className="object-cover"
                        priority={i === 0}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/fallback.jpg";
                        }}
                      />
                    </div>
                  ))}
                </div>

               
                
                

                {/* Page Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                  {(currentImageIndex[category] || 0) + 1}/{items.length}
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {items.map((image, i) => (
                  <div
                    key={image._id}
                    className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={i < 4}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/fallback.jpg";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
