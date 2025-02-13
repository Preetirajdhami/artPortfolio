"use client";
import Image from 'next/image';
import { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { useGesture } from '@use-gesture/react'; // For swipe gestures

type ImageType = {
  src: string;
  title: string;
  description: string;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ categoryIndex: number; imageIndex: number } | null>(null);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const galleryData = [
    {
      category: 'Graphite and Charcoal Art',
      images: [
        { src: '/graphite1.jpg', title: 'Mountain Landscape', description: 'Detailed charcoal drawing of mountain ranges' },
        { src: '/graphite2.jpg', title: 'Portrait Study', description: 'Graphite portrait on textured paper' },
        { src: '/graphite3.jpg', title: 'Portrait Study', description: 'Graphite portrait on textured paper' },
        { src: '/graphite4.jpg', title: 'Portrait Study', description: 'Graphite portrait on textured paper' },
      ],
    },
    {
      category: 'Watercolor Painting',
      images: [
        { src: '/watercolor1.jpg', title: 'Floral Arrangement', description: 'Vibrant watercolor flowers' },
        { src: '/watercolor2.jpg', title: 'Floral Arrangement', description: 'Vibrant watercolor flowers' },
        { src: '/watercolor3.jpg', title: 'Floral Arrangement', description: 'Vibrant watercolor flowers' },
        { src: '/watercolor4.jpg', title: 'Floral Arrangement', description: 'Vibrant watercolor flowers' },
        { src: '/watercolor5.jpg', title: 'Floral Arrangement', description: 'Vibrant watercolor flowers' },
        { src: '/watercolor6.jpg', title: 'Floral Arrangement', description: 'Vibrant watercolor flowers' },
        { src: '/watercolor7.jpg', title: 'Floral Arrangement', description: 'Vibrant watercolor flowers' },
        { src: '/watercolor8.jpg', title: 'Floral Arrangement', description: 'Vibrant watercolor flowers' },
        { src: '/watercolor9.jpg', title: 'Floral Arrangement', description: 'Vibrant watercolor flowers' },
      ],
    },
    {
      category: 'Acrylic Painting',
      images: [
        { src: '/acrylic1.jpg', title: 'Sunset Over Ocean', description: 'Acrylic painting of a breathtaking sunset over the waves' },
        { src: '/acrylic2.jpg', title: 'Abstract Expression', description: 'Bold and colorful abstract acrylic artwork' },
        { src: '/acrylic3.jpg', title: 'Abstract Expression', description: 'Bold and colorful abstract acrylic artwork' },
        { src: '/acrylic4.jpg', title: 'Abstract Expression', description: 'Bold and colorful abstract acrylic artwork' },
      ],
    },
  ];

  const scroll = (index: number, direction: 'left' | 'right') => {
    if (scrollRefs.current[index]) {
      const scrollAmount = scrollRefs.current[index].clientWidth / 2; // Scroll half the container width
      scrollRefs.current[index].scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // Handle swipe gestures
  const bindSwipe = useGesture({
    onDragEnd: ({ direction: [dx] }) => {
      if (selectedImage) {
        const totalImages = galleryData[selectedImage.categoryIndex].images.length;
        if (dx > 0) {
          // Swipe right: go to previous image
          setSelectedImage((prev) => ({
            ...prev!,
            imageIndex: (prev!.imageIndex - 1 + totalImages) % totalImages,
          }));
        } else if (dx < 0) {
          // Swipe left: go to next image
          setSelectedImage((prev) => ({
            ...prev!,
            imageIndex: (prev!.imageIndex + 1) % totalImages,
          }));
        }
      }
    },
  });

  // Animation variants
  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const captionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#F6F1EB] min-h-screen py-12">
      <div className="container mx-auto px-4">
        {galleryData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{section.category}</h2>

            {/* Scroll Buttons and Image Row */}
            <div className="relative">
              {/* Left Scroll Button */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-700"
                onClick={() => scroll(sectionIndex, 'left')}
              >
                <FaArrowLeft />
              </button>

              {/* Image Row (Scrollable) */}
              <div
                ref={(el) => (scrollRefs.current[sectionIndex] = el)}
                className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth px-12"
              >
                {section.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative flex-none w-48 h-48 sm:w-64 sm:h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage({ categoryIndex: sectionIndex, imageIndex })}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Right Scroll Button */}
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-700"
                onClick={() => scroll(sectionIndex, 'right')}
              >
                <FaArrowRight />
              </button>
            </div>
          </section>
        ))}

        {/* Lightbox with Animations */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={lightboxVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-50"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes />
                </button>

                {/* Navigation Arrows */}
                <button
                  className="absolute left-4 text-white text-4xl hover:text-gray-300 z-50"
                  onClick={() =>
                    setSelectedImage((prev) => {
                      if (!prev) return prev;
                      const totalImages = galleryData[prev.categoryIndex].images.length;
                      return { ...prev, imageIndex: (prev.imageIndex - 1 + totalImages) % totalImages };
                    })
                  }
                >
                  <FaArrowLeft />
                </button>

                <button
                  className="absolute right-4 text-white text-4xl hover:text-gray-300 z-50"
                  onClick={() =>
                    setSelectedImage((prev) => {
                      if (!prev) return prev;
                      const totalImages = galleryData[prev.categoryIndex].images.length;
                      return { ...prev, imageIndex: (prev.imageIndex + 1) % totalImages };
                    })
                  }
                >
                  <FaArrowRight />
                </button>

                {/* Responsive Image & Caption Container */}
                <motion.div
                  className="max-w-6xl w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-6 md:gap-8"
                  variants={captionVariants}
                >
                  {/* Image with Animation and Swipe Gestures */}
                  <motion.div
                    key={selectedImage.imageIndex}
                    className="flex-1 flex items-center justify-center"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    {...bindSwipe()} // Add swipe gestures here
                  >
                    <Image
                      src={galleryData[selectedImage.categoryIndex].images[selectedImage.imageIndex].src}
                      alt={galleryData[selectedImage.categoryIndex].images[selectedImage.imageIndex].title}
                      width={800}
                      height={600}
                      className="max-w-full max-h-[60vh] md:max-h-[80vh] object-contain"
                    />
                  </motion.div>

                  {/* Scrollable Caption */}
                  <motion.div
                    className="flex-1 p-4 md:p-8 text-white overflow-y-auto max-h-[40vh] md:max-h-[70vh]"
                    variants={captionVariants}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {galleryData[selectedImage.categoryIndex].images[selectedImage.imageIndex].title}
                    </h3>
                    <p className="text-base md:text-lg">
                      {galleryData[selectedImage.categoryIndex].images[selectedImage.imageIndex].description}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;